import { render, screen } from "@testing-library/react";
import { MovieItem } from "../components/MovieForm/MovieItem";
import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../costants/costants";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

describe("MovieItem component", () => {
  const newMovie = {
    kinopoiskId: 12345,
    nameRu: "Emily",
    posterUrlPreview: "http://www.img.com",
    genres: [{ genre: "Comedy" }],
    year: "2022",
  };

  const mockStore = configureMockStore();
  const store = mockStore({
    movies: {
      movies: [],
    },
  });

  it("renders MovieItem component with correct data", () => {
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <MovieItem {...newMovie} />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    expect(screen.getByText("Emily")).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("Comedy")).toBeInTheDocument();

    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "http://www.img.com");
  });
});
