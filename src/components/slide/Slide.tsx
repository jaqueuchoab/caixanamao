import React from 'react';

type SlideProps = {
  custom_controls?: boolean;
  slide: "carousel" | "normal";
  arrow_nav?: boolean;
}

const Slide = (props: SlideProps) => {
  return (
    <div>
      {props.custom_controls ? "true" : "false"}
      {props.slide === "normal" ? "normal" : "carousel"}
    </div>
  );
};

export default Slide;
