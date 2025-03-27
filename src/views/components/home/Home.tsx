import { Link } from 'react-router-dom';
import Button from '../button/Button.tsx';
// Importando imagens
import cnm_gradient_arrow from '../../assets/logos/cnm-gradient-arrow.svg';
import cnm_test_carousel from '../../assets/cnm_carousel.jpg';
// Importando estilo
import style from './styles/Home.module.css';
import { useMode } from '../../context/ModeContext.tsx';
// Importando componentes
import TextContent from './HomeTextContent.tsx';
import Header from '../header/Header.tsx';
import Footer from '../footer/Footer.tsx';
import CarouselComponent from '../carousel/CarouselComponent.tsx';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  const { mode } = useMode();

  return (
    <div className={style.mainContent} id={style[mode]}>
      <Header />
      <CarouselComponent images = {[cnm_test_carousel, cnm_test_carousel, cnm_test_carousel,  cnm_test_carousel]}/>
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
          <CarouselComponent images = {[cnm_gradient_arrow, cnm_gradient_arrow, cnm_gradient_arrow]}/>
        </section>
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
