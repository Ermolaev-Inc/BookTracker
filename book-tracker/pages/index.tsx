import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { IAuthContext } from "../interfaces";
import Login from "./auth/login";

export default function App() {
  const authContext: IAuthContext = useContext(AuthContext);

  if (authContext.isAuth) {
    return; // App Component
  }
  return <Login />;
}
