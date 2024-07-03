import React from 'react';
import style from '../input/Input.module.css';
import { useMode } from '../../context/ModeContext';

type InputProps = {
  id: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

const Input = ({ id, value, setValue, placeholder }: InputProps) => {
  const { mode } = useMode();

  function handleInput(target:HTMLInputElement) {
    // manipulacao backend
    console.log(target.value);
  }

  return (
    <div className={style.inputContainer} id={style[mode]}>
      <input
        id={id}
        type="text"
        value={value}
        autoComplete='off'
        className={style.input}
        placeholder={placeholder}
        onChange={({ target }) => {
          handleInput(target);
          setValue(target.value);
        }}
      />
    </div>
  );
};

export default Input;
