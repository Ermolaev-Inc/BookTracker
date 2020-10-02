import s from "./NeonButton.module.sass";
import {NeonButtonProps} from "./NeonButtonProps";

export const NeonButton: React.FC<NeonButtonProps> = ({
  className,
  title = "OK",
  color = "#75c0ff",
}) => {
  const mouseEnterHandler = (event) => {
    event.target.style.background = `${color}`;
    event.target.style.boxShadow = `0 0 10px ${color}, 0 0 40px ${color}, 0 0 80px ${color}`;
    event.target.style.color = "#ffffff";
  }
  const mouseLeaveHandler = (event: any) => {
    event.target.style.background = "";
    event.target.style.boxShadow = "";
    event.target.style.color = `${color}`;
  }

  return (
    <button className={s.button} style={{color}} onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} >
      { title }
    </button>
  )
}