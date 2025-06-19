import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../components/Header/Header"
import { Footer } from "../components/Footer/Footer"
import { Flex } from "../components/Common/Flex"

export const Layout = () => {
  return (
    <Flex direction="column" style={{minHeight: '100vh'}} >
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Flex>
  )
}