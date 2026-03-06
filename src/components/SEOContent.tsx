"use client";

import { useRef } from "react";
import { motion , useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaDollarSign, FaTrophy, FaHammer, FaTruck, FaHandshake } from "react-icons/fa";

const SEOContent = () => {
  const values = [
    {
      title: "Competitive Wholesale Pricing",
      description: "Best prices for bulk orders and contractors",
      icon: <FaDollarSign className="text-3xl text-[#6B5E18] mb-3 mx-auto" />
    },
    {
      title: "Trusted International Brands",
      description: "Authorized dealers for premium brands",
      icon: <FaTrophy className="text-3xl text-[#6B5E18] mb-3 mx-auto" />
    },
    {
      title: "Bulk Supply for Contractors",
      description: "Large inventory for construction projects",
      icon: <FaHammer className="text-3xl text-[#6B5E18] mb-3 mx-auto" />
    },
    {
      title: "Fast Delivery in Jeddah",
      description: "Quick delivery across Jeddah and surrounding areas",
      icon: <FaTruck className="text-3xl text-[#6B5E18] mb-3 mx-auto" />
    },
    {
      title: "Reliable Customer Support",
      description: "Expert advice and technical support",
      icon: <FaHandshake className="text-3xl text-[#6B5E18] mb-3 mx-auto" />
    },
  ];

  // Motion variants for cards
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, type: "spring", stiffness: 100 },
    }),
  };

  // Ref for in-view detection
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { amount: 0.3 });

  return (
    <div className="w-full mx-auto py-30 px-4 max-w-[1200px]" ref={containerRef}>
      
      <div className="flex items-center justify-center mb-8 gap-4">
        <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        {/* Heading Section */}
        <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
          Why Choose Al Emaar
          <span className="text-[#6B5E18] !ml-2">Al Areeq Trading Est.?</span>
        </h2>
        <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
      </div>

      {/* Grid of values */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        {values.map((item, index) => {
          // Determine span for large screens
          let colSpan = "col-span-1";
          if (index === 0) colSpan = "lg:col-span-2";
          if (index === 1) colSpan = "lg:col-span-2 lg:col-start-3";
          if (index === 2) colSpan = "lg:col-span-2 lg:col-start-5";
          if (index === 3) colSpan = "lg:col-span-3 lg:col-start-1";
          if (index === 4) colSpan = "lg:col-span-3 lg:col-start-4";

          return (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={`${colSpan} bg-[#101828] text-white p-6 rounded-xl shadow-md text-center hover:scale-105 hover:shadow-xl transition-transform duration-300 cursor-pointer`}
            >
              {item.icon}
              <h2 className="text-xl font-semibold mb-2 text-white">{item.title}</h2>
              <p className="text-sm text-gray-200">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SEOContent;