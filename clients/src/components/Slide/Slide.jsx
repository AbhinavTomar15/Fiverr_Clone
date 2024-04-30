import React from 'react'
import "./Slide.scss"
import Slider from "infinite-react-carousel";

const Slide = ({children,sildesToShow,arrowsScroll}) => {
  return (
    <div className="slide">
        <div className="container">
          <Slider slidesToShow={sildesToShow} arrowsScroll={arrowsScroll}>
           {children}
          </Slider> 
        </div>
    </div>
  );
}

export default Slide
