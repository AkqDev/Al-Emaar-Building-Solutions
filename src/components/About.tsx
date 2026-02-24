import React from 'react';

const About = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2">
          <div className="inline-block bg-[#002B36] text-white text-xs font-bold px-3 py-1 rounded mb-6">
            OUR INTRODUCTION
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-[#002B36] leading-tight mb-2">
            Established Since 
            <span className="relative px-4">
              2023
              <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 -mb-2"></span>
            </span>
          </h2>

          <div className="mt-12 text-gray-600 leading-relaxed text-lg max-w-xl space-y-6">
            <p>
              <strong>Al Emaar Alreeq Trading Est.</strong> is a diversified trading company and a 
              trusted supplier of premium building materials and MEP products across Saudi Arabia. 
              With more than seven years of industry and supply experience, we specialize in 
              multi-materials supplying.
            </p>
            
            <p>
              We provide a broad range of products including STP and swimming-pool chemicals, 
              electrical items, fire and safety equipment, home appliances, electronics, and 
              complete MEP solutions. We operate a full-service showroom and offer direct 
              material supply to project sites across the region.
            </p>
          </div>
        </div>

        {/* Right Side: Two Images */}
        <div className="w-full lg:w-1/2 flex gap-4 h-[400px] md:h-[450px]">
          <div className="w-1/2 h-full overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80" 
              alt="Warehouse shelving" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-1/2 h-full overflow-hidden rounded-2xl shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&q=80" 
              alt="Construction materials" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;