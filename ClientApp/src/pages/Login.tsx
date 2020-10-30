import React from "react";
import s from "../styles/Login.module.sass";
import leftSide from "../img/leftSide.svg";
import logo from "../img/logo.svg";

export const Login = () => {
  // TODO: Neon Buttons & Inputs

  return(
    <div className={s.wrapper}>
      <img className={s.leftSide} src={leftSide} alt="" />
      <div className={s.rightSide}>
        <img src={logo} alt="" />
        <input type="text" className="loginInput" placeholder="Login" />
        <input type="password" className="passwordInput" placeholder="Password" />
        <button className="signInBtn">Sign in</button>
        <button className="signUpBtn">Sign up</button>
      </div>
    </div>
  );
};