import React from 'react';
// Importando style css
import style from './Header.module.css';
// Importando imagens
import cnm_logo_light from '../../assets/logos/light-theme-assets/cnm-logo-light.svg';
import cnm_logo_dark from '../../assets/logos/dark-theme-assets/cnm-logo-dark.svg';
import { CircleHalf } from '@phosphor-icons/react';
// Importando ferramentas para configuração de rotas
import { Link } from 'react-router-dom';
import { useMode } from '../../context/ModeContext';

function setColorApp(mode: string) {
	const app: HTMLDivElement | null = document.querySelector('.app');
	const themeColor: HTMLMetaElement | null = document.querySelector(
		'meta[name="theme-color"]'
	);
	const themeColorApple: HTMLMetaElement | null = document.querySelector(
		'meta[name="apple-mobile-web-app-status-bar-style"]'
	);

	if (app && themeColor && themeColorApple) {
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
}

const Header = () => {
	const { mode, setMode } = useMode();

	React.useEffect(() => {
		localStorage?.setItem('mode', mode);
		setColorApp(mode);
	}, [mode]);

	return (
		<header className={style.header}>
			<Link to='/'>
				<img
					src={mode === 'light' ? cnm_logo_light : cnm_logo_dark}
					alt={`logo-mode-${mode}`}
					className={style.logoHeader}
				/>
			</Link>
			<nav className={style.nav}>
				<button
					onClick={() => {
						setMode(mode === 'light' ? 'dark' : 'light');
					}}
				>
					<CircleHalf
						color={
							mode === 'light'
								? 'var(--color-neutral-950)'
								: 'var(--color-neutral-100)'
						}
						size={38}
						weight='fill'
					/>
				</button>
			</nav>
		</header>
	);
};

export default Header;
