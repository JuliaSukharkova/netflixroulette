import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import React from "react"
import "../styles/header.scss"
import "../styles/main.scss"

export const Layout = () => {
  return (
    <div className="page">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}