import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ConstructionImg from '../assets/ConstructionImg.png';
import saudiCeramicsLogo from '../assets/PrimaryBrands/saudiCeramics.png';
import weberLogo from '../assets/PrimaryBrands/weber.png';
import savetoLogo from '../assets/PrimaryBrands/saveto.svg';
import sikaLogo from '../assets/PrimaryBrands/sika.png';

const IntroConstruction = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeInOut" as const }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeInOut" as const }
    }
  };

  return (
    // Added responsive padding-top and consistent padding-bottom
    <section className="bg-white py-10 md:pb-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Text Content: order-2 (bottom) on mobile, order-1 (left) on desktop */}
          <motion.div 
            className="w-full text-center lg:text-left order-2 lg:order-1"
            variants={fadeInLeft}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-black text-[#6B5E18] text-[#002B36] leading-tight mb-6 lg:mb-8">
              Construction Materials
            </h2>

            <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto lg:mx-0">
              <p>
                <strong className="text-[#002B36] font-bold">Al Emaar Alreeq Trading Est.</strong> is a trusted
                supplier of premium construction materials across Saudi Arabia. We stock
                cement, steel, blocks, sand, aggregates, and all structural materials
                needed for residential and commercial projects.
                With over seven years of experience, we deliver quality materials directly
                to project sites. Our team ensures timely supply and competitive pricing
                to keep your construction on schedule and within budget.
              </p>
              <h3 className="text-xl md:text-3xl font-poppins font-black text-[#6B5E18] mt-6">
                Explore Our Brands
              </h3>
              <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 mt-4 justify-items-center lg:justify-items-start">
                <Link to="/saudi-ceramics-products">
                  <img src={saudiCeramicsLogo} alt="Saudi Ceramics" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/weber-products">
                  <img src={weberLogo} alt="Weber" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/saveto-products">
                  <img src={savetoLogo} alt="Saveto" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
                <Link to="/sika-products">
                  <img src={sikaLogo} alt="Sika" className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Image Container: order-1 (top) on mobile, order-2 (right) on desktop */}
          <motion.div 
            className="w-full flex justify-center lg:justify-end order-1 lg:order-2"
            variants={fadeInRight}
          >
            <motion.div 
              // Changed fixed 500px to responsive max-width + aspect ratio
              className="relative w-full max-w-[450px] aspect-square overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={ConstructionImg}
                alt="About Al Emaar Alreeq"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-[8px] md:border-[12px] border-white/10 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroConstruction;
