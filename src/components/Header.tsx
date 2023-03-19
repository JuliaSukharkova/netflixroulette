import React from "react";
import "../styles/header.scss";
import { Search} from "./Search";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <div>
            <img
              src="https://i.ibb.co/59Ckp19/netflixroulette-copy.png"
              alt="logo"
            />
          </div>
          <button>+ add movie</button>
        </div>
        <h1 className="header__title">FIND YOUR MOVIE</h1>
        <Search />
      </header>
    </>
  );
};
