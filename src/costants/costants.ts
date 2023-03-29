export const sortItems = [
  { id: 1, name: "Release date", value: "release_date" },
  { id: 2, name: "Rating", value: "vote_average" },
  { id: 3, name: "Budget", value: "budget" },
];

export const genresItems = [
  { id: 1, name: `All`, value: "" },
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
