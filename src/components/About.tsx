import { motion } from "framer-motion";
import ali from "../assets/ali.png";
import nadeem from "../assets/nadeem.png";
import AboutPage from '../assets/AboutPage.png'

const About = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }
    }
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-[1100px] mx-auto">
        {/* --- TOP SECTION: Introduction & Two Images --- */}
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12 mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="w-full  text-center lg:text-left"
            variants={fadeInLeft}
          >
            <motion.div 
              className="inline-block bg-[#002B36] text-white text-sm font-bold px-4 py-2 rounded mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              OUR INTRODUCTION
            </motion.div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#002B36] leading-tight mb-2">
              Established Since
              <span className="relative px-4">
                2023
                <span className="absolute bottom-0 left-0 w-full h-1 bg-red-600 -mb-2"></span>
              </span>
            </h2>
            <div className="mt-12 text-gray-600 leading-relaxed text-lg space-y-6">
              <p>
                <strong>Al Emaar Alreeq Trading Est.</strong> is a diversified
                trading company and a trusted supplier of premium building
                materials and MEP products across Saudi Arabia. With more than seven 
                years of industry and supply experience, we specialize in 
                multi-materials supplying.
              </p>
              <p>
                We provide a broad range of products including STP and swimming-pool 
                chemicals, electrical items, fire and safety equipment, home appliances, 
                electronics, and complete MEP solutions. We operate a full-service 
                showroom and offer direct material supply to project sites across the region.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-auto hidden lg:grid h-auto"
            variants={fadeInRight}
          >
            <motion.div 
              className="w-full h-full overflow-hidden rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={AboutPage}
                alt="Warehouse"
                className="w-full h-full object-cover"
              />
            </motion.div>
           </motion.div>
        </motion.div>

        {/* --- LEADERSHIP TEAM SECTION --- */}
        <motion.h2 
          className="text-3xl md:text-4xl font-['Poppins'] text-[#002B36] my-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Meet Our Leadership Team
        </motion.h2>

        {/* --- SECTION 1: CEO --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-24">
            {/* Mobile: Image First */}
            <motion.div 
              className="w-full lg:w-1/2 order-1 lg:order-2"
              variants={scaleIn}
            >
              <div className="h-[400px] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
                <img
                  src={nadeem}
                  alt="Nadeem Farooq Khan"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Mobile: Content Second */}
            <motion.div 
              className="w-full lg:w-1/2 order-2 lg:order-1 text-center lg:text-left"
              variants={fadeInLeft}
            >
              <h3 className="text-3xl font-bold font-['Poppins'] text-[#1a1a1a] mb-4">
                Nadeem Farooq Khan
              </h3>
              <p className="text-sm text-red-600 font-semibold mb-4 uppercase tracking-wide">
                Chief Executive Officer
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                CEO of Al Emaar Alreeq Trading Est. Nadeem Farooq Khan is a
                visionary leader with extensive experience in business development
                and strategic management. With a strong background in commerce and
                a keen understanding of market dynamics, Nadeem has played a
                pivotal role in expanding the company's footprint across Saudi
                Arabia, forging key partnerships, and driving growth in the
                competitive construction materials sector.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* --- SECTION 2: Marketing Manager --- */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Mobile: Image First */}
            <motion.div 
              className="w-full lg:w-1/2 order-1"
              variants={scaleIn}
            >
              <div className="h-[400px] overflow-hidden rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
                <img
                  src={ali}
                  alt="Ali Ur Rahman"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>

            {/* Mobile: Content Second */}
            <motion.div 
              className="w-full lg:w-1/2 order-2 text-center lg:text-left"
              variants={fadeInRight}
            >
              <h3 className="text-3xl font-bold font-['Poppins'] text-[#1a1a1a] mb-4">
                Ali Ur Rahman
              </h3>
              <p className="text-sm text-red-600 font-semibold mb-4 uppercase tracking-wide">
                Marketing Manager
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Marketing Manager at Al Emaar Alreeq Trading Est., Ali Ur Rahman 
                leads the company's marketing initiatives and brand development 
                strategies. With expertise in market analysis and customer engagement, 
                Ali focuses on building strong client relationships and expanding 
                market presence across Saudi Arabia. His innovative approach to 
                marketing and deep understanding of the construction materials sector 
                has been key in positioning Al Emaar Alreeq as a trusted name in the 
                industry, driving customer satisfaction and business growth.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
