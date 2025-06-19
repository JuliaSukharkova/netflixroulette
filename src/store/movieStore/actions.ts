import { IMovie } from "../../types/movie";
import { IMovieDetail } from "../../types/moviedetail";
import { ErrorPayload } from "./movieReducer";

export enum MovieType {
  MOVIE_LOADING = "MOVIE_LOADING",
  MOVIE_SUCCESS = "MOVIE_SUCCESS",
  MOVIEDETAIL_SUCCESS = "MOVIEDETAIL_SUCCESS",
  MOVIE_ERROR = "MOVIE_ERROR",
  ADD_MOVIE = "ADD_MOVIE",
}

export type MovieAction =
  | { type: MovieType.MOVIE_LOADING }
  | { type: MovieType.MOVIE_SUCCESS; payload: IMovie[]; totalAmount: number; pagesCount: number }
  | { type: MovieType.MOVIEDETAIL_SUCCESS; payload: IMovieDetail }
  | { type: MovieType.MOVIE_ERROR; payload: ErrorPayload };
