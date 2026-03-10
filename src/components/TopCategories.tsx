import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import light from '../assets/light.png'
import paints from '../assets/paints.png'
import construction from '../assets/construction.png' 
import safety from '../assets/safety.png'
import  plumbing from '../assets/plumbing.png'
import water from '../assets/water.png'

const categories = [
  { id: 1, title: 'Water Proofing', image:water, route: '/products/waterproofing-items' },
  { id: 2, title: 'Lighting & Electrical', image:light, route: '/products/electrical-items' },
  { id: 3, title: 'Paints', image:paints, route: '/products/paints-adhesives' },
  { id: 4, title: 'Construction Materials', image:construction, route: '/products/construction-materials' },
  { id: 5, title: 'Safety Products', image:safety, route: '/products/safety-products' },
  { id: 6, title: 'Plumbing Items', image:plumbing, route: '/products/plumbing-items' },
];

const TopCategories: React.FC = () => {
  const navigate = useNavigate();

  const handleViewAll = (route: string) => {
    navigate(route);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
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

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  return (
    <motion.section 
      className="py-12 md:py-24 px-4 max-w-8xl mx-auto font-poppins"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Header Section */}
      <motion.div 
        className="text-center mb-10"
        variants={headerVariants}
      >
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
          {/* Heading Section */}
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
            Top
            <span className="text-[#6B5E18] !ml-2">Categories</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-lg">Browse Our Best-Selling Categories</p>
      </motion.div>

      {/* Categories Grid */}
      <motion.div 
        className="grid md:grid-cols-3 lg:grid-cols-6 gap-4"
        variants={containerVariants}
      >
        {categories.map((cat) => (
          <motion.div 
            key={cat.id} 
            className="group cursor-pointer"
            variants={itemVariants}
            whileHover={{ 
              y: -12,
              scale: 1.05,
              transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const }
            }}
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-transform duration-300">
              {/* Image Container */}
              <motion.div 
                className="h-45 overflow-hidden bg-gray-100"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-[15px] font-semibold text-gray-800 h-10 flex items-center justify-center">
                  {cat.title}
                </h3>
                <motion.button 
                  onClick={() => handleViewAll(cat.route)}
                  className="mt-3 w-full bg-[#6B5E18] text-white py-2 px-4 rounded-md text-sm font-semibold transition-colors hover:bg-[#5a4d14]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  View All
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TopCategories;