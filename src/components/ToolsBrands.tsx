import React from 'react';
import { motion } from 'framer-motion';

// Imports
import ahq from '../assets/ToolsBrands/ahq.png';
import bosch from '../assets/ToolsBrands/bosch.png'; 
import emtop from '../assets/ToolsBrands/emtop.png';
import pedrolla from '../assets/ToolsBrands/pedrolla.png';
import total from '../assets/ToolsBrands/total.png';
import makita from '../assets/ToolsBrands/makita.svg';
import atlas from '../assets/ToolsBrands/atlas.svg';
import arco from '../assets/ToolsBrands/arco.svg';

const ToolsBrands: React.FC = () => {
  const logos: string[] = [ahq, bosch, emtop, pedrolla, total, makita, atlas, arco];
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
          Tools, Hardwares
          <span className="text-black !ml-2 block sm:inline"> & Equipments</span>
        </motion.h2>
      </div>

      <div className="relative flex items-center">
        {/* Edge Fades - Responsive */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#243F90]/95 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#243F90]/95 to-transparent" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
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
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 mx-2 sm:mx-3 md:mx-4 transition-all duration-300"
            >
              <div className="relative w-full aspect-[5/2] bg-white/5 backdrop-blur-sm rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt="Tools Brand" 
                  className="max-w-full max-h-full w-auto h-auto object-contain"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsBrands;