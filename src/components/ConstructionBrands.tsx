import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Imports
import bitumat from '../assets/ConstructionBrands/bitumat.png';
import cmci from '../assets/ConstructionBrands/cmci.png';
import fosroc from '../assets/ConstructionBrands/fosroc.svg';
import kapci from '../assets/ConstructionBrands/kapci.png';
import pattex from '../assets/ConstructionBrands/pattex.png';
import tremco from '../assets/ConstructionBrands/tremco.png';
import cic from '../assets/ConstructionBrands/cic.svg';
import dcp from '../assets/ConstructionBrands/dcp.svg';

interface BrandLogo {
  image: string;
  name: string;
  route: string;
}

const ConstructionBrands: React.FC = () => {
  const logos: BrandLogo[] = [
    { image: bitumat, name: 'Bitumat', route: '/bitumat-products' },
    { image: cmci, name: 'CMCI', route: '/cmci-products' },
    { image: fosroc, name: 'Fosroc', route: '/fosroc-products' },
    { image: kapci, name: 'Kapci', route: '/kapci-products' },
    { image: pattex, name: 'Pattex', route: '/pattex-products' },
    { image: tremco, name: 'Tremco', route: '/tremco-products' },
    { image: cic, name: 'CIC', route: '/cic-products' },
    { image: dcp, name: 'DCP', route: '/dcp-products' },
  ];
  const duplicatedLogos: BrandLogo[] = [...logos, ...logos];

  return (
    <section className="py-12 md:py-20 overflow-hidden bg-gray-900">
      {/* Category Heading Section */}
      <div className="!pb-6 md:!pb-12 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-white leading-tight"
        >
          Construction Chemicals, 
          <span className="text-yellow-400 !ml-2 block sm:inline">Adhesives & Waterproofing</span>
        </motion.h2>
      </div>

      <div className="relative flex items-center">
        {/* Edge Fades - Responsive */}
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-gray-900 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-gray-900 to-transparent" />

        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-50%", "0%"] }}
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
                  ease: [0.4, 0, 0.2, 1]
                }}
                className="group relative cursor-pointer"
              >
                <div className="relative w-full aspect-[5/2] bg-white/15 border-2 border-gray-700 hover:border-[#6B5E18] rounded-lg md:rounded-xl p-4 sm:p-5 md:p-6 flex items-center justify-center shadow-md hover:shadow-2xl hover:shadow-[#6B5E18]/30 transition-all duration-500 ease-out">
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

export default ConstructionBrands;
