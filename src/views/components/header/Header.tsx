import cnm_logo_dark from '../../assets/logos/dark-theme-assets/cnm-logo-dark.svg';
import cnm_logohorz_dark from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logo_light from '../../assets/logos/light-theme-assets/cnm-logo-light.svg';
import cnm_logohorz_light from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';

import { CircleHalfIcon } from '@phosphor-icons/react';
import { useEffect } from 'react';
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
}

const Header = () => {
	const { mode, setMode } = useMode();

	// TODO: acho que da para simplificar essa alteracao de modo
	React.useEffect(() => {
		localStorage?.setItem('mode', mode);
		setColorApp(mode);
	}, [mode]);

	return (
		<HeaderContainer>
			<Link to='/'>
				<HeaderLogo
					src={(() => getLogo(mode, window.innerWidth))()}
					alt={`logo-mode-${mode}`}
				/>
			</Link>
			<HeaderNav>
				<button
					onClick={() => {
						setMode(mode === 'light' ? 'dark' : 'light');
					}}
				>
					<CircleHalfIcon
						color={
							mode === 'light'
								? 'var(--color-neutral-950)'
								: 'var(--color-neutral-100)'
						}
						size={32}
						weight='fill'
					/>
				</button>
			</HeaderNav>
		</HeaderContainer>
	);
};

export default Header;
