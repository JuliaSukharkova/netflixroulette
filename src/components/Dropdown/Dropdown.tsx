import React, { useState } from "react";
import {
  DropdownBtn,
  DropdownContainer,
  DropdownList,
  DropdownMenu,
} from "./DropdownStyle";

interface IDrop {
  items: { id: number; name: string; value: string }[];
  dropdownValue: string;
  setDropdownValue: (value: string) => void;
}

export const Dropdown = ({ items, dropdownValue, setDropdownValue }: IDrop) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedItem = items.find(({ value }) => value === dropdownValue).name;

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    console.log(value, "value");
    setDropdownValue(value);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownBtn onClick={toggleOpen}>{selectedItem}</DropdownBtn>
      <DropdownMenu $isOpen={isOpen}>
        {items.map(({ id, name, value }) => (
          <DropdownList key={id} onClick={() => handleSelect(value)}>
            {name}
          </DropdownList>
        ))}
      </DropdownMenu>
    </DropdownContainer>
  );
};
