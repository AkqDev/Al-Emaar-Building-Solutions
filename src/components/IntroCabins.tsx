import { motion } from "framer-motion";
import portaImg from '../assets/portaImg.png';

const IntroCabins = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeInOut" }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: "easeInOut" }
    }
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
          <motion.div 
            className="w-full text-center lg:text-left order-2 lg:order-1"
            variants={fadeInLeft}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-black text-[#6B5E18] text-[#002B36] leading-tight mb-6 lg:mb-8">
              Porta Cabins
            </h2>

            <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-3xl mx-auto lg:mx-0">
              <p>
                <strong className="text-[#002B36] font-bold">Al Emaar Alreeq Trading Est.</strong> provides
                high-quality porta cabins for construction sites, labor accommodations,
                site offices, and temporary storage. Our cabins are durable, weather-resistant,
                and available in various sizes to suit your project needs.
                We offer customizable porta cabin solutions with fast delivery and installation
                across Saudi Arabia. Whether for short-term or long-term use, our cabins
                are built to withstand harsh site conditions.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="w-full flex justify-center lg:justify-end order-1 lg:order-2"
            variants={fadeInRight}
          >
            <motion.div 
              className="relative w-full max-w-[450px] aspect-square overflow-hidden rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={portaImg}
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

export default IntroCabins;
