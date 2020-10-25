import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { Login } from "./pages/Login";

export default function App() {
  const {isAuth} = useContext(AuthContext);

  if (isAuth) {
    return <>App</>;
  }
  return <Login />;
}
