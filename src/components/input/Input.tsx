import React from 'react';
import style from '../input/Input.module.css';
import { useMode } from '../../context/ModeContext';

type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
  const {mode} = useMode();
  
  return (
    <div className={style.inputContainer} id={style[mode]}>
      <input className={style.input} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
