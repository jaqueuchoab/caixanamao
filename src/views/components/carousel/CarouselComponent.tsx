import React from 'react';
// Importando lib para o Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// Importando o estilo
import style from './style/Carousel.module.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 70
  },
};

const CarouselComponent = ({ images }: { images: string[] }) => {
  return (
      <Carousel
        removeArrowOnDeviceType={['tablet', 'mobile']}
        responsive={responsive}
        containerClass={style.carousel}
        itemClass={style.item}
        partialVisible={true}
        infinite
      >
        {images.map((image, index) => {
          return (
              <img
                key={index}
                src={image}
                alt={`image-${index + 1}`}
                className={style.img}
              />
          );
        })}
      </Carousel>
  );
};

export default CarouselComponent;
