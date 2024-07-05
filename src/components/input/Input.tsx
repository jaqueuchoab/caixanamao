import React, { ReactNode } from 'react';
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

  function errorConfig(error: string, className: string, mode: string) {
    const input = document.querySelector<HTMLInputElement>(className);
    if (input) input.style.border = `1.4px solid var(--error-${mode})`;
    return <span style={{color: `var(--error-${mode})`}}>{error}</span>;
  }

  return (
    <div>
      <div id={style[mode]} className={style.inputContainer}>
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
      </div>
      {error && error?.length !== 0
          ? errorConfig(error, style.inputContainer, mode)
          : null}
    </div>
  );
};

export default Input;
