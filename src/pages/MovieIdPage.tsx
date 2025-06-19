import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { MovieId } from "../components/MovieId/MovieId";
import { useTypedSelector } from "../hooks/useStore";
import { getMovieDetailAcync } from "../store/movieStore/api";
import { Spinner } from "../components/Common/Spinner";
import { ErrorMessage } from "../components/Error/ErrorMessage";
import { AppDispatch } from "../store/store";

export const MovieIdPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { movieDetail, isLoading, error } = useTypedSelector(
    (state) => state.movies
  );

  useEffect(() => {
    dispatch(getMovieDetailAcync({ id }));
  }, [id, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return (
    <>
      {movieDetail ? (
        <MovieId
          key={movieDetail.kinopoiskId}
          kinopoiskId={movieDetail.kinopoiskId}
          nameRu={movieDetail.nameRu}
          posterUrl={movieDetail.posterUrl}
          year={movieDetail.year}
          filmLength={movieDetail?.filmLength}
          ratingKinopoisk={movieDetail.ratingKinopoisk}
          description={movieDetail.description}
          genres={movieDetail.genres}  />
      ) : (
        <div>Ничего не найдено :(</div>
      )}
    </>
  );
};
