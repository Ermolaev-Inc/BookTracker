import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { AuthContext } from "./context/AuthContext";

export default function App() {
  const { isAuth } = useContext(AuthContext);

  return(
    <Switch>
      <Route path="/auth" component={Login} />
      <Redirect from="/" to={isAuth ? "/main" : "/auth"} />
    </Switch>
  );
}
