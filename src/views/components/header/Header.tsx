import cnm_logo_dark from '../../assets/logos/dark-theme-assets/cnm-logo-dark.svg';
<<<<<<< HEAD
import { CircleHalf } from '@phosphor-icons/react';
// Importando ferramentas para configuração de rotas
=======
import cnm_logohorz_dark from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logo_light from '../../assets/logos/light-theme-assets/cnm-logo-light.svg';
import cnm_logohorz_light from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';

import { CircleHalfIcon } from '@phosphor-icons/react';
import { useEffect } from 'react';
>>>>>>> feature/carousel
import { Link } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';
import { HeaderContainer, HeaderLogo, HeaderNav } from './Header.styles';

function setColorApp(mode: string) {
	const app: HTMLDivElement | null = document.querySelector('.app');
	const themeColor: HTMLMetaElement | null = document.querySelector(
		'meta[name="theme-color"]'
	);
	const themeColorApple: HTMLMetaElement | null = document.querySelector(
		'meta[name="apple-mobile-web-app-status-bar-style"]'
	);

	if (app && themeColor && themeColorApple) {
<<<<<<< HEAD
		if (mode === 'light') {
			app.style.background = 'var(--color-neutral-100)';
			themeColor.content = 'var(--color-neutral-100)';
			themeColorApple.content = 'var(--color-neutral-100';
		} else {
			app.style.background = 'var(--color-neutral-800)';
			themeColor.content = 'var(--color-neutral-800)';
			themeColorApple.content = 'var(--color-neutral-800)';
		}
	} else {
		throw new Error('app não existe');
	}
=======
		mode === 'light'
			? (app.style.background = 'var(--color-neutral-100)') &&
			  (themeColor.content = 'var(--color-neutral-100)') &&
			  (themeColorApple.content = 'var(--color-neutral-100)')
			: (app.style.background = 'var(--color-neutral-800)') &&
			  (themeColor.content = 'var(--color-neutral-800)') &&
			  (themeColorApple.content = 'var(--color-neutral-800)');
	} else {
		throw new Error('app não existe');
	}
}

function getLogo(mode: string, width: number | null) {
	if (width && width > 768) {
		return mode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark;
	}

	return mode === 'light' ? cnm_logo_light : cnm_logo_dark;
>>>>>>> feature/carousel
}

const Header = () => {
	const { mode, setMode } = useMode();

<<<<<<< HEAD
	React.useEffect(() => {
=======
	useEffect(() => {
>>>>>>> feature/carousel
		localStorage?.setItem('mode', mode);
		setColorApp(mode);
	}, [mode]);

	return (
<<<<<<< HEAD
		<header className={style.header}>
			<Link to='/'>
				<img
					src={mode === 'light' ? cnm_logo_light : cnm_logo_dark}
					alt={`logo-mode-${mode}`}
					className={style.logoHeader}
				/>
			</Link>
			<nav className={style.nav}>
=======
		<HeaderContainer>
			<Link to='/'>
				<HeaderLogo
					src={(() => getLogo(mode, window.innerWidth))()}
					alt={`logo-mode-${mode}`}
				/>
			</Link>
			<HeaderNav>
>>>>>>> feature/carousel
				<button
					onClick={() => {
						setMode(mode === 'light' ? 'dark' : 'light');
					}}
				>
<<<<<<< HEAD
					<CircleHalf
=======
					<CircleHalfIcon
>>>>>>> feature/carousel
						color={
							mode === 'light'
								? 'var(--color-neutral-950)'
								: 'var(--color-neutral-100)'
						}
<<<<<<< HEAD
						size={38}
						weight='fill'
					/>
				</button>
			</nav>
		</header>
=======
						size={32}
						weight='fill'
					/>
				</button>
			</HeaderNav>
		</HeaderContainer>
>>>>>>> feature/carousel
	);
};

export default Header;
