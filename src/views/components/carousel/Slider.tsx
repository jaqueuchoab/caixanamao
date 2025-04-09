import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Slider.module.css";

type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={style.container}>
      <Slider {...settings}>
        {images.map((image, index) => {
          return (
            <div key={index} className={style.item}>
              <img src={image} alt="" className={style.image} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
