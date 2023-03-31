import React, { useState } from "react";
import { IDrop } from "../types/dropdown";
import {
  DropdownBtn,
  DropdownContainer,
  DropdownList,
  DropdownMenu,
} from "./styled-components/DropdownStyle/DropdownStyle";

export const Dropdown = ({ items, dropdownValue, setDropdownValue }: IDrop) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContainer>
      <DropdownBtn onClick={() => setIsOpen(!isOpen)}>
        {
          items.find(({ value }: { value: string }) => value === dropdownValue)
            .name
        }
      </DropdownBtn>
      <DropdownMenu>
        {items.map(
          ({
            id,
            name,
            value,
          }: {
            id: number;
            name: string;
            value: string;
          }) => (
            <DropdownList
              onClick={() => {
                setDropdownValue(value);
                setIsOpen(false);
              }}
              key={id}
            >
              {name}
            </DropdownList>
          )
        )}
      </DropdownMenu>
    </DropdownContainer>
  );
};
