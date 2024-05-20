import React from 'react';
import style from '../slide/Slide.module.css';
type SlideProps = {
  customControls?: boolean;
  slide: 'carousel' | 'normal';
  imgThumbs: string[];
  imgSlide: string[];
};
//configurar o active do customControls

const Slide = (props: SlideProps) => {
  return (
    <div>
      {props.customControls && props.imgThumbs.length > 0 ? (
        <ul className={style.customControls}>
          {props.imgThumbs.map((imgThumb, index) => {
            return (
              <li key={index}>
                <img src={imgThumb} alt="image-control" />
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
              return <li key={index}><img src={img} alt="img-slide" /></li>
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Slide;
