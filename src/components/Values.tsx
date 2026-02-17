import React from 'react';
import { Laptop, ClipboardCheck, Truck, Headphones } from 'lucide-react'; // Using Lucide for the icons

const Values = () => {
  const steps = [
    {
      icon: <Laptop className="w-6 h-6 text-white" />,
      title: "Careful Selection",
      description: "We meticulously choose our materials from reputable suppliers.",
      bgColor: "bg-[#002B36]", // Dark Navy
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      title: "Thorough Inspection",
      description: "Our experts rigorously assess every product for quality and compliance.",
      bgColor: "bg-[#C42727]", // Red
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Efficient Delivery",
      description: "We prioritize timely and secure delivery for your convenience.",
      bgColor: "bg-[#002B36]",
    },
    {
      icon: <Headphones className="w-6 h-6 text-white" />,
      title: "Dedicated Support",
      description: "Our team is committed to providing personalized assistance and ongoing support.",
      bgColor: "bg-[#C42727]",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-16">
          <span className="bg-[#002B36] text-white text-xs font-bold px-4 py-1.5 rounded uppercase tracking-widest">
            How We Work
          </span>
          <h2 className="mt-6 text-4xl md:text-6xl font-serif text-[#002B36] relative inline-block">
            Our 4 Steps To <span className="relative">
              Quality Assurance
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#C42727]"></div>
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Horizontal Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-gray-300 -z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center relative z-10">
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg ${step.bgColor}`}>
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#002B36] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
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