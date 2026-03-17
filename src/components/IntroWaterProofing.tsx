import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WaterProofingImg from '../assets/WaterProofingImg.png';
import dcpLogo from '../assets/ConstructionBrands/dcp.svg';
import adhelantLogo from '../assets/ConstructionBrands/adhelant.png';
import cicLogo from '../assets/ConstructionBrands/cic.svg';
import cmciLogo from '../assets/ConstructionBrands/cmci.png';
import fosrocLogo from '../assets/ConstructionBrands/fosroc.svg';
import dadcoLogo from '../assets/ConstructionBrands/dadco.png';
import sabitLogo from '../assets/ConstructionBrands/sabit.svg';
import bitumatLogo from '../assets/ConstructionBrands/bitumat.png';
import pattexLogo from '../assets/ConstructionBrands/pattex.png';

const IntroWaterProofing = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } }
  };

  return (
    <section className="bg-white py-10 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="w-full text-center lg:text-left order-2 lg:order-1" variants={fadeInLeft}>
            <h2 className="text-3xl md:text-5xl font-poppins font-black text-[#6B5E18] text-[#002B36] leading-tight mb-6 lg:mb-8">
              WaterProofing Items
            </h2>
            <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-full mx-auto lg:mx-0">
              <p>
                <strong className="text-[#002B36] font-bold">Al Emaar Alreeq Trading Est.</strong> supplies
                professional waterproofing solutions for roofs, basements, bathrooms, swimming pools, and water tanks.
                Our range includes membranes, coatings, sealants, and injection systems from leading manufacturers,
                protecting structures from water damage across Saudi Arabia.
              </p>
              <h3 className="text-xl md:text-4xl font-poppins font-black text-[#6B5E18] mt-6">
                Explore Our Brands
              </h3>
              <div className="grid grid-cols-4 gap-4 mt-4 justify-center lg:justify-start">
                <Link to="/dcp-products">
                  <img src={dcpLogo} alt="DCP" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/adhelant-products">
                  <img src={adhelantLogo} alt="Adhelant" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/cic-products">
                  <img src={cicLogo} alt="CIC" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/cmci-products">
                  <img src={cmciLogo} alt="CMCI" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/fosroc-products">
                  <img src={fosrocLogo} alt="Fosroc" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/dadco-products">
                  <img src={dadcoLogo} alt="Dadco" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/sabit-products">
                  <img src={sabitLogo} alt="Saabit" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/bitumat-products">
                  <img src={bitumatLogo} alt="Bitumat" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/pattex-products">
                  <img src={pattexLogo} alt="Pattex" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full flex justify-center lg:justify-end order-1 lg:order-2" variants={fadeInRight}>
            <motion.div
              className="relative w-full max-w-[490px] aspect-square overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={WaterProofingImg} alt="About Al Emaar Alreeq" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-[8px] md:border-[12px] border-white/10 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroWaterProofing;
