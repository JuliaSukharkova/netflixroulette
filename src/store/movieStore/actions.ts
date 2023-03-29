import { IAddMovie } from "../../types/addmovie";
import { IMovie } from "../../types/movie";
import { IMovieDetail } from "../../types/moviedetail";

export enum MovieType {
  MOVIE_LOADING = "MOVIE_LOADING",
  MOVIE_SUCCESS = "MOVIE_SUCCESS",
  MOVIEDETAIL_SUCCESS = "MOVIEDETAIL_SUCCESS",
  MOVIE_ERROR = "MOVIE_ERROR",
  ADD_MOVIE = "ADD_MOVIE"
}

interface movieLoading {
  type: MovieType.MOVIE_LOADING;
}
export interface movieSuccess {
  type: MovieType.MOVIE_SUCCESS;
  payload: IMovie[];
  totalAmount?: number;
}
export interface AddMovie {
  type: MovieType.ADD_MOVIE;
  payload: IAddMovie[];
}
export interface movieDetailSuccess{
  type: MovieType.MOVIEDETAIL_SUCCESS;
  payload: IMovieDetail;
  totalAmount?: number;
}
interface movieError{
  type: MovieType.MOVIE_ERROR;
  payload: null;
}

export type MovieAction = movieLoading | movieSuccess | movieError | movieDetailSuccess | AddMovie;
