import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { IAuthContext } from "../interfaces";

export default function App() {
  const authContext: IAuthContext = useContext(AuthContext);
  
  if (authContext.isAuth) {
    return //App Component
  }
  return //Login Component
}