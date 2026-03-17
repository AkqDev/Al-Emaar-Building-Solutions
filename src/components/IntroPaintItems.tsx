import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import paintsImg from '../assets/paintsImg.png';
import kapciLogo from '../assets/ConstructionBrands/kapci.png';
import hempelLogo from '../assets/PrimaryBrands/hempel.png';
import jazeeraLogo from '../assets/PrimaryBrands/jazeera.svg';
import tremcoLogo from '../assets/ConstructionBrands/tremco.png';
import sevenLogo from '../assets/PrimaryBrands/777.png';
import jotunLogo from '../assets/PrimaryBrands/jotun.svg';
import jeddahLogo from '../assets/PrimaryBrands/Jeddah.png';

const IntroPaintItems = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut" } }
  };

  const brands = [
    { logo: kapciLogo, alt: "KAPCI", route: "/kapci-products" },
    { logo: hempelLogo, alt: "Hempel", route: "/hempel-products" },
    { logo: jazeeraLogo, alt: "Al Jazeera Paints", route: "/jazeera-products" },
    { logo: tremcoLogo, alt: "Tremco", route: "/tremco-products" },
    { logo: sevenLogo, alt: "777 Paint", route: "/777-products" },
    { logo: jotunLogo, alt: "Jotun", route: "/jotun-products" },
    { logo: jeddahLogo, alt: "Jeddah Paints", route: "/jeddah-products" },
  ];

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
            <h2 className="text-3xl md:text-5xl font-poppins font-black text-[#6B5E18] leading-tight mb-6 lg:mb-8">
              Paint Items
            </h2>
            <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto lg:mx-0">
              <p>
                <strong className="text-[#002B36] font-bold">Al Emaar Alreeq Trading Est.</strong> offers
                a wide selection of interior and exterior paints, primers, and coatings
                from top brands including Jotun and Nadeem. Our range covers wall paints,
                wood finishes, anti-corrosion coatings, and specialty paints.
                We supply paint products for residential villas, commercial buildings,
                and industrial facilities across Saudi Arabia. Our team can help you
                choose the right product for every surface and environment.
              </p>
              <h3 className="text-xl md:text-3xl font-poppins font-black text-[#6B5E18] mt-6">
                Explore Our Brands
              </h3>
              <div className="grid grid-cols-4 gap-4 mt-4 mb-10 md:mb-0">
                {brands.map((brand) => (
                  <Link to={brand.route} key={brand.alt}>
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      className="h-23 w-57 p-2 object-contain rounded-xl border border-gray-100 shadow-md hover:scale-105 transition-transform bg-gray-300"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div className="w-full flex justify-center lg:justify-end order-1 lg:order-2" variants={fadeInRight}>
            <motion.div
              className="relative w-full max-w-[450px] aspect-square overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img src={paintsImg} alt="About Al Emaar Alreeq" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border-[8px] md:border-[12px] border-white/10 rounded-2xl pointer-events-none"></div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroPaintItems;
