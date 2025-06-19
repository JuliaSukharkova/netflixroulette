import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../costants/costants";
import { BrowserRouter } from "react-router-dom";
import { NavigationMenu } from "../components/NavigationMenu/NavigationMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../store/reducers";

const store = configureStore({
  reducer: rootReducer,
});

const newGenre = [
  { id: 1, name: "All", value: "" },
  { id: 2, name: "Documentary", value: "documentary" },
  { id: 3, name: "Horror", value: "horror" },
  { id: 4, name: "Comedy", value: "comedy" },
  { id: 5, name: "Crime", value: "crime" },
];

describe("NavigationMenu component", () => {
  const renderComponent = (selectedId = 0, onSelect = jest.fn()) =>
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <NavigationMenu
              items={newGenre}
              selectedId={selectedId}
              onSelect={onSelect}
              navRef={undefined}
            />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );

  it("renders all genres passed in props", () => {
    renderComponent();

    newGenre.forEach((genre) => {
      const genreElement = screen.getByText(genre.name);
      expect(genreElement).toBeInTheDocument();
      expect(genreElement.id).toBe(genre.value);
    });
  });

  it("calls onSelect with the correct genre id when clicked", () => {
    const setGenreId = jest.fn();
    renderComponent(0, setGenreId);

    const comedyLink = screen.getByText("Comedy");
    fireEvent.click(comedyLink);

    expect(setGenreId).toHaveBeenCalledWith(4);
  });

  it("applies selected style to the selected genre", () => {
    renderComponent(3);

    const selectedItem = screen.getByText("Horror");
    expect(selectedItem).toHaveClass("selected"); 
  });
});
