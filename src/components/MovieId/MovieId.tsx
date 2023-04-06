import React, { useState } from "react";
import { IMovieDetail } from "../../types/moviedetail";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HOME, MOVIE_SEARCH } from "../../costants/routes";
import { Flex } from "../Common/Flex";
import { MovieIdHeader } from "./MovieIdHeader";
import { Logo } from "./Logo";
import { Container, InputSearch, SearchDiv } from "./SearchIcon";
import { MovieIdContainer, MovieIdGenre, MovieIdImg, MovieIdInfo, MovieIdOverview, MovieIdRelease, MovieIdTitle, MovieIdVote } from "./FilmStyle";
import { MovieIdFooter } from "./MovieIdFooter";

export const MovieId = ({
  id,
  poster_path,
  title,
  vote_average,
  genres,
  release_date,
  runtime,
  overview,
}: IMovieDetail) => {
  const navigate = useNavigate()
  const [params] = useSearchParams();
  const [searchValue, setSearchValue] = useState(params.get("value") || "");

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    searchValue && navigate(`${MOVIE_SEARCH}/?value=${searchValue}`);
  };

  const getTimeFromMins = (runtime: any) => {
    const hours = Math.trunc(runtime / 60);
    const minutes = runtime % 60;
    return hours + "h" + minutes + "min";
  };
  return (
    <>
      <MovieIdHeader className="movie-page">
        <Flex direction="row" position="relative">
        <Link to={`${HOME}`}>
          <Logo>netflixroulette</Logo></Link>
          <Container onSubmit={handleSubmit}>
            <InputSearch
              onChange={onSearch}
              value={searchValue}
              placeholder="What do you want to watch?"
            />
            <SearchDiv className="search"></SearchDiv>
          </Container>
        </Flex>
        <MovieIdContainer  key={id}>
          <MovieIdImg src={poster_path} alt="#" />
          <Flex direction="column">
            <MovieIdInfo>
              <MovieIdTitle>{title}</MovieIdTitle>
              <MovieIdVote>{vote_average}</MovieIdVote>
            </MovieIdInfo>
            <MovieIdGenre>
              {genres.slice(0, 2).map((genre, index) => (
                <p key={index}>
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </p>
              ))}
            </MovieIdGenre>
            <MovieIdRelease>
              <p>{new Date(release_date).getFullYear()}</p>
              <p>{getTimeFromMins(runtime)}</p>
            </MovieIdRelease>
            <MovieIdOverview>{overview}</MovieIdOverview>
          </Flex>
        </MovieIdContainer>
      </MovieIdHeader>
      <MovieIdFooter></MovieIdFooter>
    </>
  );
};
