import React from 'react';
import Button from '../button/Button';
import style from './styles/Identification.module.css';

const Identification = () => {
  return (
    <section className={style.mainContent}>
      <section>
        <h3>Cadastrar</h3>
      </section>
      <Button>Continuar</Button>
    </section>
  );
};

export default Identification;
