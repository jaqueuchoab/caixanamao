import React from 'react';
import Input from '../input/Input';
import { LabelInformation } from '../authMode/AuthModeSelector.styles';
import Radio from '../input/Radio';
import DateInput from '../input/DateInput';
import { useFormStore } from '../../store/useFormStore';
import { maskCPF } from '../../../utils/maskCPF';

type IdentificationProps = {
  onValidChange?: (isValid: boolean) => void;
};

// os inputs estão funcionando mas sem validação, o que é necessário

const Identification = ({
  onValidChange,
}: IdentificationProps) => {
  const { formData, setField } = useFormStore();

  React.useEffect(() => {
    // brevemente mudar essa validação com o hook form
    const isValid = formData.nome.length > 3 && formData.cpf.length >= 14;
    onValidChange?.(isValid);

  }, [formData]);

  return (
    <>
      <Input
        id="nome"
        type="text"
        placeholder="Como devemos te chamar?"
        value={formData.nome}
        onChange={(e) => setField('nome', e.value)}
      />
      <Input
        id="cpf"
        type="text"
        placeholder="No formato 000.000.000-00"
        value={maskCPF(formData.cpf)}
        onChange={(e) => {
          setField('cpf', e.value)
        }}
        max={14}
      />
      <LabelInformation>Data de Nascimento: </LabelInformation>
      <DateInput value={formData.nasc} onChange={(e) => setField('nasc', e)}/>
      <LabelInformation>Cargo atual: </LabelInformation>
      <Radio
        value={formData.cargo}
        onChange={(value) => setField('cargo', value)}
        options={[
    { label: 'Colaborador', value: 1 },
    { label: 'Administrador', value: 4 },
  ]}
      />
    </>
  );
};

export default Identification;
