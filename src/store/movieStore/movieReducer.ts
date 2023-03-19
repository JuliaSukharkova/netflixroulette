import { MovieAction, MovieType } from "./actions";
import { IMovie } from "../../types/movie";

interface MovieState {
  isLoading: boolean;
  movies: IMovie[];
  error: null;
  amount?: number;
}
const initialValue: MovieState = {
  isLoading: false,
  movies: [],
  error: null,
  amount: 0
};

export const movieReducer = (state: MovieState = initialValue, action: MovieAction):MovieState => {
  switch (action.type) {
    case MovieType.MOVIE_LOADING:
      return { ...state, isLoading: true };

    case MovieType.MOVIE_SUCCESS:
      return { ...state, movies: action.payload, amount: action.totalAmount, isLoading: false };

    case MovieType.MOVIE_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};
