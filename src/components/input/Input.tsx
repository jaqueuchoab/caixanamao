import React from 'react';
import style from '../input/Input.module.css';

type InputProps = {
  type: string;
  placeholder: string;
};

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <div className={style.inputContainer}>
      <input className={style.input} type={type} placeholder={placeholder} />
    </div>
  );
};

export default Input;
