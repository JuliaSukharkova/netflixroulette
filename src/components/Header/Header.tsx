import React from "react";
import { HOME } from "../../costants/routes";
import { Search } from "../Search/Search";
import {
  HeaderStyle,
  LogoLink,
  TitleAndSearch,
  TopRow,
} from "./HeaderStyle";

export const Header = () => {
  return (
    <HeaderStyle>
      <TopRow>
        <LogoLink to={HOME}>
          <img
            src="https://i.ibb.co/59Ckp19/netflixroulette-copy.png"
            alt="logo"
          />
        </LogoLink>
        <div></div>
      </TopRow>

      <TitleAndSearch>
        <Search />
      </TitleAndSearch>
    </HeaderStyle>
  );
};
