import { motion } from 'framer-motion';
import { Laptop, ClipboardCheck, Truck, Headphones } from 'lucide-react';

const Values = () => {
  const steps = [
    {
      icon: <Laptop className="w-6 h-6 text-white" />,
      title: "Careful Selection",
      description: "We meticulously choose our materials from reputable suppliers.",
      bgColor: "bg-[#6B5E18]", 
    },
    {
      icon: <ClipboardCheck className="w-6 h-6 text-white" />,
      title: "Thorough Inspection",
      description: "Our experts rigorously assess every product for quality and compliance.",
      bgColor: "bg-[#233F90]", 
    },
    {
      icon: <Truck className="w-6 h-6 text-white" />,
      title: "Efficient Delivery",
      description: "We prioritize timely and secure delivery for your convenience.",
      bgColor: "bg-[#6B5E18]",
    },
    {
      icon: <Headphones className="w-6 h-6 text-white" />,
      title: "Dedicated Support",
      description: "Our team is committed to providing personalized assistance and ongoing support.",
      bgColor: "bg-[#233F90]",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const stepVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.4, 0, 0.2, 1] as const,
        delay: 0.8
      }
    }
  };

  return (
    <motion.section 
      className="py-24 px-4 bg-white font-poppins md:pt-34"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* HEADER SECTION */}
        <motion.div 
          className="relative mb-24 inline-block"
          variants={headerVariants}
        >
          <motion.div 
            className="absolute -top-6 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-[#6B5E18] text-white text-[10px] font-bold px-5 py-2 rounded-md border-y border-[#C42021] uppercase tracking-[0.2em]">
              How We Work
            </span>
          </motion.div>
          
          <div className="pt-4 border-t border-gray-200 px-10">
            <motion.h2 
              className="text-5xl md:text-8xl font-serif text-[#012433] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our 4 Steps To <span className="relative text-[#233F90]">
                Quality Assurance
                <motion.span 
                  className="absolute bottom-1 left-0 w-full h-[6px] bg-[#233F90] -z-10"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  viewport={{ once: true }}
                ></motion.span>
              </span>
            </motion.h2>
          </div>
        </motion.div>

        {/* STEPS SECTION */}
        <motion.div 
          className="relative mt-10"
          variants={containerVariants}
        >
          {/* Connector Line */}
          <motion.div 
            className="hidden md:block absolute top-8 left-[12%] right-[12%] h-[1px] bg-gray-200 -z-0 origin-left"
            variants={lineVariants}
          ></motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center relative z-10 group"
                variants={stepVariants}
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
                }}
              >
                {/* Icon Circle */}
                <motion.div 
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${step.bgColor}`}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    transition: { duration: 0.5, ease: "easeInOut" }
                  }}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1 + 0.5,
                    ease: [0.4, 0, 0.2, 1] as const
                  }}
                  viewport={{ once: true }}
                >
                  {step.icon}
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  className="text-xl font-semibold text-[#012433] mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                >
                  {step.title}
                </motion.h3>
                
                {/* Description - Fixed to max 2 lines */}
                <motion.p 
                  className="text-gray-500 text-sm max-w-[240px] line-clamp-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.9 }}
                  viewport={{ once: true }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Values;