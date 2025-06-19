import path from "path";
import {
  Configuration as WebpackConfiguration,
  HotModuleReplacementPlugin,
  DefinePlugin,
} from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ESLintPlugin from "eslint-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CssMinimizerPlugin from "css-minimizer-webpack-plugin";
import dotenv from "dotenv";
import * as webpack from "webpack";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const envConfig = dotenv.config().parsed || {};
const envKeys = Object.keys(envConfig).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(envConfig[next]);
  return prev;
}, {});
envKeys["process.env.NODE_ENV"] = JSON.stringify(
  process.env.NODE_ENV || "development"
);

const config: Configuration = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    publicPath: "/",
    filename: "[name].js",
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
        test: /\.(png|svg|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
    ],
  },
  optimization: {
    minimize: false,
    minimizer: [new CssMinimizerPlugin()],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    fallback: {
      process: require.resolve("process/browser.js"),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: require.resolve("process/browser.js"),
    }),
    new DefinePlugin(envKeys),
    new HtmlWebpackPlugin({ template: "src/index.html" }),
    new HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new ESLintPlugin({
      extensions: ["js", "jsx", "ts", "tsx"],
      overrideConfigFile: "./.eslintrc.js",
    }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    port: 8080,
    open: true,
    hot: true,
  },
};

export default config;
