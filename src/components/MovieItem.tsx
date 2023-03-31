import React from "react";
import { Link } from "react-router-dom";
import { MOVIE } from "../costants/routes";
import { IMovie } from "../types/movie";
import { Flex } from "./styled-components/Header/Flex";
import { MovieContainer, MovieGenre, MovieImg, MovieTitle, MovieYear } from "./styled-components/MovieStyle/MovieStyle";

export const MovieItem = ({
  id,
  poster_path,
  title,
  release_date,
  genres,
}: IMovie) => {
  return (
    <MovieContainer key={id}>
      <MovieImg>
        <Link to={`${MOVIE}/${id}`}>
          <img src={poster_path} alt="card" />
        </Link>
      </MovieImg>
      <Flex direction="row" align="center">
        <Link to={`${MOVIE}/${id}`}>
          <MovieTitle>{title}</MovieTitle>
        </Link>
        <MovieYear>
          {new Date(release_date).getFullYear()}
        </MovieYear>
      </Flex>
      <MovieGenre>
        {genres.slice(0, 2).map((genre, index) => (
          <p key={index}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</p>
        ))}
      </MovieGenre>
    </MovieContainer>
  );
};
