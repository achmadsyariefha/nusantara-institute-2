import React from "react";
import { Carousel } from "antd";
import Hero from "./hero";
const contentStyle = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const SlideShow = () => {
    const onChange = (currentSlide) => {
      console.log(currentSlide);
    };
    return (
      <Carousel afterChange={onChange}>
        <div>
          <Hero />
        </div>
        <div>
          {/* <h3 style={contentStyle}>2</h3> */}
          <Hero />
        </div>
        <div>
          {/* <h3 style={contentStyle}>3</h3> */}
          <Hero />
        </div>
        <div>
          {/* <h3 style={contentStyle}>4</h3> */}
          <Hero />
        </div>
      </Carousel>
    );
  };
  export default SlideShow;