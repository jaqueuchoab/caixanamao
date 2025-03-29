import React from 'react';
import style from './ProgressIndicator.module.css';
import { useTheme } from '../../../context/ThemeContext';

const ProgressIndicatorPassword = () => {
	const { themeMode } = useTheme();

	return (
		<section className={style.progressIndicator}>
			<div className={style.containerProgress}>
				<a className={style.progressDot} id={style[themeMode]}>
					<span className={style.numberDot}>1</span>
				</a>
			</div>
			<div className={`password ${style.lineProgress}`} id={style[themeMode]}>
				<div></div>
			</div>
			<div className={style.containerProgress}>
				<a className={style.progressDot} id={style[themeMode]}>
					<span className={style.numberDot}>2</span>
				</a>
				<div className={style.indicatorStep}>Senha</div>
			</div>
		</section>
	);
};

export default ProgressIndicatorPassword;
