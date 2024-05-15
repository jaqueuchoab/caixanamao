import React from 'react';
import style from "./Button.module.css"

type ButtonProps = React.ComponentProps<"button"> & {
  children: string;
  borderColor: string;
  backgroundColor: string;
}

const Button = ({ children, borderColor, backgroundColor} : ButtonProps) => {
  return (
    <button style={{borderColor: borderColor, backgroundColor: backgroundColor}} className={style.button}>{children}</button>
  );
}

export default Button;
