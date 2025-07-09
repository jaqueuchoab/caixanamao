import React from 'react';
import style from './ProgressIndicator.module.css';
import { useContextTheme } from '../../../context/ThemeContext';

const ProgressIndicator = () => {
	const { themeMode } = useContextTheme();

	return (
		<section className={style.progressIndicator}>
			<div className={style.containerProgress}>
				<a className={style.progressDot} id={style[themeMode]}>
					<span className={style.numberDot}>1</span>
				</a>
				<div className={style.indicatorStep}>Identificação</div>
			</div>
			<div className={`${style.lineProgress}`} id={style[themeMode]}>
				<div></div>
			</div>
			<div className={style.containerProgress}>
				<a className={style.progressDot} id={style[themeMode]}>
					<span className={style.numberDot}>2</span>
				</a>
			</div>
		</section>
	);
};

export default ProgressIndicator;
