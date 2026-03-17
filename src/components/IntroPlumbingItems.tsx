import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PlumbingImg from '../assets/PlumbingImg.png';
import agmLogo from '../assets/PrimaryBrands/agm.png';
import groheLogo from '../assets/PrimaryBrands/grohe.png';
import pedrollaLogo from '../assets/ToolsBrands/pedrolla.png';

const IntroPlumbingItems = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } }
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
              Plumbing Items
            </h2>
            <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto lg:mx-0">
              <p>
                <strong className="text-[#002B36] font-bold">Al Emaar Alreeq Trading Est.</strong> stocks
                a full range of plumbing items including UPVC pipes, fittings, valves,
                water heaters, pumps, and sanitary ware. We carry products from trusted
                brands that meet Saudi and international quality standards.
                From small residential repairs to large MEP installations, we supply
                plumbing materials directly to project sites across Saudi Arabia with
                fast delivery and expert product support.
              </p>
              <h3 className="text-xl md:text-3xl font-poppins font-black text-[#6B5E18] mt-6">
                Explore Our Brands
              </h3>
              <div className="flex flex-row gap-6 mt-4 justify-center lg:justify-start mb-10 md:mb-0">
                <Link to="/agm-products">
                  <img src={agmLogo} alt="AGM" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/grohe-products">
                  <img src={groheLogo} alt="Grohe" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/pedrolla-products">
                  <img src={pedrollaLogo} alt="Pedrolla" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
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
              <img src={PlumbingImg} alt="About Al Emaar Alreeq" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-[8px] md:border-[12px] border-white/10 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroPlumbingItems;
