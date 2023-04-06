import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useStore";
import { useSearchParams } from "react-router-dom";
import { MovieItem } from "../components/MovieForm/MovieItem";
import { Spinner } from "../components/Common/Spinner";
import { ErrorMessage } from "../components/Error/ErrorMessage";
import {
  getMovieSearchAcync,
  getMoviesbyFilter,
} from "../store/movieStore/api";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { NavigationMenu } from "../components/NavigationMenu/NavigationMenu";
import { sortItems, genresItems } from "../costants/costants";
import { Line, Main, MenuNav, NavDropdown } from "../components/MovieForm/Main";
import { MovieResults } from "../components/MovieForm/MovieResult";
import { MovieSection } from "../components/MovieForm/MovieStyle";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { movies, isLoading, error, amount } = useTypedSelector(
    (state) => state.movies
  );
  const [params] = useSearchParams();
  const searchValue: any = params.get("value");
  const [genreValue, setGenreValue] = useState(genresItems[0].value);

  const [dropdownValue, setDropdownValue] = useState(sortItems[0].value);

  
  useEffect(() => {
    getMoviesbyFilter({ filterGenres: genreValue }, dispatch);
  }, [dispatch, genreValue]);

  useEffect(() => {
    getMovieSearchAcync({ search: searchValue, order: dropdownValue }, dispatch);
  }, [searchValue,dropdownValue, dispatch]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage />;
  } else if (movies.length === 0) {
    return (
      <Main>
        <MovieResults>
        <span>{`${amount}`}</span> movies found
      </MovieResults>
      </Main>
    );
  }
  return (
    <Main>
      <MenuNav>
        <NavigationMenu
          items={genresItems}
          genreValue={genreValue}
          setGenreValue={setGenreValue}
        />
        <NavDropdown>
          <p>sort by</p>
          <Dropdown
            items={sortItems}
            dropdownValue={dropdownValue}
            setDropdownValue={setDropdownValue}
          />
        </NavDropdown>
      </MenuNav>
      <Line></Line>
      <MovieResults>
        <span>{`${amount}`}</span> movies found
      </MovieResults>
      <MovieSection>
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
      </MovieSection>
    </Main>
  );
};
