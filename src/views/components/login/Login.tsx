import React from 'react';
import Input from '../input/Input';
import useForm from '../../hooks/useForm';

type LoginProps = {
  onValidChange?: (isValid: boolean) => void;
};

const Login = ({ onValidChange }: LoginProps) => {
  const email = useForm('email');
  const password = useForm('password_login');

  React.useEffect(() => {
    const isValid = email.validate() && password.validate();
    onValidChange?.(isValid);
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
