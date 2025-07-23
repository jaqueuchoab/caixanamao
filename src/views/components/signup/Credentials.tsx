import React from 'react';
import useForm from '../../hooks/useForm';
import Input from '../input/Input';

const Credentials = () => {
  const email = useForm('email');
  const password = useForm('password');

  return (
    <>
      <Input id="email" type="text" placeholder="Digite seu email" {...email} />
      <Input id="password" type="password" placeholder="No mínimo 8 digitos" {...password}/>
      <Input id="password" type="password" placeholder="Confirme a senha" {...password}/>
    </>
  );
};

export default Credentials;
