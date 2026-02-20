import React from 'react';
import { Laptop, ClipboardCheck, Truck, Headphones } from 'lucide-react';

const Values = () => {
  const steps = [
    {
      icon: <Laptop className="w-6 h-6 text-white" />,
      title: "Careful Selection",
      description: "We meticulously choose our materials from reputable suppliers.",
      bgColor: "bg-[#6B5E18]", 
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      title: "Thorough Inspection",
      description: "Our experts rigorously assess every product for quality and compliance.",
      bgColor: "bg-[#233F90]", 
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Efficient Delivery",
      description: "We prioritize timely and secure delivery for your convenience.",
      bgColor: "bg-[#6B5E18]",
    },
    {
      icon: <Headphones className="w-6 h-6 text-white" />,
      title: "Dedicated Support",
      description: "Our team is committed to providing personalized assistance and ongoing support.",
      bgColor: "bg-[#233F90]",
    },
  ];

  return (
    <section className="py-24 px-4 bg-white font-poppins">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* HEADER SECTION */}
        <div className="relative mb-24 inline-block">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-10">
            <span className="bg-[#6B5E18] text-white text-[10px] font-bold px-5 py-2 rounded-md border-y border-[#C42021] uppercase tracking-[0.2em]">
              How We Work
            </span>
          </div>
          
          <div className="pt-4 border-t border-gray-200 px-10">
            <h2 className="text-5xl md:text-8xl font-serif text-[#012433] tracking-tight">
              Our 4 Steps To <span className="relative text-[#233F90]">
                Quality Assurance
                <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#233F90] -z-10"></span>
              </span>
            </h2>
          </div>
        </div>

        {/* STEPS SECTION */}
        <div className="relative mt-10">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-gray-200 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative z-10 group">
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${step.bgColor}`}>
                  {step.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-[#012433] mb-3">
                  {step.title}
                </h3>
                
                {/* Description - Fixed to max 2 lines */}
                <p className="text-gray-500 text-sm max-w-[240px] line-clamp-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;