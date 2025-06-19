import React from "react";
import { NavContainer, NavList, NavItem, NavElement } from "./NavigationStyle";

type Props = {
  items: { id: number; name: string }[];
  selectedId: number;
  onSelect: (id: number) => void;
  navRef: React.RefObject<HTMLUListElement>;
};

export const NavigationMenu = ({ items, selectedId, onSelect, navRef }: Props) => {
  return (
    <NavContainer>
      <NavList ref={navRef}>
        {items.map(({ id, name }) => (
          <NavItem
            key={id}
            className={id === selectedId ? "active" : ""}
          >
            <NavElement
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onSelect(id);
              }}
            >
              {name}
            </NavElement>
          </NavItem>
        ))}
      </NavList>
    </NavContainer>
  );
};
