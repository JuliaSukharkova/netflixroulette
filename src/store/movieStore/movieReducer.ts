import { MovieAction, MovieType } from "./actions";
import { IMovie } from "../../types/movie";
import { IMovieDetail } from "../../types/moviedetail";
import { IAddMovie } from "../../types/addmovie";

interface MovieState {
  isLoading: boolean;
  movies: IMovie[];
  addmovie: IAddMovie[],
  movieDetail: IMovieDetail | null;
  error: null;
  amount?: number;
}
const initialValue: MovieState = {
  isLoading: false,
  addmovie: [],
  movies: [],
  movieDetail: null,
  error: null,
  amount: 0,
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
        amount: action.totalAmount,
        isLoading: false,
      };

    case MovieType.MOVIEDETAIL_SUCCESS:
      return {
        ...state,
        movieDetail: action.payload,
        isLoading: false
      };
      case MovieType.ADD_MOVIE:
      return {
        ...state,
        addmovie: action.payload, isLoading: false
      }

    case MovieType.MOVIE_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

