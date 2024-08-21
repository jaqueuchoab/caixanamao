import React from 'react';
import Button from '../button/Button';
import style from './styles/Identification.module.css';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';
import Input from '../input/Input';
import useForm from '../../hooks/useForm';
import Radio from '../input/Radio';
import DateInput, { typeDate } from '../input/DateInput';

const Identification = () => {
  const name = useForm('name');
  const cpf = useForm('cpf');
  const [position, setPosition] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState<typeDate>({day: '', month: '', year: ''});

  function createDate(dateOfBirth: typeDate) {
    const date = new Date(Number(dateOfBirth.year), (Number(dateOfBirth.month) - 1), Number(dateOfBirth.day));
    console.log(date);
  }

  return (
    <section className={style.mainContent}>
      <section className={style.forms}>
        <h3>Cadastrar</h3>
        <p>Insira seus dados e rapidamente acesse a ferramenta.</p>
        <ProgressIndicator />
        <form>
          <fieldset>
            <label>Nome:</label>
            <Input
              id="nome"
              type="text"
              placeholder="Como devemos te chamar?"
              {...name}
            />
          </fieldset>
          <fieldset>
            <label>CPF:</label>
            <Input
              id="cpf"
              type="text"
              placeholder="No formato 000.000.000-00"
              {...cpf}
            />
          </fieldset>
          <fieldset>
            <label>Data de nascimento:</label>
            <DateInput value={dateOfBirth} setValue={setDateOfBirth}/>
          </fieldset>
          <fieldset>
            <label>Cargo atual:</label>
            <div className={style.radioList}>
              <Radio
                options={['Administrador', 'Funcionário']}
                value={position}
                setValue={setPosition}
              />
            </div>
          </fieldset>
        </form>
      </section>
      <Button onClick={() => {createDate(dateOfBirth)}}>Continuar</Button>
    </section>
  );
};

export default Identification;
