import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Imports
import bosch from '../assets/ToolsBrands/bosch.png'; 
import emtop from '../assets/ToolsBrands/emtop.png';
import pedrolla from '../assets/ToolsBrands/pedrolla.png';
import total from '../assets/ToolsBrands/total.png';
import makita from '../assets/ToolsBrands/makita.svg';
import dewesser from '../assets/ToolsBrands/Dewesser.svg';
import artlife from '../assets/ToolsBrands/ArtLife.png';
import alfanar from '../assets/ToolsBrands/Alfanar.png';
import bahra from '../assets/ToolsBrands/Bahra.svg';
import orient from '../assets/ToolsBrands/Orient.png';

interface BrandLogo {
  image: string;
  name: string;
  route: string;
}

const ToolsBrands: React.FC = () => {
  const logos: BrandLogo[] = [
    { image: bosch, name: 'Bosch', route: '/bosch-products' },
    { image: emtop, name: 'Emtop', route: '/emtop-products' },
    { image: pedrolla, name: 'Pedrolla', route: '/pedrolla-products' },
    { image: total, name: 'Total', route: '/total-products' },
    { image: makita, name: 'Makita', route: '/makita-products' },
    { image: dewesser, name: 'Dewesser', route: '/dewesser-products' },
    { image: artlife, name: 'ArtLife', route: '/artlife-products' },
    { image: alfanar, name: 'Alfanar', route: '/alfanar-products' },
    { image: bahra, name: 'Bahra', route: '/bahra-products' },
    { image: orient, name: 'Orient', route: '/orient-products' },
  ];
  const duplicatedLogos: BrandLogo[] = [...logos, ...logos];

  return (
    <section className="py-12 md:py-20 overflow-hidden ">
      {/* Main Heading Section */}
      <div className="!pb-6 md:!pb-12 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-white leading-tight"
        >
          Tools, Hardwares
          <span className="text-yellow-400 !ml-2 block sm:inline"> & Equipments</span>
        </motion.h2>
      </div>

      <div className="relative flex items-center">
        {/* Edge Fades - Responsive */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-gray-900 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-gray-900 to-transparent" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((brand, index) => (
            <Link 
              key={`${index}-${brand.name}`}
              to={brand.route}
              className="flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 mx-2 sm:mx-3 md:mx-4"
            >
              <motion.div 
                whileHover={{ scale: 1.08, y: -8 }}
                transition={{ 
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1] as const
                }}
                className="group relative cursor-pointer"
              >
                <div className="relative w-full aspect-[5/2] bg-gray-800 border-2 border-gray-700 hover:border-[#6B5E18] rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 flex items-center justify-center shadow-md hover:shadow-2xl hover:shadow-[#6B5E18]/30 transition-all duration-500 ease-out">
                  <img 
                    src={brand.image} 
                    alt={brand.name} 
                    className="max-w-full max-h-full w-auto h-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#6B5E18]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-lg md:rounded-xl" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsBrands;
