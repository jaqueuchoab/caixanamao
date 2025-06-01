import { Link } from 'react-router-dom';
<<<<<<< HEAD
import Button from '../button/Button.tsx';
import Carousel from '../carousel/Slider.tsx';
=======
import { Button } from '../button/Button.tsx';
// Importando imagens
import cnm_gradient_arrow from '../../assets/logos/cnm-gradient-arrow.svg';
import cnm_logo_light from '../../assets/logos/light-theme-assets/cnm-logo-light.svg';
import cnm_logo_dark from '../../assets/logos/dark-theme-assets/cnm-logo-dark.svg';
// Importando estilo
import style from './styles/Home.module.css';
import { useContextTheme } from '../../context/ThemeContext.tsx';
// Importando componentes
import TextContent from './HomeTextContent.tsx';
import Header from '../header/Header.tsx';
>>>>>>> feature/dashboard
import Footer from '../footer/Footer.tsx';
import Header from '../header/Header.tsx';
import TextContent from './HomeTextContent.tsx';

import cnm_test_carousel from '../../assets/cnm_carousel.jpg';
import cnm_gradient_arrow from '../../assets/logos/cnm-gradient-arrow.svg';
import dark_logo from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import light_logo from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';

import style from './styles/Home.module.css';

import { useMode } from '../../context/ModeContext.tsx';

const Home = () => {
	const { themeMode } = useContextTheme();

<<<<<<< HEAD
  return (
    <div className={style.mainContent} id={style[mode]}>
      <Header />
      <Carousel
        imagesSrc={[
          cnm_test_carousel,
          cnm_test_carousel,
          cnm_test_carousel,
          cnm_test_carousel,
          cnm_test_carousel,
        ]}
        options={{ autoplay: { enabled: true, delay: 2500 } }}
      />
      <section className={style.sectionContent + ' ' + style.sectionDivisorOne}>
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
        <Carousel
          imagesSrc={[
            cnm_test_carousel,
            cnm_test_carousel,
            cnm_test_carousel,
            cnm_test_carousel,
            cnm_test_carousel,
          ]}
          options={{ hasDots: true, autoplay: { enabled: true, delay: 2500 } }}
        />
      </section>
      <section
        className={style.sectionContent + ' ' + style.sectionDivisorThree}
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

        <Link
          style={{ width: '100%', marginTop: 'var(--size-md)' }}
          to={'/login'}
        >
          <Button>Login / Cadastro</Button>
        </Link>
      </section>
      <Footer />
    </div>
  );
=======
	return (
		<div className={style.mainContent} id={style[themeMode]}>
			<Header />
			<Slide
				slide='carousel'
				imgSlide={[cnm_logo_light, cnm_logo_dark, cnm_logo_light]}
			/>
			<section className={style.sectionContent + ' ' + style.sectionDivisorOne}>
				<TextContent
					titulo='Facilitamos o fechamento de caixa e descomplicamos as tarefas financeiras do seu negócio.'
					texto='Gestão financeira com foco na acessibilidade para pequenas empresas.'
				/>
				<Button>Quero experimentar</Button>
			</section>

			<section className={style.sectionDivisorTwo}>
				<section className={style.sectionContent}>
					<TextContent
						titulo='Transforme Seu Processo Financeiro com Nossa Aplicação'
						texto='Simplificamos o fechamento de caixa, permitindo que você e seus funcionários realizem as tarefas financeiras de forma rápida e sem complicações.'
					/>
				</section>
				<Slide
					customControls={true}
					thumbs={{
						thumbType: 'color',
						thumbValue:
							themeMode === 'light'
								? 'var(--color-blue-300)'
								: 'var(--color-blue-300)',
					}}
					slide='carousel'
					imgSlide={[cnm_logo_light, cnm_logo_dark, cnm_gradient_arrow]}
				/>
			</section>
			<section
				className={style.sectionContent + ' ' + style.sectionDivisorThree}
			>
				<div>
					<img
						src={cnm_gradient_arrow}
						alt='cnm_gradient_arrow'
						className={style.gradientArrow}
					/>
				</div>
				<TextContent
					titulo='Experimente Agora e Transforme Sua Gestão Financeira'
					texto='Experimente nossa aplicação hoje mesmo e descubra como podemos simplificar o fechamento de caixa, proporcionando controle total, segurança dos dados e uma experiência que impulsiona o sucesso do seu negócio.'
				/>

				<Link
					style={{ width: '100%', marginTop: 'var(--size-md)' }}
					to={'/login'}
				>
					<Button>Login / Cadastro</Button>
				</Link>
			</section>
			<Footer />
		</div>
	);
>>>>>>> feature/dashboard
};

export default Home;
