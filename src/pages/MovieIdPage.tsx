import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams} from "react-router-dom";
import { MovieId } from "../components/MovieId";
import { useTypedSelector } from "../hooks/useStore";
import { getMovieDetailAcync } from "../store/movieStore/api";
import { Spinner } from "../components/Spinner";
import { ErrorMessage } from "../components/ErrorMessage";

export const MovieIdPage =()=>{
    const {id} =useParams() as any;
    const dispatch = useDispatch();
    const { movieDetail, isLoading, error } = useTypedSelector(
    (state) => state.movies
  );

  useEffect(()=> {
    getMovieDetailAcync({id}, dispatch)
  },[id, dispatch])

  if (isLoading) {
    return <Spinner />;
  } else if (error) {
    return <ErrorMessage />;
  }
    return (
        <>
        {movieDetail ? (
                <MovieId key={movieDetail.id}
                id={movieDetail.id}
                title={movieDetail.title}
                poster_path={movieDetail.poster_path}
                release_date={movieDetail.release_date}
                runtime={movieDetail.runtime}
                vote_average={movieDetail.vote_average}
                overview={movieDetail.overview}
                genres={movieDetail.genres}
                />
        ): (
            <div>No data yet :</div>)}
        </>
    )
}