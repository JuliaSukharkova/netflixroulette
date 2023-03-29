import React, { useState } from "react";
import { IDrop } from "../types/dropdown";

export const Dropdown = ({ items, dropdownValue, setDropdownValue }: IDrop) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="dropdown__hover" onClick={() => setIsOpen(!isOpen)}>
        {
          items.find(({ value }: { value: string }) => value === dropdownValue)
            .name
        }
      </button>
      <ul className="dropdown__menu">
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
            <li
              onClick={() => {
                setDropdownValue(value);
                setIsOpen(false);
              }}
              key={id}
            >
              {name}
            </li>
          )
        )}
      </ul>
    </div>
  );
};
