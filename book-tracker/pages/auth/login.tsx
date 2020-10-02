import { MainLayout } from "../../layouts/MainLayout";
import s from "../../styles/Login.module.sass";
import { Input } from "../../components/Input/Input";
import { NeonButton } from "../../components/NeonButton/NeonButton";

export default function Login() {
  return (
    <MainLayout title="Sign in">
      <div className={s.wrapper}>
        <img src="/Login-LeftSide.svg" alt="" className={s.leftSide}/>
        <div className={s.rightSide}>
          <img src="/BookTrackerLogo.svg" alt="" className={s.logo}/>
          <Input placeholder="Login" type="text" />
          <Input placeholder="Password" type="password"/>
          <NeonButton title="Sign in" color="#75c0ff"/>
          <NeonButton title="Sign up" color="#ff9627"/>
        </div>
      </div>
    </MainLayout>
  )
}