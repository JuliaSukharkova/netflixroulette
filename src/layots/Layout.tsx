import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Flex } from "../components/styled-components/Header/Flex"

export const Layout = () => {
  return (
    <Flex direction="column">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  )
}