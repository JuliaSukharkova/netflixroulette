import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../costants/costants";
import { BrowserRouter } from "react-router-dom";
import { Search } from "../components/Search/Search";
import React from "react";
import userEvent from "@testing-library/user-event";

describe("render Search Input", () => {
  it("Test that component renders an input with the value equal to initial value passed in props", () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </ThemeProvider>
    );
    const inputEl = screen.getByTestId("input");
    fireEvent.change(inputEl, {
      target: { value: "Zoo" },
    });
    expect(screen.getByTestId("input")).toHaveValue("Zoo");
  });
  it("Test that after typing to the input and a click event on the Submit button, the onChange prop is called with proper value", () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </ThemeProvider>
    );
    const button = screen.getByRole("button");
    const inputEl = screen.getByTestId("input");
    fireEvent.change(inputEl, {
      target: { value: "Zoo" },
    });
    fireEvent.click(button);
    expect(screen.getByTestId("input")).toHaveValue("Zoo");
  });
  it("Test that after typing to the input and pressing Enter key, the onChange prop is called with proper value", () => {
    render(
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </ThemeProvider>
    );
    const button = screen.getByRole("button");
    const inputEl = screen.getByTestId("input");
    fireEvent.change(inputEl, {
      target: { value: "Zoo" },
    });
    userEvent.type(button, "abc{enter}");
    expect(screen.getByTestId("input")).toHaveValue("Zoo");
  });
});
