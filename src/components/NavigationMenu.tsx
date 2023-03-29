import React from "react";
import { IGenre } from "../types/genres";

export const NavigationMenu = ({
  items,
  genreValue, 
  setGenreValue,
}: IGenre) => {
  return (
    <div className="nav-menu__list">
      <ul className="switcher">
        {items.map(
          ({id, name, value}:{id:number, name: string, value: string}) => (
            <li
              key={id}
              id={value}
              className={`${
                value === genreValue ? "switcher__checkbox_active" : "switcher__checkbox"
              }`}
            >
              <a
                href="#"
                className="switcher__control"
                onClick={(e) => {
                  setGenreValue(value);
                  e.preventDefault();
                }}
              >{name}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
