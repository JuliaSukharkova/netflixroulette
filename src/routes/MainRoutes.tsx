import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME, MOVIE, MOVIE_SEARCH } from "../costants/routes";
import { Layout } from "../layots/Layout";
import { LayoutMovieDetail } from "../layots/LayoutMovieDetail";
import { MoviesPage } from "../pages/MoviesPage";
import { SearchPage } from "../pages/SearchPage";

export const MainRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Layout />}>
          <Route index element={<MoviesPage />} />
          <Route path={MOVIE_SEARCH} element={<SearchPage />} />
        </Route>
        <Route path={`${MOVIE}/:id`} element={<LayoutMovieDetail/>}>
        <Route index element={<MoviesPage />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
};
