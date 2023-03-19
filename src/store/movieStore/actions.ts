//import { IMovie } from "../../types/movie";

import { IMovie } from "../../types/movie";

export enum MovieType {
  MOVIE_LOADING = "MOVIE_LOADING",
  MOVIE_SUCCESS = "MOVIE_SUCCESS",
  MOVIE_ERROR = "MOVIE_ERROR",
}

interface movieLoading {
  type: MovieType.MOVIE_LOADING;
}
export interface movieSuccess {
  type: MovieType.MOVIE_SUCCESS;
  payload: IMovie[];
  totalAmount?: number;
}
interface movieError{
  type: MovieType.MOVIE_ERROR;
  payload: null;
}

export type MovieAction = movieLoading | movieSuccess | movieError;
