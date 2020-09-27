import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { IAuthContext } from "../interfaces";
import Login from "./auth/login";
import Register from "./auth/register";

export default function App() {
  const authContext: IAuthContext = useContext(AuthContext);

  if (authContext.isAuth) {
    return // App Component
  }
  return <Login />
}