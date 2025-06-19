import { MovieAction, MovieType } from "./actions";
import { IMovie } from "../../types/movie";
import { IMovieDetail } from "../../types/moviedetail";

export interface ErrorPayload {
  message: string;
  code?: string;
  status?: number;
}

interface MovieState {
  isLoading: boolean;
  movies: IMovie[];
  movieDetail: IMovieDetail | null;
  error: ErrorPayload | null;
  total: number;
  pagesCount: number;
}
const initialValue: MovieState = {
  isLoading: false,
  movies: [],
  movieDetail: null,
  error: null,
  total: 0,
  pagesCount: 0,
};

export const movieReducer = (
  state: MovieState = initialValue,
  action: MovieAction
): MovieState => {
  switch (action.type) {
    case MovieType.MOVIE_LOADING:
      return { ...state, isLoading: true };

    case MovieType.MOVIE_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        total: action.totalAmount,
        pagesCount: action.pagesCount,
        isLoading: false,
      };

    case MovieType.MOVIEDETAIL_SUCCESS:
      return {
        ...state,
        movieDetail: action.payload,
        isLoading: false,
      };

    case MovieType.MOVIE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
