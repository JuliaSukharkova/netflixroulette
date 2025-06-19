import React, { useState } from "react";
import { IMovieDetail } from "../../types/moviedetail";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HOME, MOVIE_SEARCH } from "../../costants/routes";
import { Flex } from "../Common/Flex";
import { MovieIdHeader } from "./MovieIdHeader";
import { Logo } from "./Logo";
import { Container, InputSearch, SearchDiv } from "./SearchIcon";
import {
  Description,
  Genres,
  GenreTag,
  MovieDetails,
  MovieIdContainer,
  MovieIdImg,
  MovieIdTitle,
  MovieIdVote,
  ReleaseInfo,
} from "./FilmStyle";
import { MovieIdFooter } from "./MovieIdFooter";
import { getTimeFromMins } from "../../types/utiles";
import { FaStar, FaCalendarAlt, FaClock } from "react-icons/fa";

export const MovieId = ({
  kinopoiskId,
  posterUrl,
  nameRu,
  ratingKinopoisk,
  genres,
  year,
  filmLength,
  description,
}: IMovieDetail) => {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const [searchValue, setSearchValue] = useState(params.get("value") || "");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (searchValue.trim()) {
      navigate(`${MOVIE_SEARCH}/?value=${searchValue}`);
    }
  };

  return (
    <>
      <MovieIdHeader className="movie-page">
        <Flex direction="row" position="relative">
          <Link to={HOME}>
            <Logo>netflixroulette</Logo>
          </Link>
          <Container onSubmit={handleSubmit}>
            <InputSearch
              onChange={onSearch}
              value={searchValue}
              placeholder="Что бы Вы хотели посмотреть?"
            />
            <SearchDiv className="search" />
          </Container>
        </Flex>
        <MovieIdContainer>
          <MovieIdImg src={posterUrl} alt={nameRu} />
          <MovieDetails>
            <MovieIdTitle>{nameRu}</MovieIdTitle>
            {ratingKinopoisk && (
              <MovieIdVote>
                <FaStar />
                {ratingKinopoisk}
              </MovieIdVote>
            )}

            <Genres>
              {genres.slice(0, 5).map(({ genre }) => (
                <GenreTag key={genre}>{genre}</GenreTag>
              ))}
            </Genres>

            <ReleaseInfo>
              <div
                style={{ display: "flex", alignItems: "center", gap: "4px" }}
              >
                <FaCalendarAlt /> <span>{year}</span>
              </div>
              {filmLength && (
                <div
                  style={{ display: "flex", alignItems: "center", gap: "4px" }}
                >
                  <FaClock /> <span>{getTimeFromMins(filmLength)}</span>
                </div>
              )}
            </ReleaseInfo>

            <Description>{description}</Description>
          </MovieDetails>
        </MovieIdContainer>
      </MovieIdHeader>
      <MovieIdFooter />
    </>
  );
};
