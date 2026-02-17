import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

const textItems = [
  "Seamless Integration",
  "AI Automation",
  "Unified Workflow",
  "Intelligent Stack",
  "Smart Analytics",
  "Data Precision",
  "Custom Solutions"
];

const Brands = () => {
  return (
    <div className="py-20 flex flex-col justify-center items-center bg-white font-poppins">
      {/* Centered Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-3xl md:text-5xl font-medium text-black tracking-tight">
          Brands That Trust Us
        </h2>
      </div>

      <div className="w-full max-w-7xl px-4 relative">
        
        {/* Gradient Overlays for the "Fade" effect on edges */}
        {/* Change 'from-white' to 'from-black' if your background is dark */}
        <div className="absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          loop={true}
          speed={4000} // Keeps the movement constant and smooth
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="flex items-center text-linear-swiper"
        >
          {textItems.map((text, index) => (
            <SwiperSlide key={index}>
              <div className="h-20 flex items-center justify-center rounded-xl border border-black/10 bg-gray-50 text-black font-semibold text-center px-4 shadow-sm hover:shadow-md transition-all duration-300">
                {text}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;