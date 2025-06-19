import React, { useEffect, useState, useRef } from "react";
import { useTypedSelector } from "../hooks/useStore";
import { useSearchParams } from "react-router-dom";
import { MovieItem } from "../components/MovieForm/MovieItem";
import { Spinner } from "../components/Common/Spinner";
import { ErrorMessage } from "../components/Error/ErrorMessage";
import { getMovieSearchAcync } from "../store/movieStore/api";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { NavigationMenu } from "../components/NavigationMenu/NavigationMenu";
import { sortItems, genresItems } from "../costants/costants";
import {
  ActiveLine,
  Line,
  Main,
  MenuNav,
  NavDropdown,
} from "../components/MovieForm/Main";
import { MovieResults } from "../components/MovieForm/MovieResult";
import { MovieSection } from "../components/MovieForm/MovieStyle";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { Pagination } from "../components/Pagination/Pagination";

export const SearchPage = () => {
  const { movies, isLoading, error, total, pagesCount } = useTypedSelector(
    (state) => state.movies
  );
  const [params] = useSearchParams();
  const searchValue: any = params.get("value");
  const [genreId, setGenreId] = useState<number>(0);
  const [dropdownValue, setDropdownValue] = useState("year");
  const dispatch = useDispatch<AppDispatch>();
  const [lineProps, setLineProps] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLUListElement>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

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
    if (searchValue?.trim()) {
      dispatch(getMovieSearchAcync({ search: searchValue }));
    }
  }, [searchValue, dispatch]);

  useEffect(() => {
    setCurrentPage(1);
  }, [genreId, dropdownValue]);

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage message={error.message} />;
  } else if (movies.length === 0) {
    return (
      <Main>
        <MovieResults>
          <span>{`${total}`}</span> movies found
        </MovieResults>
      </Main>
    );
  }
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
        <span>{`${total}`}</span> найдено фильмов
      </MovieResults>
      <MovieSection>
        {movies.map((movie) => (
          <MovieItem
            key={nanoid()}
            kinopoiskId={movie.kinopoiskId}
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
