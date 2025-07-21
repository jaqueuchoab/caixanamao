import React from 'react';
import Input from '../input/Input';
import { LabelInformation } from '../authMode/AuthModeSelector.styles';
import DateInput from '../input/DateInput';
import Radio from '../input/Radio';
import useForm from '../../hooks/useForm';

// Como vou lidar com os dados dos inputs radio e data?

const SignUpMultiset = () => {
  const name = useForm('name');
  const cpf = useForm('cpf');

  return (
    <>
      <Input
        id="nome"
        type="text"
        placeholder="Como devemos te chamar?"
        {...name}
      />
      <Input
        id="cpf"
        type="text"
        placeholder="No formato 000.000.000-00"
        {...cpf}
      />
      <LabelInformation>Data de Nascimento: </LabelInformation>
      <DateInput />
      <LabelInformation>Cargo atual: </LabelInformation>
      <Radio options={['Colaborador', 'Administrador']} />
    </>
  );
};

export default SignUpMultiset;
