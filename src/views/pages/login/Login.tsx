import { useEffect } from 'react';
import { Route, Routes } from 'src/lib/router';
import cnm_logohorz_dark from '@assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logohorz_light from '@assets/logos/light-theme-assets/cnm-logohorz-light.svg';
import LoginEmail from './LoginEmail.tsx';
import { useContextTheme } from '../../context/ThemeContext.tsx';
import style from './styles/Login.module.css';
import { fetchUsersList } from '../../../services/fetchUsersList.ts';

/*
endpoint LOGIN
email: string;
senha: string;
*/

const Login = () => {
	const { themeMode } = useContextTheme();

	useEffect(() => {
		fetchUsersList();
	}, []);

	return (
		<div className={style.loginRegistration} id={style[themeMode]}>
			<img
				src={themeMode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark}
				alt='cnm_logohorz'
				style={{ height: 'var(--size-3md)' }}
			/>

			<Routes>
				<Route path='/' element={<LoginEmail />}></Route>
			</Routes>
		</div>
	);
};

export default Login;
