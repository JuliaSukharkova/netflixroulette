import React from "react";
import { FooterImg, FooterComponent } from "./styled-components/FooterStyle/FooterStyle";

export const Footer = () => {
  return (
    <FooterComponent>
      <FooterImg
        className="footer-logo"
        src="https://i.ibb.co/59Ckp19/netflixroulette-copy.png"
        alt="logo"
      />
    </FooterComponent>
  );
};
