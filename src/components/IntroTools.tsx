import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ToolsImg from '../assets/ToolsImg.png';
import emtopLogo from '../assets/ToolsBrands/emtop.png';
import dewesserLogo from '../assets/ToolsBrands/Dewesser.svg';
import artlifeLogo from '../assets/ToolsBrands/ArtLife.png';
import boschLogo from '../assets/ToolsBrands/bosch.png';
import makitaLogo from '../assets/ToolsBrands/makita.svg';
import totalLogo from '../assets/ToolsBrands/total.png';

const IntroTools = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" as const } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" as const } }
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
              Tools And Hardware Equipments
            </h2>
            <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto lg:mx-0">
              <p>
                <strong className="text-[#002B36] font-bold">Al Emaar Alreeq Trading Est.</strong> offers
                a wide range of tools and hardware equipment including power tools, hand tools,
                drilling machines, grinders, compressors, and site equipment from
                top international brands.
                Whether you need tools for light maintenance or heavy construction work,
                we have the right equipment for every job. We supply to contractors,
                workshops, and project sites across Saudi Arabia with reliable after-sales support.
              </p>
              <h3 className="text-xl md:text-3xl font-poppins font-black text-[#6B5E18] mt-6">
                Explore Our Brands
              </h3>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 mb-10 md:mb-0 justify-items-center lg:justify-items-start">
                <Link to="/emtop-products">
                  <img src={emtopLogo} alt="Emtop" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/dewesser-products">
                  <img src={dewesserLogo} alt="Dewesser" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/artlife-products">
                  <img src={artlifeLogo} alt="Artlife" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/bosch-products">
                  <img src={boschLogo} alt="Bosch" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/makita-products">
                  <img src={makitaLogo} alt="Makita" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/total-products">
                  <img src={totalLogo} alt="Total" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full flex justify-center lg:justify-end order-1 lg:order-2" variants={fadeInRight}>
            <motion.div
              className="relative w-full max-w-[450px] aspect-square overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={ToolsImg} alt="About Al Emaar Alreeq" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-[8px] md:border-[12px] border-white/10 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroTools;
