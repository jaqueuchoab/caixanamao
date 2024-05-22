import React from 'react';
import style from '../slide/style/Slide.module.css';
import { SlideNav } from './Slide.ts';

type SlideProps = {
  customControls?: boolean;
  slide: 'carousel' | 'normal';
  thumbs?: {
    thumbType: 'color' | 'img';
    thumbValue: string | string[];
  };
  imgSlide: string[];
};
//configurar o active do customControls

const Slide = (props: SlideProps) => {
  /*
  const slide = new SlideNav('.slide', '.slide-wrapper');
  slide.init();*/

  return (
    <section>
      {props.customControls && props.thumbs ? (
        <ul className={style.customControls}>
          {props.thumbs.thumbType === 'color'
            ? props.imgSlide.map((thumb, index) => {
                return (
                  <li
                    key={index}
                    style={{ backgroundColor: `${props.thumbs?.thumbValue}` }}
                  ></li>
                );
              })
            : props.imgSlide.map((thumb, index) => {
                return (
                  <li key={index}>
                    <img src={thumb} alt="thumb-controls" />
                  </li>
                );
              })}
        </ul>
      ) : null}

      {props.slide === 'normal' ? (
        'normal'
      ) : (
        <div className={style.slideWrapper}>
          <ul className={style.slide}>
            {props.imgSlide.map((img, index) => {
              return (
                <li key={index}>
                  <img src={img} alt="img-slide" />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </section>
  );
};

export default Slide;
