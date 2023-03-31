import { Footer } from "../components/Footer"
import { Outlet } from "react-router-dom"
import React from "react"
import { MovieIdPage } from "../pages/MovieIdPage"
import { Flex } from "../components/styled-components/Header/Flex"

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