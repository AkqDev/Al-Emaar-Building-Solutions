import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaInstagram } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#233F90] text-white py-16 px-4 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo and Brand Name */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center mb-8"
        >
          <motion.img 
            src={logo} 
            alt="Al-Emaar Logo" 
            className="w-28 h-28 mb-3 object-contain drop-shadow-2xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          />
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Al-Emaar</h2>
          <motion.p 
            className="text-yellow-400 text-xl md:text-2xl font-black mt-1 tracking-wide italic"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Building Solutions
          </motion.p>
        </motion.div>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="max-w-4xl text-base md:text-lg text-gray-100 mb-12 leading-relaxed font-medium"
        >
          Al-Emaar Building Solutions is your trusted partner for premium construction materials and 
          building supplies. We provide comprehensive solutions for waterproofing, paints, adhesives, 
          electrical items, plumbing, safety products, and construction materials to meet all your 
          building needs with excellence and reliability.
        </motion.p>

        {/* Contact Section */}
        <div className="w-full">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="text-2xl md:text-3xl font-black text-yellow-400 mb-8 tracking-wide italic uppercase"
          >
            Get In Touch
          </motion.h3>
          
          <div className="flex flex-wrap justify-center gap-5 mb-12">
            {/* Address */}
            <motion.a 
              href="https://maps.google.com/maps?q=JDBB3313,%203313%20محمد%20بن%20حمدون,%207918,%20AR%20Rabwah%20District,%20Jeddah%2023533,%20Saudi%20Arabia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm justify-center px-5 py-3 rounded-xl min-w-[280px] hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg border border-white/20"
            >
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaMapMarkerAlt className="text-[#292A87] text-lg" />
              </div>
              <span className="text-sm font-semibold">King Fahad road - 23533 - Al rabwa dist. Jeddah - 3279 - 7913</span>
            </motion.a>

            {/* Phone */}
            <motion.a 
              href="tel:+966544837829"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm justify-center px-5 py-3 rounded-xl min-w-[280px] hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg border border-white/20"
            >
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaPhoneAlt className="text-[#292A87] text-lg" />
              </div>
              <span className="text-sm font-semibold">+966544837829</span>
            </motion.a>

            {/* Email */}
            <motion.a 
              href="mailto:Info@alemaralreeq.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm justify-center px-5 py-3 rounded-xl min-w-[280px] hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg border border-white/20"
            >
              <div className="bg-white p-3 rounded-full shadow-md">
                <FaEnvelope className="text-[#292A87] text-lg" />
              </div>
              <span className="text-sm font-semibold">Info@alemaralreeq.com</span>
            </motion.a>

            {/* WhatsApp */}
            <motion.a 
              href="https://wa.me/966544837829"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm justify-center px-5 py-3 rounded-xl min-w-[280px] hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg border border-white/20"
            >
              <div className="bg-white p-3 rounded-full shadow-md">
                <IoLogoWhatsapp className="text-[#292A87] text-lg" />
              </div>
              <span className="text-sm font-semibold">+966544837829</span>
            </motion.a>
          </div>
        </div>

        {/* Social Icons */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="flex gap-4 mb-8"
        >
          <motion.a 
            href="https://www.facebook.com/alemarbuildtech/" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-3 rounded-full text-blue-900 hover:bg-gray-200 transition-colors"
          >
            <FaFacebookF size={24} />
          </motion.a>
          <motion.a 
            href="https://www.instagram.com/alemarbuildtech" 
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-3 rounded-full text-blue-900 hover:bg-gray-200 transition-colors"
          >
            <FaInstagram size={24} />
          </motion.a>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
          className="w-full border-t border-white/30 pt-8"
        >
          <p className="text-sm md:text-base text-gray-200 font-medium">
            © 2026 Al-Emaar Building Solutions • Design and Developed by StackFlow Development Company • All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;