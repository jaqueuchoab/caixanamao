import React from 'react';
import Input from '../input/Input';
import useForm from '../../hooks/useForm';
import { LoginData } from '../../../@types/user-types';

type LoginProps = {
  onValidChange?: (isValid: boolean) => void;
  onDataChange?: (data: LoginData) => void;
};

const Login = ({ onValidChange, onDataChange }: LoginProps) => {
  const email = useForm('email');
  const password = useForm('password_login');

  React.useEffect(() => {
    const isValid = email.value.length > 3 && password.value.length > 3;
    onValidChange?.(isValid);
    
    onDataChange?.({ email: email.value, senha: password.value });
    localStorage.setItem('email', email.value);
  }, [email.value, password.value]);

  return (
    <>
      <Input id="email" type="text" placeholder="Digite seu email" {...email} />
      <Input
        id="password"
        type="password"
        placeholder="No mínimo 8 digitos"
        {...password}
      />
    </>
  );
};

export default Login;
