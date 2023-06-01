import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useStore";
import { getMoviesAsync, getMoviesbyFilter } from "../store/movieStore/api";
import { MovieItem } from "../components/MovieForm/MovieItem";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { NavigationMenu } from "../components/NavigationMenu/NavigationMenu";
import { Spinner } from "../components/Common/Spinner";
import { ErrorMessage } from "../components/Error/ErrorMessage";
import { sortItems, genresItems } from "../costants/costants";
import { MovieResults } from "../components/MovieForm/MovieResult";
import { Line, Main, MenuNav, NavDropdown } from "../components/MovieForm/Main";
import { MovieSection } from "../components/MovieForm/MovieStyle";


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
    return <Spinner />
  } else if (error) {
    return (
      <ErrorMessage/>
    )
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
      <MovieResults><span>{`${amount}`}</span> movies found</MovieResults>
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
 