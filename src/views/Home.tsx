import TextContent from '../components/home/TextContent';
import Button from '../components/button/Button';
import { Link } from 'react-router-dom';
// Importando imagens
import cnm_gradient_arrow from '../assets/logos/cnm-gradient-arrow.svg';
import cnm_logo_light from '../assets/logos/light-theme-assets/cnm-logo-light.svg';
import cnm_logo_dark from '../assets/logos/dark-theme-assets/cnm-logo-dark.svg';

// Importando estilo
import style from '../components/home/Home.module.css';
import Slide from '../components/slide/Slide.tsx';
import { useMode } from '../context/ModeContext.tsx';
import Header from '../components/header/Header.tsx';
import Footer from '../components/footer/Footer.tsx';

const Home = () => {
  const { mode } = useMode();

  throw new Error("Error");
  
  
  return (
    <div className={style.mainContent} id={style[mode]}>
      <Header />
      <Slide
        slide="carousel"
        imgSlide={[cnm_logo_light, cnm_logo_dark, cnm_logo_light]}
      />
      <section className={style.sectionContent + ` sectionDivisorOne`}>
        <TextContent
          titulo="Facilitamos o fechamento de caixa e descomplicamos as tarefas financeiras do seu negócio."
          texto="Gestão financeira com foco na acessibilidade para pequenas empresas."
        />
        <Button>Quero experimentar</Button>
      </section>

      <section className={style.sectionDivisorTwo}>
        <section className={style.sectionContent}>
          <TextContent
            titulo="Transforme Seu Processo Financeiro com Nossa Aplicação"
            texto="Simplificamos o fechamento de caixa, permitindo que você e seus funcionários realizem as tarefas financeiras de forma rápida e sem complicações."
          />
        </section>
        <Slide
          customControls={true}
          thumbs={{
            thumbType: 'color',
            thumbValue: mode === 'light' ? 'var(--color-blue-300)' : 'var(--color-blue-300)',
          }}
          slide="carousel"
          imgSlide={[cnm_logo_light, cnm_logo_dark, cnm_gradient_arrow]}
        />
      </section>
      <section
        className={style.sectionContent + " " + style.sectionDivisorThree}
      >
        <div>
          <img
            src={cnm_gradient_arrow}
            alt="cnm_gradient_arrow"
            className={style.gradientArrow}
          />
        </div>
        <TextContent
          titulo="Experimente Agora e Transforme Sua Gestão Financeira"
          texto="Experimente nossa aplicação hoje mesmo e descubra como podemos simplificar o fechamento de caixa, proporcionando controle total, segurança dos dados e uma experiência que impulsiona o sucesso do seu negócio."
        />

        <Link to={'/login-registration'}>
          <Button>Login / Cadastro</Button>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
