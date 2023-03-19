import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useStore";
import { getMoviesAsync } from "../store/movieStore/api";
import { MovieItem } from "../components/MovieItem";
import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";
import "../styles/main.scss"

export const MoviesPage = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error } = useTypedSelector(
    (state) => state.movies
  );

  useEffect(() => {
    getMoviesAsync(dispatch);
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />
  } else if (error) {
    return (
      <ErrorMessage/>
    )
  }
  return (
    <main className="main">
    <section className="movie">
      {movies.map(
        ({ id, poster_path, title, release_date, genres }) => (
          <MovieItem
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
            genres={genres}
            release_date={release_date}
          />
        )
      )}
    </section>
    </main>
  );
};
