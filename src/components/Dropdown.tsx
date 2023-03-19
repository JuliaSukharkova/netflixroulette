import React from "react";

export const Dropdown = () => {
  return (
    <div className="nav-menu__dropdown">
      <p>sort by</p>
      <div className="dropdown">
        <button className="dropdown__hover">release date</button>
        <div className="dropdown__menu">
          <a href="#">rating</a>
          <a href="#">popularity</a>
          <a href="#">recommended</a>
        </div>
      </div>
    </div>
  );
};
