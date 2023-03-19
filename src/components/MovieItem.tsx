import React from "react";
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
      <img src={poster_path} alt="card"/>
      <div className="movie-card__info">
        <p className="movie-card__title">{title}</p>
        <p className="movie-card__year">{new Date(release_date).getFullYear()}</p>
      </div>
      <div className="movie-card__genre">
      {genres.slice(0,2).map((genre, index) => (
        <p key={index}>
          {genre.charAt(0).toUpperCase() + genre.slice(1)}
        </p>
      ))}
      </div>
    </div>
  );
};
