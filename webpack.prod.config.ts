import path from "path";
import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import dotenv from "dotenv";
import * as webpack from "webpack";

const dotenvParsed = dotenv.config().parsed || {};

const envKeys = Object.keys(dotenvParsed).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(dotenvParsed[next]);
  return prev;
}, {} as Record<string, string>);

envKeys["process.env.NODE_ENV"] = JSON.stringify(
  process.env.NODE_ENV || "production"
);

const config: Configuration = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    publicPath: "/netflixroulette/",
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        type: "javascript/auto",
        resolve: { fullySpecified: false },
      },
      {
        test: /\.(ts|js)x?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.s?css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    fallback: {
      process: require.resolve('process/browser.js'), 
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: require.resolve('process/browser.js'), 
    }),
    new DefinePlugin(envKeys),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      overrideConfigFile: "./.eslintrc.js",
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
};

export default config;
