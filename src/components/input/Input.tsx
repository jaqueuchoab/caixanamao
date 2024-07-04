import React from 'react';
import style from '../input/Input.module.css';
import { useMode } from '../../context/ModeContext';

type InputProps = {
  id: string;
  value: string;
  type: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
  error: null | string; 
  onChange: (target: HTMLInputElement) => void;
  onBlur: (value: string | number) => boolean;
};

const Input = ({ id, value, type, setValue, placeholder, error, onChange, onBlur }: InputProps) => {
  const { mode } = useMode();
console.log(value);

  return (
    <div className={style.inputContainer} id={style[mode] + ' ' + error ? style.error : ''}>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete='off'
        className={style.input}
        placeholder={placeholder}
        onChange={({target}) => onChange(target)}
        onBlur={({target}) => onBlur(target.value)}
      />
    </div>
  );
};

export default Input;
