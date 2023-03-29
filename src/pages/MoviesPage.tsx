import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useStore";
import { getMoviesAsync, getMoviesbyFilter } from "../store/movieStore/api";
import { MovieItem } from "../components/MovieItem";
import { Dropdown } from "../components/Dropdown";
import { NavigationMenu } from "../components/NavigationMenu";
import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";
import "../styles/main.scss";
import { sortItems, genresItems } from "../costants/costants";


export const MoviesPage = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error, amount } = useTypedSelector(
    (state) => state.movies
  );
  const [genreValue, setGenreValue] = useState(genresItems[0].value)

  const [dropdownValue, setDropdownValue] = useState(sortItems[0].value);
  
  useEffect(() => {
    getMoviesAsync({ order: dropdownValue }, dispatch);
  }, [dispatch, dropdownValue]);

  useEffect(() => {
    getMoviesbyFilter({filterGenres: genreValue}, dispatch);
  }, [dispatch, genreValue]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage />;
  }

  return (
    <main className="main">
      <nav className="nav-menu">
        <NavigationMenu
          items={genresItems}
          genreValue={genreValue}
          setGenreValue={setGenreValue}
          />
        <div className="nav-menu__dropdown">
          <p>sort by</p>
          <Dropdown
            items={sortItems}
            dropdownValue={dropdownValue}
            setDropdownValue={setDropdownValue}
          />
        </div>
      </nav>
      <div className="line"></div>
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
