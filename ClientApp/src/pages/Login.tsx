import React from "react";
import s from "../styles/Login.module.sass";
import leftSide from "../img/leftSide.svg";
import logo from "../img/logo.svg";
import { NeonButton } from "../components/NeonButton/NeonButton";
import { Input } from "../components/Input/Input";

export const Login = () => {

  return (
    <div className={s.wrapper}>
      <img className={s.leftSide} src={leftSide} alt="" />
      <div className={s.rightSide}>
        <img src={logo} alt="" />
        <Input type="text" className="loginInput" placeholder="Login" />
        <Input type="password" className="passwordInput" placeholder="Password" />
        <NeonButton className={s.signInBtn} title="Sign in" neonColor="#79C7FF" />
        <NeonButton className={s.signUpBtn} title="Sign up" neonColor="#9A9A9A" />
      </div>
    </div>
  );
};