import React from "react";
import { Link } from "react-router-dom";
import { MOVIE } from "../costants/routes";
import { IMovie } from "../types/movie";

export const MovieItem = ({
  id,
  poster_path,
  title,
  release_date,
  genres,
}: IMovie) => {
  return (
    <div key={id} className="movie-card">
      <div className="movie-card__img">
        <Link to={`${MOVIE}/${id}`}>
          <img src={poster_path} alt="card" />
        </Link>
      </div>
      <div className="movie-card__info">
        <Link to={`${MOVIE}/${id}`}>
          <p className="movie-card__title">{title}</p>
        </Link>
        <p className="movie-card__year">
          {new Date(release_date).getFullYear()}
        </p>
      </div>
      <div className="movie-card__genre">
        {genres.slice(0, 2).map((genre, index) => (
          <p key={index}>{genre.charAt(0).toUpperCase() + genre.slice(1)}</p>
        ))}
      </div>
    </div>
  );
};
