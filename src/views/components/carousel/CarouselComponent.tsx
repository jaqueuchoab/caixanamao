import React from 'react';
// Importando lib para o Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop : { 
    breakpoint : {  max : 3000 ,  min : 1024  } , 
    items : 3 
  } , 
  tablet : { 
    breakpoint : {  max : 1024 ,  min : 464  } , 
    items : 2 
  } , 
  mobile : { 
    breakpoint : {  max : 464 ,  min : 0  } , 
    items : 1 
  } 
};


const CarouselComponent = ({ images } : { images: string[] }) => {
  return (
    <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} centerMode={true} responsive={responsive}>
      {images.map((image, index) => {
        return <div><img style={{width: '100%'}} src={image} alt={`image-${index+1}`} /></div>
      })}
    </Carousel>
  );
};

export default CarouselComponent;
