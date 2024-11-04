import React from 'react';
import Button from '../button/Button';
import style from './styles/Identification.module.css';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';
import Input from '../input/Input';
import useForm from '../../hooks/useForm';
import Radio from '../input/Radio';
import DateInput, { typeDate } from '../input/DateInput';
import { Link } from 'react-router-dom';
/*
endpoint para CREATE_USER
nome: string;
cpf: string;
nasc: string; (year-month-day)
cargo: boolean;

-esses dados serão coletados em outra página-
email: string;
senha: string;
senhaConfirmacao: string;
*/

const Identification = () => {
  const name = useForm('name');
  const cpf = useForm('cpf');
  const [position, setPosition] = React.useState('');
  const [dateOfBirth, setDateOfBirth] = React.useState<typeDate>({
    day: '',
    month: '',
    year: '',
  });

  function isEmpty() {
    return position.length > 0 &&
      dateOfBirth.day.length > 0 &&
      dateOfBirth.month.length > 0 &&
      dateOfBirth.year.length > 0
      ? true
      : false;
  }

  function dateString(dateOfBirth: typeDate): string {
    return `${dateOfBirth.year}-${dateOfBirth.month}-${dateOfBirth.day}`;
  }

  function isAdm(position: string) {
    return position === 'Administrador' ? true : false;
  }

  // pode ser utilitaria porquê haverá momentos em ue vamos precisar realizar operações com as datas
  function createDate(dateOfBirth: typeDate) {
    const date = new Date(
      Number(dateOfBirth.year),
      Number(dateOfBirth.month) - 1,
      Number(dateOfBirth.day),
    );
    return date;
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
              pattern='[A-Za-zÀ-ÖØ-öø-ÿ\s]+'
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
            <DateInput value={dateOfBirth} setValue={setDateOfBirth} />
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
      <Link style={{ width: '100%' }} to={'password'}>
        {isEmpty() ? (
          <Button>Continuar</Button>
        ) : (
          <Button disabledButton={true}>Continuar</Button>
        )}
      </Link>
    </section>
  );
};

export default Identification;
