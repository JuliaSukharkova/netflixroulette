import axios from "axios";
import { MovieAction, MovieType } from "./actions";
import { Dispatch } from "redux";
import { MOVIES_LIST, MOVIE_SEARCH } from "../../costants/endpoints";

export const getMoviesAsync = async (dispatch: Dispatch<MovieAction>) => {
  try {
    const response = await axios.get(MOVIES_LIST);
    dispatch({
      type: MovieType.MOVIE_SUCCESS,
      payload: response.data.data

    });
  } catch (error: any) {
    dispatch({
      type: MovieType.MOVIE_ERROR,
      payload: error
    })
  }
};

export const getMovieSearchAcync = async (
  { search }: { search: string },
  dispatch: Dispatch<MovieAction>
) => {
  try {
    const response = await axios.get(`${MOVIE_SEARCH}?search=${search}&searchBy=title`);
    dispatch({
      type: MovieType.MOVIE_SUCCESS,
      payload: response.data.data,
      totalAmount: response.data.totalAmount
    });
    console.log(response.data.totalAmount)
  } catch (error: any) {
    dispatch({
      type: MovieType.MOVIE_ERROR,
      payload: error,
    });
  }
};
