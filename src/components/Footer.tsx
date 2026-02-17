import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-white py-12 px-4 font-poppins">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo and Brand Name */}
        <div className="flex flex-col items-center mb-6">
          <img src={logo} alt="Al-Emaar Logo" className="w-25 h-25 mb-2 object-contain" />
          <h2 className="text-2xl md:text-3xl font-medium">Al-Emaar</h2>
          <p className="text-yellow-500 text-xl font-semibold">Building Solutions</p>
        </div>

        {/* Description */}
        <p className="max-w-3xl text-sm text-gray-200 mb-10">
          Al-Emaar Building Solutions is your trusted partner for premium construction materials and 
          building supplies. We provide comprehensive solutions for waterproofing, paints, adhesives, 
          electrical items, plumbing, safety products, and construction materials to meet all your 
          building needs with excellence and reliability.
        </p>

        {/* Contact Section */}
        <div className="w-full">
          <h3 className="text-xl font-semibold text-yellow-500 mb-6">Get In Touch</h3>
          
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {/* Address */}
            <div className="flex items-center gap-3 bg-white/10 justify-center px-4 py-2 rounded-md min-w-[240px]">
              <div className="bg-yellow-600 p-2 rounded-full">
                <FaMapMarkerAlt className="text-white" />
              </div>
              <span className="text-sm font-medium">London Eye, London UK</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 bg-white/10 justify-center px-4 py-2 rounded-md min-w-[240px]">
              <div className="bg-yellow-600 p-2 rounded-full">
                <FaPhoneAlt className="text-white" />
              </div>
              <span className="text-sm font-medium">088-777-666-85</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 bg-white/10 justify-center px-4 py-2 rounded-md min-w-[240px]">
              <div className="bg-yellow-600 p-2 rounded-full">
                <FaEnvelope className="text-white" />
              </div>
              <span className="text-sm font-medium">contact@alemaar.com</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mb-8">
          <a href="#" className="bg-white p-2 rounded-full text-blue-900 hover:bg-gray-200 transition-colors">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="bg-white p-2 rounded-full text-blue-900 hover:bg-gray-200 transition-colors">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="bg-white p-2 rounded-full text-blue-900 hover:bg-gray-200 transition-colors">
            <FaYoutube size={18} />
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="w-full border-t border-white/20 pt-6">
          <p className="text-xs text-gray-300">
            © 2026 Al-Emaar Building Solutions • Design and Developed by StackFlow Development Company • All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;