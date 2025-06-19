import { MovieAction, MovieType } from "./actions";
import { Dispatch } from "redux";
import api from "../../api/api";
import { AppDispatch } from "../store";

export const getMoviesAsync =
  ({ order, page }: { order: string; page: number }) =>
  async (dispatch: Dispatch<MovieAction>) => {
    try {
      dispatch({ type: MovieType.MOVIE_LOADING });

      const response = await api.get("/v2.2/films/top", {
        params: { type: "TOP_100_POPULAR_FILMS", page },
      });

      dispatch({
        type: MovieType.MOVIE_SUCCESS,
        payload: response.data.films,
        totalAmount: response.data.total,
        pagesCount: response.data.pagesCount,
      });
    } catch (error: any) {
      dispatch({
        type: MovieType.MOVIE_ERROR,
        payload: {
          message: error.message || "Unknown error",
          code: error.code,
          status: error.response?.status,
        },
      });
    }
  };

export const getMoviesbyFilter =
  ({
    filterGenres,
    order,
    page,
  }: {
    filterGenres: number;
    order: string;
    page: number;
  }) =>
  async (dispatch: Dispatch<MovieAction>) => {
    try {
      dispatch({ type: MovieType.MOVIE_LOADING });

      const response = await api.get("/v2.2/films", {
        params: {
          genres: filterGenres,
          order: order.toUpperCase(),
          type: "FILM",
          ratingFrom: 0,
          ratingTo: 10,
          page,
        },
      });

      dispatch({
        type: MovieType.MOVIE_SUCCESS,
        payload: response.data.items,
        totalAmount: response.data.total,
        pagesCount: response.data.pagesCount,
      });
    } catch (error: any) {
      dispatch({
        type: MovieType.MOVIE_ERROR,
        payload: {
          message: error.message || "Unknown error",
          code: error.code,
          status: error.response?.status,
        },
      });
    }
  };

export const getMovieSearchAcync =
  ({ search }: { search: string }) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: MovieType.MOVIE_LOADING });

      const response = await api.get("/v2.1/films/search-by-keyword", {
        params: {
          keyword: search,
          page: 1,
        },
      });

      dispatch({
        type: MovieType.MOVIE_SUCCESS,
        payload: response.data.films,
        totalAmount: response.data.searchFilmsCountResult,
      });
    } catch (error: any) {
      dispatch({
        type: MovieType.MOVIE_ERROR,
        payload: {
          message: error.message,
          code: error.code,
          status: error.response?.status,
        },
      });
    }
  };

export const getMovieDetailAcync =
  ({ id }: { id: string }) =>
  async (dispatch: Dispatch<MovieAction>) => {
    try {
      dispatch({ type: MovieType.MOVIE_LOADING });

      const response = await api.get(`/v2.2/films/${id}`);

      dispatch({
        type: MovieType.MOVIEDETAIL_SUCCESS,
        payload: response.data,
      });
    } catch (error: any) {
      dispatch({
        type: MovieType.MOVIE_ERROR,
        payload: {
          message: error.message,
          code: error.code,
          status: error.response?.status,
        },
      });
    }
  };
