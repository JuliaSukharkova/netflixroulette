import React from "react";
import { Link } from "react-router-dom";
import { MOVIE } from "../../costants/routes";
import { IMovie } from "../../types/movie";
import { Flex } from "../Common/Flex";
import {
  MovieCard,
  MovieImageWrapper,
  PosterImage,
  MovieInfo,
  TitleYear,
  MovieTitle,
  MovieYear,
  GenreList,
} from "./MovieStyle";

export const MovieItem = ({
  kinopoiskId,
  nameRu,
  posterUrlPreview,
  genres,
  year,
}: IMovie) => {
  return (
    <MovieCard>
      <MovieImageWrapper>
        <Link to={`${MOVIE}/${kinopoiskId}`}>
          <PosterImage src={posterUrlPreview} alt={`Постер фильма ${nameRu}`} />
        </Link>
      </MovieImageWrapper>

      <MovieInfo>
        <TitleYear>
          <MovieTitle>{nameRu}</MovieTitle>
          <MovieYear>{year}</MovieYear>
        </TitleYear>

        <GenreList>
          {genres.slice(0, 2).map((g) => (
            <span key={g.genre}>
              {g.genre.charAt(0).toUpperCase() + g.genre.slice(1)}
            </span>
          ))}
        </GenreList>
      </MovieInfo>
    </MovieCard>
  );
};
