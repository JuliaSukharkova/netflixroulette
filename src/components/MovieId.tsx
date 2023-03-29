import React, { useState } from "react";
import "../styles/movie.scss";
import { IMovieDetail } from "../types/moviedetail";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { HOME, MOVIE_SEARCH } from "../costants/routes";

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
      <header className="movie-page">
        <div className="movie-page__header">
        <Link to={`${HOME}`}>
          <div className="movie-page__logo">netflixroulette</div></Link>
          <form className="container" onSubmit={handleSubmit}>
            <input
              onChange={onSearch}
              value={searchValue}
              placeholder="What do you want to watch?"
            />
            <div className="search"></div>
          </form>
        </div>
        <div key={id} className="movie-id">
          <img src={poster_path} alt="#" />
          <div className="movie-id__info">
            <div className="movie-id__title">
              <h1>{title}</h1>
              <p>{vote_average}</p>
            </div>
            <div className="movie-id__genre">
              {genres.slice(0, 2).map((genre, index) => (
                <p key={index}>
                  {genre.charAt(0).toUpperCase() + genre.slice(1)}
                </p>
              ))}
            </div>
            <div className="movie-id__release">
              <p>{new Date(release_date).getFullYear()}</p>
              <p>{getTimeFromMins(runtime)}</p>
            </div>
            <div className="movie-id__overview">{overview}</div>
          </div>
        </div>
      </header>
      <div className="padd"></div>
    </>
  );
};
