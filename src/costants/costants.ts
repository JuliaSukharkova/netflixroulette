import { createGlobalStyle } from "styled-components";

export const sortItems = [
  { id: 1, name: "Release date", value: "release_date" },
  { id: 2, name: "Rating", value: "vote_average" },
  { id: 3, name: "Budget", value: "budget" },
];

export const genresItems = [
  { id: 1, name: "All", value: "" },
  { id: 2, name: "Documentary", value: "documentary" },
  { id: 3, name: "Horror", value: "horror" },
  { id: 4, name: "Comedy", value: "comedy" },
  { id: 5, name: "Crime", value: "crime" },
];
export const form = [
  { label: "Crime", htmlFor: "crime", name: "crime", value: "Crime" },
  {
    label: "Documentary",
    htmlFor: "documentary",
    name: "documentary",
    value: "Documentary",
    checked: true,
  },
  {
    label: "Horror",
    htmlFor: "horror",
    name: "horror",
    value: "Horror",
    checked: true,
  },
  {
    label: "Comedy",
    htmlFor: "comedy",
    name: "comedy",
    value: "Comedy",
    checked: true,
  },
];

export type MyValues = {
  title: HTMLInputElement;
  date: HTMLInputElement;
  poster: HTMLInputElement;
  rating: HTMLInputElement;
  documentary: HTMLInputElement;
  crime: HTMLInputElement;
  horror: HTMLInputElement;
  comedy: HTMLInputElement;
  time: HTMLInputElement;
  overview: HTMLInputElement;
};

export const Global = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        outline: none;
        box-sizing: border-box;
        font-family: Montserrat, sans-serif;
        text-decoration: none;
        list-style-type: none;
    }
    body {
        font-size: 14px;
        color: white;
        background-color: #424242;
    }

`;
export const theme = {
  colors: {
    primaryColor: "white",
    secondaryColor: "#f65261",
    tertiaryColor: "#f38281",
    boxShadowColor: "rgba(0, 0, 0, 0.3)",
    placeholderModalColor: "rgb(159, 159, 159)",
    checkBoxModalColor: "rgb(243 , 130, 129)",
    lineColor: "#424242",
    borderColor: "#979797",
    inputFocusColor: "#ffffff90"
  },
  background: {
    bgColor: "#232323",
    bgColorBtn: "rgba(96, 96, 96, 0.68)",
    bgColorOpacity: "rgba(0, 0, 0, 0.9)",
    bgColorTransparent: "rgba(0, 0, 0, 0)",
    bgColorInput: "rgba(50, 50, 50, 0.8)",
    bgHoverDrop: "#888",
    bgInputModal: "rgba(50, 50, 50, 0.948044)",
    bgCheckBoxItem: "rgb(35, 35, 35)",
    bgModalContainer: "rgba(35, 35, 35, 0.9)",
    bgFooter: "#888888",
  },
  fontSize: {
    fontSizeL: "20px",
    fontSizeM: "18px",
    fontSizeS: "16px",
    fontSizeXs: "14px",
  },
  media: {
    phone: "(max-width: 425px)",
    portraitTablets: "(max-width: 768px) and (min-width:425px)",
    smallDesktops: "(min-width: 768px) and (max-width: 991px)",
    medDesktops: "(min-width: 992px) and (max-width: 1199px)",
  },
};
