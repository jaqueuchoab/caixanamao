import cnm_logohorz_dark from '../../assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logohorz_light from '../../assets/logos/light-theme-assets/cnm-logohorz-light.svg';
import { useContextTheme } from '../../context/ThemeContext.tsx';
import { Information, LoginContainer, LoginEmail, MultisetContainer, TabsSwitcher } from './Login.styles.ts';

/*
endpoint LOGIN
email: string;
senha: string;
*/

const Login = () => {
	const { themeMode } = useContextTheme();

	return (
		<LoginContainer>
			<img
				src={themeMode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark}
				alt='cnm_logohorz'
				style={{ height: 'var(--size-3md)' }}
			/>
			<LoginEmail>
				<Information>Acesse sua Conta ou Cadastre-se</Information>
				<MultisetContainer>
					<TabsSwitcher></TabsSwitcher>
				</MultisetContainer>
			</LoginEmail>
		</LoginContainer>
	);
};

export default Login;
