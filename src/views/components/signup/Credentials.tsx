import React from 'react';
import useForm from '../../hooks/useForm';
import Input from '../input/Input';
import { useFormStore } from '../../store/useFormStore';

const Credentials = () => {
  const email = useForm('email');
  const password = useForm('password');
  const { formData, setField } = useFormStore();

  return (
    <>
      <Input
        id="email"
        type="text"
        placeholder="Digite seu email"
        value={formData.email}
        onChange={(e) => setField('email', e.value)}
        error={email.error}
      />
      <Input
        id="password"
        type="password"
        placeholder="No mínimo 8 digitos"
        value={formData.senha}
        onChange={(e) => setField('senha', e.value)}
        error={password.error}
      />
      <Input
        id="password"
        type="password"
        placeholder="Confirme a senha"
        value={formData.senha_confirmacao}
        onChange={(e) => setField('senha_confirmacao', e.value)}
        error={password.error}
      />
    </>
  );
};

export default Credentials;
