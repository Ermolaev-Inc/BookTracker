import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "./pages/Login";
import { AuthContext } from "./context/AuthContext";
import { Main } from "./pages/Main";

export default function App() {
  const { isAuth } = useContext(AuthContext);

  return (
    <Switch>
      {
        !isAuth &&
        <Route path="/auth" component={Login} />
      }
      {
        isAuth &&
        <Route path="/main" component={Main} />
      }
      <Redirect from="/auth" to={isAuth ? "/main" : "/auth"} />
      <Redirect from="/" to={isAuth ? "/main" : "/auth"} />
    </Switch>
  );
}
