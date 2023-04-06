import { Footer } from "../components/Footer/Footer"
import { Outlet } from "react-router-dom"
import React from "react"
import { MovieIdPage } from "../pages/MovieIdPage"
import { Flex } from "../components/Common/Flex"

export const LayoutMovieDetail = () => {
  return (
    <Flex direction="column">
      <MovieIdPage />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  )
}