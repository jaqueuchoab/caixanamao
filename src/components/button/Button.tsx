import React from 'react';
import style from "./Button.module.css"
import { useMode } from '../../context/ModeContext';

type ButtonProps = React.PropsWithChildren & {
  children: string;
}

const ButtonLight : React.CSSProperties = {
  color: 'var(--color-bg-950)',
  borderColor: 'var(--color-green-400)', 
  backgroundColor: 'var(--color-green-200)'
}

const ButtonDark : React.CSSProperties = {
  color: 'var(--color-bg-100)',
  borderColor: 'var(--color-green-800)', 
  backgroundColor: 'var(--color-green-900)'
}

const Button = ({ children } : ButtonProps) => {
  const { mode } = useMode();

  return (
    <button style={mode === 'dark' ? ButtonDark : ButtonLight} className={style.button}>{children}</button>
  );
}

export default Button;
