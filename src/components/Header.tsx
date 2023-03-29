import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../costants/routes";
import "../styles/header.scss";
import { IAddMovie } from "../types/addmovie";
import { ModalAddMovie } from "./ModalAddMovie";
import { ModalWindow } from "./ModalWindow";
import { Search } from "./Search";
import axios from "axios";
import { MOVIES_LIST } from "../costants/endpoints";
//import { ModalSuccess } from "./ModalSuccess";

export const Header = () => {
  const [modalActive, setModalActive] = useState(false);
  const onClose = () => setModalActive(false);

  const Submit = async (form: IAddMovie) => {
    try {
      const response = await axios.post(MOVIES_LIST, form);
      return response.data
    } catch (error: any) {
      return { error: error.response }
    }
  };
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <div>
            <Link to={`${HOME}`}>
              <img
                src="https://i.ibb.co/59Ckp19/netflixroulette-copy.png"
                alt="logo"
              />
            </Link>
          </div>
          <button onClick={() => setModalActive(true)}>+ add movie</button>
        </div>
        <h1 className="header__title">FIND YOUR MOVIE</h1>
        <Search />
        <ModalWindow
          active={modalActive}
          setActive={setModalActive}
          onClose={onClose}
        >
          <ModalAddMovie onSubmit={Submit} />
          
        </ModalWindow>
      </header>
    </>
  );
};
