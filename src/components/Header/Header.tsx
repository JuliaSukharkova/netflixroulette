import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../costants/routes";
import { ModalAddMovie } from "../ModalStyle/ModalMovie/ModalAddMovie";
import { ModalWindow } from "../ModalStyle/ModalWindow/ModalWindow";
import { Search } from "../Search/Search";
import { Flex, Margin } from "../Common/Flex";
import { HeaderStyle, Button, TitleStyle } from "./HeaderStyle";
import { ModalSuccess } from "../ModalStyle/SuccesForm/ModalSuccess";
import { getMovieUpdateAsync } from "../../store/movieStore/api";
import { useDispatch } from "react-redux";

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const dispatch = useDispatch();
  const onClose = () => {
    setModalActive(false);
    setShowSuccessModal(false);
    getMovieUpdateAsync(dispatch);
  };

  return (
    <>
      <HeaderStyle>
        <Flex direction="row" justify="center" position="relative" margin={20}>
          <Margin margin={60}>
            <Link to={HOME}>
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
          {showSuccessModal ? (
            <ModalSuccess />
          ) : (
            <ModalAddMovie setShowSuccessModal={setShowSuccessModal} />
          )}
        </ModalWindow>
      </HeaderStyle>
    </>
  );
};
