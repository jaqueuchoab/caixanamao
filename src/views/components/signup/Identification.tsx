import React from 'react';
import Input from '../input/Input';
import { LabelInformation } from '../authMode/AuthModeSelector.styles';
import Radio from '../input/Radio';
import DateInput from '../input/DateInput';
import useForm from '../../hooks/useForm';
import { useFormStore } from '../../store/useFormStore';

type IdentificationProps = {
  onValidChange?: (isValid: boolean) => void;
};

// os inputs estão funcionando mas sem validação, o que é necessário

const Identification = ({
  onValidChange,
}: IdentificationProps) => {
  const name = useForm('name');
  const cpf_field = useForm('cpf');
  const { formData, setField } = useFormStore();

  React.useEffect(() => {
    // brevemente mudar essa validação com o hook form
    const isValid = name.value.length > 3 && cpf_field.value.length > 3;
    onValidChange?.(isValid);

  }, [formData, name, cpf_field]);

  return (
    <>
      <Input
        id="nome"
        type="text"
        placeholder="Como devemos te chamar?"
        value={formData.nome}
        onChange={(e) => setField('nome', e.value)}
        error={name.error}
      />
      <Input
        id="cpf"
        type="text"
        placeholder="No formato 000.000.000-00"
        value={formData.cpf}
        onChange={(e) => setField('cpf', e.value)}
        error={cpf_field.error}
      />
      <LabelInformation>Data de Nascimento: </LabelInformation>
      <DateInput value={formData.nasc} onChange={(e) => setField('nasc', e)}/>
      <LabelInformation>Cargo atual: </LabelInformation>
      <Radio
        value={formData.cargo}
        onChange={(value) => setField('cargo', value)}
        options={['Colaborador', 'Administrador']}
      />
    </>
  );
};

export default Identification;
