import React from 'react';
import style from '../input/Input.module.css';
import { useMode } from '../../context/ModeContext';
import { Password, Lock } from 'phosphor-react';

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

const Input = ({
  id,
  value,
  type,
  setValue,
  placeholder,
  error,
  onChange,
  onBlur,
}: InputProps) => {
  const { mode } = useMode();

  function errorConfig(error: string, mode: string) {
    return <span style={{ color: `var(--error-${mode})` }}>{error}</span>;
  }

  return (
    <div>
      <div
        id={style[mode]}
        className={`containerEmail ${style.inputContainer}`}
        style={error ? { border: `1.4px solid var(--error-${mode})`} : {border: ''}}
      >
        <input
          id={id}
          type={type}
          value={value}
          autoComplete="off"
          className={style.input}
          placeholder={placeholder}
          onChange={({ target }) => onChange(target)}
          onBlur={({ target }) => onBlur(target.value)}
        />
        {type === 'password' && <Password size={24} color={`var(--input-${mode}-secondary-element)`}/>}
      </div>
      {error && error?.length !== 0
        ? errorConfig(error, mode)
        : null}
    </div>
  );
};

export default Input;
