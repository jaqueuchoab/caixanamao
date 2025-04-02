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
  },
};

const CarouselComponent = ({ images }: { images: string[] }) => {

  return (
    <Carousel
      additionalTransfrom={-412}
      autoPlaySpeed={3000}
      minimumTouchDrag={382}
      centerMode={true}
      draggable
      infinite
      keyBoardControl
      pauseOnHover
      showDots={false}
      sliderClass="carousel-slider"
      slidesToSlide={1}
      swipeable
      removeArrowOnDeviceType={['tablet', 'mobile']}
      responsive={responsive}
      containerClass={style.carousel}
      itemClass={style.item}
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
