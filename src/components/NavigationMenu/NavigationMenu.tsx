import React from "react";
import { IGenre } from "../../types/genres";
import { NavContainer, NavElement, NavItem,  NavList } from "./NavigationStyle";

export const NavigationMenu = ({
  items,
  genreValue, 
  setGenreValue,
}: IGenre) => {
  return (
    <NavContainer>
      <NavList>
        {items.map(
          ({id, name, value}) => (
            <NavItem
              key={id}
              id={value}
              data-testid={value}
              className={`${
                value === genreValue ? 'active' : ''
              }`}
            >
              <NavElement
                id={value}
                href="#"
                onClick={(e) => {
                  setGenreValue(value);
                  e.preventDefault();
                }}
              >{name}
              </NavElement>
            </NavItem>
          )
        )}
      </NavList>
    </NavContainer>
  );
};
