import { Button } from '@components/ui/button/Button.tsx';
import Carousel from 'src/views/pages/home/components/carousel/Slider.tsx';

import cnm_test_carousel from '@assets/cnm_carousel.jpg';
import cnm_gradient_arrow from '@assets/logos/cnm-gradient-arrow.svg';

import { useContextTheme } from '../../context/ThemeContext.tsx';
import Header from '@components/ui/header/Header.tsx';
import TextContent from './HomeTextContent.tsx';
import style from './styles/Home.module.css';
import Footer from '@components/ui/footer/Footer.tsx';
import { Link } from '@lib/router.ts';

const Home = () => {
	const { themeMode } = useContextTheme();

	return (
		<div className={style.mainContent} id={style[themeMode]}>
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
};

export default Home;
