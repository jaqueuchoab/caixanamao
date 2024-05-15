import React from 'react';
import TextContent from '../components/home/TextContent';
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      <section>
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
      <section>
      <TextContent
        titulo="Transforme Seu Processo Financeiro com Nossa Aplicação"
        texto="Simplificamos o fechamento de caixa, permitindo que você e seus funcionários realizem as tarefas financeiras de forma rápida e sem complicações."
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
      <section>
      <TextContent
        titulo="Experimente Agora e Transforme Sua Gestão Financeira"
        texto="Experimente nossa aplicação hoje mesmo e descubra como podemos simplificar o fechamento de caixa, proporcionando controle total, segurança dos dados e uma experiência que impulsiona o sucesso do seu negócio."
      />
      </section>
    </main>
  );
};

export default Home;
