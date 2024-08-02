import React from 'react';
import Button from '../button/Button';
import style from './styles/Identification.module.css';
import ProgressIndicator from './ProgressIndicator/ProgressIndicator';
import Input from '../input/Input';
import useForm from '../../hooks/useForm';

const Identification = () => {
  const nome = useForm('name');
  const cpf = useForm('cpf');
  const data = useForm('date');

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
              {...nome}
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
          <Input
            id="data"
            type="date"
            {...data}
          />
          </fieldset>
          <fieldset>
            <label>Cargo atual:</label>
            <input type="checkbox" />
            <input type="checkbox" />
          </fieldset>
        </form>
      </section>
      <Button>Continuar</Button>
    </section>
  );
};

export default Identification;
