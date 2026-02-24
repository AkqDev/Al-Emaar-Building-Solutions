import React from 'react';
import { Carousel } from 'antd';
import slider1 from '../assets/Sliders/slider1.png';
import slider2 from '../assets/Sliders/slider2.png';
import slider3 from '../assets/Sliders/slider3.png';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '300px',
  width: '100%',
  objectFit: 'cover',
  display: 'block',
};

const Hero = () => {
  const slides = [slider1, slider2, slider3];

  return (
    <div className="hero-container font-poppins">
      <Carousel 
        autoplay={{ dotDuration: true }} 
        autoplaySpeed={5000}
        // Change inactive dots to black with some transparency
        dotStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }} 
        // Change the active dot to solid black
        activeDotStyle={{ backgroundColor: '#000' }}
      >
        {slides.map((image, index) => (
          <div key={index}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              style={contentStyle} 
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;