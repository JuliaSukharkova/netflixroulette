import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom"
import React from "react"
import "../styles/main.scss"
import { MovieIdPage } from "../pages/MovieIdPage"

export const LayoutMovieDetail = () => {
  return (
    <div className="page">
      <MovieIdPage />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}