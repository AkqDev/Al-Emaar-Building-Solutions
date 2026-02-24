import React from 'react';
import { motion } from 'framer-motion';

// Imports
import bitumat from '../assets/ConstructionBrands/bitumat.png';
import cmci from '../assets/ConstructionBrands/cmci.png';
import fosroc from '../assets/ConstructionBrands/fosroc.svg';
import kapci from '../assets/ConstructionBrands/kapci.png';
import pattex from '../assets/ConstructionBrands/pattex.png';
import tremco from '../assets/ConstructionBrands/tremco.png';
import cic from '../assets/ConstructionBrands/cic.svg';
import dcp from '../assets/ConstructionBrands/dcp.svg';

const ConstructionBrands: React.FC = () => {
  const logos: string[] = [bitumat, cmci, fosroc, kapci, pattex, tremco, cic, dcp];
  const duplicatedLogos: string[] = [...logos, ...logos];

  return (
    <section className="py-12 md:py-20 bg-[#243F90]/95 overflow-hidden">
      {/* Heading Section */}
      <div className="!pb-6 md:!pb-12 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-white/90 leading-tight"
        >
          Construction Chemicals, 
          <span className="text-black !ml-2 block sm:inline">Adhesives & Waterproofing</span>
        </motion.h2>
      </div>

      <div className="relative flex items-center">
        {/* Edge Fades - Responsive */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#243F90]/95 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#243F90]/95 to-transparent" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div 
              key={`${index}-${logo}`}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 md:w-56 md:h-36 lg:w-64 lg:h-40 mx-2 sm:mx-3 md:mx-4 flex items-center justify-center rounded-lg md:rounded-xl p-3 sm:p-4 md:p-6 transition-all duration-300"
            >
              <img 
                src={logo} 
                alt="Construction Brand" 
                className="h-full w-full object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ConstructionBrands;