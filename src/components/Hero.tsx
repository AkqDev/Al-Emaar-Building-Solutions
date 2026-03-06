import React, { useState, useEffect } from 'react';
import { Carousel } from 'antd';
import slider1 from '../assets/Sliders/slider1.png';
import slider2 from '../assets/Sliders/slider2.png';
import slider3 from '../assets/Sliders/slider3.png';
import mobileSlider1 from '../assets/Sliders/Mobile/Slider1.jpeg';
import mobileSlider2 from '../assets/Sliders/Mobile/Slider2.jpeg';
import mobileSlider3 from '../assets/Sliders/Mobile/Slider3.jpeg';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '300px',
  width: '100%',
  objectFit: 'cover',
  display: 'block',
};

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const desktopSlides = [slider1, slider2, slider3];
  const mobileSlides = [mobileSlider1, mobileSlider2, mobileSlider3];
  const slides = isMobile ? mobileSlides : desktopSlides;

  return (
    <div className="hero-container font-poppins mt-4 md:mt-0 relative z-10">
      <Carousel 
        autoplay
        autoplaySpeed={5000}
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