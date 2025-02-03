import React from 'react';
// Importando lib para o Carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const responsive = {
  desktop : { 
    breakpoint : {  max : 3000 ,  min : 1024  } , 
    items : 3 , 
    partialVisibilityGutter : 40  // isso é necessário para informar a quantidade de px que deve ser visível. 
  } , 
  tablet : { 
    breakpoint : {  max : 1024 ,  min : 464  } , 
    items : 2 , 
    partialVisibilityGutter : 30  // isso é necessário para informar a quantidade de px que deve ser visível. 
  } , 
  mobile : { 
    breakpoint : {  max : 464 ,  min : 0  } , 
    items : 1 , 
    partialVisibilityGutter : 30  // isso é necessário para informar a quantidade de px que deve ser visível. 
  } 
};


const CarouselComponent = (images: string[]) => {
  return (
    <Carousel partialVisible = {true} responsive={responsive}>
      {images.map((image, index) => {
        <div><img src={image} alt={`image-${index+1}`} /></div>
      })}
    </Carousel>
  );
};

export default CarouselComponent;
