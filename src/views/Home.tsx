import React from 'react';
import TextContent from '../components/home/TextContent';
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';
// Importando imagens
import cnm_gradient_arrow from '../assets/logos/cnm-gradient-arrow.svg';
// Importando estilo
import style from '../components/home/Home.module.css';

const Home = () => {
  return (
    <div className={style.mainContent}>
      <section className={style.sectionContent}>
        <TextContent
          titulo="Facilitamos o fechamento de caixa e descomplicamos as tarefas financeiras do seu negócio."
          texto="Gestão financeira com foco na acessibilidade para pequenas empresas."
        />
        <Button
          borderColor="var(--color-green-400)"
          backgroundColor="var(--color-green-200)"
        >
          Quero experimentar
        </Button>
      </section>
      <section className={style.sectionContent}>
        <div>
          <img
            src={cnm_gradient_arrow}
            alt="cnm_gradient_arrow"
            className={style.gradientArrow}
          />
        </div>
        <TextContent
          titulo="Transforme Seu Processo Financeiro com Nossa Aplicação"
          texto="Simplificamos o fechamento de caixa, permitindo que você e seus funcionários realizem as tarefas financeiras de forma rápida e sem complicações."
        />
      </section>
      <section className={style.sectionContent}>
        <div>
          <img
            src={cnm_gradient_arrow}
            alt="cnm_gradient_arrow"
            className={style.gradientArrow}
          />
        </div>
        <TextContent
          titulo="Experimente Agora e Transforme Sua Gestão Financeira"
          texto="Experimente nossa aplicação e descubra como podemos simplificar o fechamento de caixa, proporcionando controle, segurança e uma experiência que impulsiona o sucesso do seu negócio."
        />

        <Link to={'/login-cadastro'}>
          <Button
            borderColor="var(--color-green-400)"
            backgroundColor="var(--color-green-200)"
          >
            Login / Cadastro
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
