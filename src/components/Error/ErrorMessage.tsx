import React from "react"
import { Error } from "./Error"

export const ErrorMessage =({message}: {message: string})=>{
    return <Error> Error! Reload page, please!</Error>
}