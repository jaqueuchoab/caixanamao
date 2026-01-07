import { useState } from 'react';
import { EyeIcon, EyeClosedIcon } from '@phosphor-icons/react';
import { useContextTheme } from '../../context/ThemeContext';

import {
  InputContainer,
  StyledInput,
  IconButton,
  ErrorText,
} from './Input.styles';

export type InputProps = {
  id: string;
  value: string;
  type: string;
  placeholder?: string;
  error?: null | string;
  onChange: (target: HTMLInputElement) => void;
  min?: number,
  max?: number,
};

const Input = ({
  id,
  value,
  type,
  placeholder,
  error,
  onChange,
  min,
  max
}: InputProps) => {
  const { themeMode } = useContextTheme();
  const [visible, setVisible] = useState(false);

  const isPassword = type === 'password';
  const inputType = isPassword && visible ? 'text' : type;

  return (
    <div>
      <InputContainer
        variant={themeMode}
        hasError={!!error}
      >
        <StyledInput
          id={id}
          type={inputType}
          value={value}
          autoComplete="off"
          placeholder={placeholder}
          onChange={({ target }) => onChange(target)}
          minLength={min}
          maxLength={max}
        />

        {isPassword && (
          <IconButton
            type="button"
            onClick={() => setVisible(!visible)}
          >
            {visible ? (
              <EyeIcon size={24} />
            ) : (
              <EyeClosedIcon size={24} />
            )}
          </IconButton>
        )}
      </InputContainer>

      {error && <ErrorText>{error}</ErrorText>}
    </div>
  );
};

export default Input;
