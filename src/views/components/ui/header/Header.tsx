import cnm_logo_dark from '@assets/logos/dark-theme-assets/cnm-logo-dark.svg';
import cnm_logohorz_dark from '@assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logo_light from '@assets/logos/light-theme-assets/cnm-logo-light.svg';
import cnm_logohorz_light from '@assets/logos/light-theme-assets/cnm-logohorz-light.svg';

import { CircleHalfIcon } from '@phosphor-icons/react';
import { Link } from '@lib/router';
import { useContextTheme } from '@context/ThemeContext';
import { HeaderContainer, HeaderLogo, HeaderNav } from './Header.styles';
import { Button } from '@components/ui/button/Button';

export function getLogo(mode: string, width: number | null) {
	if (width && width > 768) {
		return mode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark;
	}

	return mode === 'light' ? cnm_logo_light : cnm_logo_dark;
}

const Header = () => {
	const { themeMode, switchTheme } = useContextTheme();

	return (
		<HeaderContainer>
			<Link to='/'>
				<HeaderLogo
					src={(() => getLogo(themeMode, window.innerWidth))()}
					alt={`logo-mode-${themeMode}`}
				/>
			</Link>
			<HeaderNav>
				<Button variant='neutral' onClick={switchTheme}>
					<CircleHalfIcon
						color={
							themeMode === 'light'
								? 'var(--color-neutral-950)'
								: 'var(--color-neutral-100)'
						}
						size={32}
						weight='fill'
					/>
				</Button>
			</HeaderNav>
		</HeaderContainer>
	);
};

export default Header;
