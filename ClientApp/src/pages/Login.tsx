import React from "react";
import s from "../styles/Login.module.sass";
import leftSide from "../img/leftSide.svg";
import logo from "../img/logo.svg";
import { NeonButton } from "../components/NeonButton/NeonButton";

export const Login = () => {
  // TODO: Inputs

  return(
    <div className={s.wrapper}>
      <img className={s.leftSide} src={leftSide} alt="" />
      <div className={s.rightSide}>
        <img src={logo} alt="" />
        <input type="text" className="loginInput" placeholder="Login" />
        <input type="password" className="passwordInput" placeholder="Password" />
        <button className={s.signInBtn}>
          <NeonButton title="Sign in" color="#79C7FF" />
        </button>
        <button className={s.signUpBtn}>
          <NeonButton title="Sign up" color="#9A9A9A" />
        </button>
      </div>
    </div>
  );
};