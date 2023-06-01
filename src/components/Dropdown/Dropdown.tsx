import React, { useState } from "react";
import { IDrop } from "../../types/dropdown";
import {
  DropdownBtn,
  DropdownContainer,
  DropdownList,
  DropdownMenu,
} from "./DropdownStyle";

export const Dropdown = ({ items, dropdownValue, setDropdownValue }: IDrop) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (value) => {
    setDropdownValue(value);
    setIsOpen(false);
  };
  return (
    <DropdownContainer>
      <DropdownBtn onClick={() => setIsOpen(!isOpen)}>
        {items.find(({ value }) => value === dropdownValue).name}
      </DropdownBtn>
      <DropdownMenu>
        {items.map(({ id, name, value }) => (
          <DropdownList
            onClick={() =>{handleClick(value)}}
            key={id}
          >
            {name}
          </DropdownList>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};
