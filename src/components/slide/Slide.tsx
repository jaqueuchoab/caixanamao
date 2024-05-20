import React, { ReactNode } from 'react';
import style from '../slide/Slide.module.css';
type SlideProps = {
  custom_controls?: boolean;
  slide: 'carousel' | 'normal';
  arrow_nav?: boolean;
  imgs: string[];
};

const Slide = (props: SlideProps) => {
  return (
    <div>
      {props.custom_controls ? (
        <ul className={style.customControls}>
        </ul>
      ) : (
        'false'
      )}
      {props.slide === 'normal' ? 'normal' : 'carousel'}
    </div>
  );
};

export default Slide;
