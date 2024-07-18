import React from 'react';
import Button from '../button/Button';
import style from './styles/Identification.module.css';

const Identification = () => {
  return (
    <section className={style.mainContent}>
      <section className={style.forms}>
        <h3>Cadastrar</h3>
        <p>Insira seus dados e rapidamente acesse a ferramenta.</p>
        <div className={style.progressIndicator}>
          <div className={style.containerProgress}>
            <div className={style.progressDot}>
              <p className={style.numberDot}>
                1
              </p>
            </div>
            <div className={style.indicatorStep}>
              Identificação
            </div>
          </div>
          <div className={style.lineProgress}>
            <div></div>
          </div>
          <div className={style.containerProgress}>
            <div className={style.progressDot}>
              <p className={style.progressDot}>
                2
              </p>
            </div>
          </div>
        </div>
      </section>
      <Button>Continuar</Button>
    </section>
  );
};

export default Identification;
