import React from "react";
import { Dropdown } from "./Dropdown";

export const NavigationMenu = () => {
  return (
    <nav className="nav-menu">
      <div className="nav-menu__list">
        <div className="switcher">
          <input
            className="switcher__checkbox"
            type="radio"
            id="genreChoice1"
            name="movie"
            value="film"
            checked
          />
          <label className="switcher__control" htmlFor="genreChoice1">
            all
          </label>

          <input
            className="switcher__checkbox"
            type="radio"
            id="genreChoice2"
            name="movie"
            value="film"
          />
          <label className="switcher__control large" htmlFor="genreChoice2">
            documentary
          </label>

          <input
            className="switcher__checkbox"
            type="radio"
            id="genreChoice3"
            name="movie"
            value="film"
          />
          <label className="switcher__control medium" htmlFor="genreChoice3">
            horror
          </label>

          <input
            className="switcher__checkbox"
            type="radio"
            id="genreChoice4"
            name="movie"
            value="film"
          />
          <label className="switcher__control medium" htmlFor="genreChoice4">
            comedy
          </label>

          <input
            className="switcher__checkbox"
            type="radio"
            id="genreChoice5"
            name="movie"
            value="film"
          />
          <label className="switcher__control medium" htmlFor="genreChoice5">
            crime
          </label>
        </div>
      </div>
      <Dropdown />
    </nav>
  );
};
