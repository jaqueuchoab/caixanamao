import React from 'react';
import style from './Button.module.css';
import { useMode } from '../../context/ModeContext';

type ButtonProps = React.PropsWithChildren & {
  children: string;
};

const Button = ({ children }: ButtonProps) => {
  const { mode } = useMode();

  return (
    <button className={style.button} id={style[mode]}>
      {children}
    </button>
  );
};

export default Button;
