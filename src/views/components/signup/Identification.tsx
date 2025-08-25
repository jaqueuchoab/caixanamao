import React from 'react';
import Input from '../input/Input';
import { LabelInformation } from '../authMode/AuthModeSelector.styles';
import Radio from '../input/Radio';
import DateInput from '../input/DateInput';
import useForm from '../../hooks/useForm';
import { IdentificationData } from '../../../@types/user-types';
import { useFormStore } from '../../store/useFormStore';

type IdentificationProps = {
  onValidChange?: (isValid: boolean) => void;
  onDataChange?: (data: IdentificationData) => void;
};

// os inputs estão funcionando mas sem validação, o que é necessário

const Identification = ({ onValidChange, onDataChange }: IdentificationProps) => {
  const name = useForm('name');
  const cpf = useForm('cpf');
  const { formData, setField } = useFormStore();

  React.useEffect(() => {
      const isValid = name.validate() && cpf.validate();
      onValidChange?.(isValid);
      
      onDataChange?.({ nome: name.value, cpf: cpf.value });
    }, [name.value, cpf.value]);

  return (
    <>
      <Input
        id="nome"
        type="text"
        placeholder="Como devemos te chamar?"
        value={formData.nome}
        onChange={(e) => setField("nome", e.value)}
        error={name.error}
      />
      <Input
        id="cpf"
        type="text"
        placeholder="No formato 000.000.000-00"
        value={formData.cpf}
        onChange={(e) => setField("cpf", e.value)}
        error={cpf.error}
      />
      <LabelInformation>Data de Nascimento: </LabelInformation>
      <DateInput />
      <LabelInformation>Cargo atual: </LabelInformation>
      <Radio options={['Colaborador', 'Administrador']} />
    </>
  );
};

export default Identification;
