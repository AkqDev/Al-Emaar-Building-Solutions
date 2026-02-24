import { motion } from 'framer-motion'
import PrimaryBrands from './PrimaryBrands'
import ConstructionBrands from './ConstructionBrands'
import ToolsBrands from './ToolsBrands'
import GypsumBrands from './GypsumBrands'

const Brands = () => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  // Individual section animation variants
  const sectionVariants = {
    hidden: { 
      opacity: 0, 
      y: 50 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      className="w-full overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={sectionVariants}>
        <PrimaryBrands />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ConstructionBrands />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <ToolsBrands />
      </motion.div>
      
      <motion.div variants={sectionVariants}>
        <GypsumBrands />
      </motion.div>
    </motion.div>
  )
}

export default Brands
