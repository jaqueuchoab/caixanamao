import { Link } from 'react-router-dom';
import Button from '../button/Button.tsx';
// Importando imagens
import cnm_gradient_arrow from '../../assets/logos/cnm-gradient-arrow.svg';
import cnm_logo_light from '../../assets/logos/light-theme-assets/cnm-logo-light.svg';
import cnm_logo_dark from '../../assets/logos/dark-theme-assets/cnm-logo-dark.svg';
// Importando estilo
import style from './styles/Home.module.css';
import { useMode } from '../../context/ModeContext.tsx';
// Importando componentes
import TextContent from './HomeTextContent.tsx';
import Header from '../header/Header.tsx';
import Footer from '../footer/Footer.tsx';
import Slide from '../slide/Slide.tsx';

const Home = () => {
  const { mode } = useMode();

  return (
    <div className={style.mainContent} id={style[mode]}>
      <Header />
      <Slide
        slide="carousel"
        imgSlide={[cnm_logo_light, cnm_logo_dark, cnm_logo_light]}
      />
      <section className={style.sectionContent  + " " + style.sectionDivisorOne}>
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

        <Link style={{width: '100%', marginTop: 'var(--size-md)'}} to={'/login'}>
          <Button>Login / Cadastro</Button>
        </Link>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
