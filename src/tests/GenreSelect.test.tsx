import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../costants/costants";
import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "../components/NavigationMenu/NavigationMenu";
import { render, screen } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

export const newGenre = [
  { id: 1, name: "All", value: "" },
  { id: 2, name: "Documentary", value: "documentary" },
  { id: 3, name: "Horror", value: "horror" },
  { id: 4, name: "Comedy", value: "comedy" },
  { id: 5, name: "Crime", value: "crime" },
];

describe("Genres render", () => {
  it("Test that component renders all genres passed in props", () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      movies: {
        movies: [],
      },
    });
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <NavigationMenu
              items={newGenre}
              genreValue={newGenre[0].value}
              setGenreValue={newGenre[0].value}
            />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );

    expect(screen.getByText(/all/i).textContent).toEqual(newGenre[0].name);
    expect(screen.getByText(/all/i).id).toEqual(newGenre[0].value);

    expect(screen.getByText(/documentary/i).textContent).toEqual(
      newGenre[1].name
    );
    expect(screen.getByText(/documentary/i).id).toEqual(newGenre[1].value);

    expect(screen.getByText(/horror/i).textContent).toEqual(newGenre[2].name);
    expect(screen.getByText(/horror/i).id).toEqual(newGenre[2].value);

    expect(screen.getByText(/comedy/i).textContent).toEqual(newGenre[3].name);
    expect(screen.getByText(/comedy/i).id).toEqual(newGenre[3].value);

    expect(screen.getByText(/crime/i).textContent).toEqual(newGenre[4].name);
    expect(screen.getByText(/crime/i).id).toEqual(newGenre[4].value);
  });
  it("Test that component highlights a selected genre passed in props", () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      movies: {
        movies: [],
      },
    });
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <NavigationMenu
              items={newGenre}
              genreValue={newGenre[0].value}
              setGenreValue={newGenre[0].value}
            />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
    const chooseElem = screen.getByTestId("comedy");
    userEvent.click(chooseElem);
    expect(screen.getByTestId("comedy").className).toHaveClass("active")
    screen.debug(chooseElem);
  });
  it("Test that after a click event on a genre button component calls onChange callback and passes correct genre in arguments", () => {
    const mockStore = configureMockStore();
    const store = mockStore({
      movies: {
        movies: [],
      },
    });
    render(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <NavigationMenu
              items={newGenre}
              genreValue={newGenre[0].value}
              setGenreValue={newGenre[0].value}
            />
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    );
    const element = screen.getByText(/documentary/i);
    userEvent.click(element);
    expect(element.id).toBe(newGenre[1].value);
  });
});
