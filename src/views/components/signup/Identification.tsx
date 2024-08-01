import React from 'react';
import Button from '../button/Button';
import style from './styles/Identification.module.css';
import ProgressIndicator from './ProgressIndicator';

const Identification = () => {
  return (
    <section className={style.mainContent}>
      <section className={style.forms}>
        <h3>Cadastrar</h3>
        <p>Insira seus dados e rapidamente acesse a ferramenta.</p>
        <ProgressIndicator/>
      </section>
      <Button>Continuar</Button>
    </section>
  );
};

export default Identification;
