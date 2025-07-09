import React from 'react';
import { Route, Routes } from '@lib/router';
import cnm_logohorz_dark from '@assets/logos/dark-theme-assets/cnm-logohorz-dark.svg';
import cnm_logohorz_light from '@assets/logos/light-theme-assets/cnm-logohorz-light.svg';
import { useContextTheme } from '../../context/ThemeContext';
import Identification from './Identification';
import style from './styles/SingUp.module.css';
import Password from './Password';

const Signup = () => {
	const { themeMode } = useContextTheme();
	return (
		<div className={style.signUp} id={style[themeMode]}>
			<img
				src={themeMode === 'light' ? cnm_logohorz_light : cnm_logohorz_dark}
				alt='cnm_logohorz'
				style={{ height: 'var(--size-3md)' }}
			/>

			<Routes>
				<Route path='/' element={<Identification />}></Route>
				<Route path='/password' element={<Password />}></Route>
			</Routes>
		</div>
	);
};

export default Signup;
