import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { AppDispatch } from "../store/store";
import { useTypedSelector } from "../hooks/useStore";
import { getMoviesAsync, getMoviesbyFilter } from "../store/movieStore/api";
import { genresItems, sortItems } from "../costants/costants";
import { Spinner } from "../components/Common/Spinner";
import { ErrorMessage } from "../components/Error/ErrorMessage";
import { NavigationMenu } from "../components/NavigationMenu/NavigationMenu";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { MovieItem } from "../components/MovieForm/MovieItem";
import { MovieResults } from "../components/MovieForm/MovieResult";
import {
  Main,
  MenuNav,
  NavDropdown,
  Line,
  ActiveLine,
} from "../components/MovieForm/Main";
import { MovieSection } from "../components/MovieForm/MovieStyle";
import { Pagination } from "../components/Pagination/Pagination";

export const MoviesPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { movies, isLoading, error, total, pagesCount } = useTypedSelector(
    (state) => state.movies
  );
  const [genreId, setGenreId] = useState<number>(0);
  const [dropdownValue, setDropdownValue] = useState<string>("year");
  const [lineProps, setLineProps] = useState({ left: 0, width: 0 });
  const [currentPage, setCurrentPage] = useState<number>(1);

  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (navRef.current) {
      const activeItem = navRef.current.querySelector(".active");
      if (activeItem) {
        const rect = (activeItem as HTMLElement).getBoundingClientRect();
        const containerRect = navRef.current.getBoundingClientRect();

        setLineProps({
          left: rect.left - containerRect.left,
          width: rect.width,
        });
      }
    }
  }, [genreId, dropdownValue]);

  useEffect(() => {
    if (genreId === 0) {
      dispatch(getMoviesAsync({ order: dropdownValue, page: currentPage }));
    } else {
      dispatch(
        getMoviesbyFilter({
          filterGenres: genreId,
          order: dropdownValue,
          page: currentPage,
        })
      );
    }
  }, [dispatch, genreId, dropdownValue, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [genreId, dropdownValue]);

  if (isLoading) return <Spinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <Main>
      <MenuNav>
        <NavigationMenu
          items={genresItems}
          selectedId={genreId}
          onSelect={setGenreId}
          navRef={navRef}
        />
        <NavDropdown>
          <p>сортировать</p>
          <Dropdown
            items={sortItems}
            dropdownValue={dropdownValue}
            setDropdownValue={setDropdownValue}
          />
        </NavDropdown>
      </MenuNav>
      <Line>
        <ActiveLine left={lineProps.left} width={lineProps.width} />
      </Line>
      <MovieResults>
        <span>{total}</span> найдено фильмов
      </MovieResults>
      <MovieSection>
        {movies.map((movie) => (
          <MovieItem
            key={nanoid()}
            kinopoiskId={movie.kinopoiskId || movie.filmId}
            nameRu={movie.nameRu}
            posterUrlPreview={movie.posterUrlPreview}
            genres={movie.genres}
            year={movie.year}
          />
        ))}
      </MovieSection>
      <Pagination
        currentPage={currentPage}
        total={pagesCount}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Main>
  );
};
