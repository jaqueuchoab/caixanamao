import React from 'react';
import style from './Button.module.css';
import { useMode } from '../../context/ModeContext';

type ButtonProps = React.PropsWithChildren & {
  children: string;
  disabledButton?: boolean;
};

const Button = ({ children, disabledButton }: ButtonProps) => {
  const { mode } = useMode();

  return (
    <button className={style.button} id={style[mode]} disabled={disabledButton}>
      {children}
    </button>
  );
};

export default Button;
