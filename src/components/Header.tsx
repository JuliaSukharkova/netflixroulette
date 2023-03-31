import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../costants/routes";
import { IAddMovie } from "../types/addmovie";
import { ModalAddMovie } from "./ModalAddMovie";
import { ModalWindow } from "./ModalWindow";
import { Search } from "./Search";
import axios from "axios";
import { MOVIES_LIST } from "../costants/endpoints";
import { Flex, Margin } from "./styled-components/Header/Flex";
import { HeaderStyle } from "./styled-components/Header/HeaderStyle";
import { Button } from "./styled-components/Header/Button";
import { TitleStyle } from "./styled-components/Header/TitleHeader";

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const onClose = () => setModalActive(false);

  const Submit = async (form: IAddMovie) => {
    try {
      const response = await axios.post(MOVIES_LIST, form);
      return response.data;
    } catch (error: any) {
      return { error: error.response };
    }
  };
  return (
    <>
      <HeaderStyle>
        <Flex direction="row" justify="center" position="relative" margin={20}>
          <Margin margin={60}>
            <Link to={`${HOME}`}>
              <img
                src="https://i.ibb.co/59Ckp19/netflixroulette-copy.png"
                alt="logo"
              />
            </Link>
          </Margin>
          <Button onClick={() => setModalActive(true)}>+ add movie</Button>
        </Flex>
        <TitleStyle>FIND YOUR MOVIE</TitleStyle>
        <Search />
        <ModalWindow
          active={modalActive}
          setActive={setModalActive}
          onClose={onClose}
        >
          <ModalAddMovie onSubmit={Submit} />
        </ModalWindow>
      </HeaderStyle>
    </>
  );
};
