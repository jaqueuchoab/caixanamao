import React from 'react';
// Importando style css
import style from './Footer.module.css';
//Importando imagens
import logo_vert_light from '../../assets/logos/light-theme-assets/cnm-logovert-light.svg';
import logo_vert_dark from '../../assets/logos/dark-theme-assets/cnm-logovert-dark.svg';
// Importando ferramentas para configuração de rotas
import { Link } from 'react-router-dom';
import { useContextTheme } from '../../context/ThemeContext';

const Footer = () => {
<<<<<<< HEAD
	const { mode } = useMode();

	return (
		<footer id={style[mode]}>
			<div className={style.content}>
				<img
					src={mode === 'light' ? logo_vert_light : logo_vert_dark}
					alt={`logo-mode-${mode}`}
					className={style['logo-vert']}
				/>
				<div className={style.actions}>
=======
	const { themeMode } = useContextTheme();

	return (
		<footer id={style[themeMode]}>
			<div className={style.contentFooter}>
				<img
					src={themeMode === 'light' ? logo_vert_light : logo_vert_dark}
					alt={`logo-mode-${themeMode}`}
					className={style.logoVert}
				/>
				<div className={style.linkActions}>
>>>>>>> feature/dashboard
					<Link to='/login'>
						<p>Login / Cadastro</p>
					</Link>
					<Link to='/benefits'>
						<p>Vantagens</p>
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
