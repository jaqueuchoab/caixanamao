import React from 'react';
import style from './ProgressIndicator.module.css'
import { useMode } from '../../../context/ModeContext';

const ProgressIndicator = () => {
  const {mode} = useMode();

  return (
    <section className={style.progressIndicator}>
      <div className={style.containerProgress}>
        <a className={style.progressDot} id={style[mode]}>
          <span className={style.numberDot}>1</span>
        </a>
        <div className={style.indicatorStep}>Identificação</div>
      </div>
      <div className={`${style.lineProgress}`} id={style[mode]}>
        <div></div>
      </div>
      <div className={style.containerProgress}>
        <a className={style.progressDot} id={style[mode]}>
          <span className={style.numberDot}>2</span>
        </a>
      </div>
    </section>
  );
};

export default ProgressIndicator;
