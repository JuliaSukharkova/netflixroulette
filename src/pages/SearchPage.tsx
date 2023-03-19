import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useStore";
import { useSearchParams } from "react-router-dom"
import { MovieItem } from "../components/MovieItem";
import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";
import { getMovieSearchAcync } from "../store/movieStore/api";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error, amount } = useTypedSelector(
    (state) => state.movies
  );
  const [params] = useSearchParams();
  const searchValue: any = params.get("value");

  useEffect(() => {
    getMovieSearchAcync({ search: searchValue}, dispatch);
  }, [searchValue, dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage />;
  } else if (movies.length === 0) {
    return <main className="main"><p className="movie-results"><span>{`${amount}`}</span> movies found</p></main>;
  }
  return (
    <main className="main">
      <p className="movie-results"><span>{`${amount}`}</span> movies found</p>
      <section className="movie">
        {movies.map(({ id, poster_path, title, release_date, genres }) => (
          <MovieItem
            key={id}
            id={id}
            title={title}
            poster_path={poster_path}
            genres={genres}
            release_date={release_date}
          />
        ))}
      </section>
    </main>
  );
};
