import logo_vert_light from '../../assets/logos/light-theme-assets/cnm-logovert-light.svg';
import logo_vert_dark from '../../assets/logos/dark-theme-assets/cnm-logovert-dark.svg';

import { Link } from 'react-router-dom';
import { useContextTheme } from '../../context/ThemeContext';
import {
	FooterActions,
	FooterContainer,
	FooterContent,
	FooterLogo,
} from './Footer.styles';
import { Button } from '../button/Button';

const Footer = () => {
	const { themeMode } = useContextTheme();

	function getLogo() {
		return themeMode === 'light' ? logo_vert_light : logo_vert_dark;
	}

	return (
		<FooterContainer>
			<FooterContent>
				<FooterLogo src={(() => getLogo())()} alt={`logo-mode-${themeMode}`} />
				<FooterActions>
					<Link style={{ background: 'transparent' }} to='/login'>
						<Button variant='link'>Login / Cadastro</Button>
					</Link>
					<Link style={{ background: 'transparent' }} to='/benefits'>
						<Button variant='link'>Vantagens</Button>
					</Link>
				</FooterActions>
			</FooterContent>
		</FooterContainer>
	);
};

export default Footer;
