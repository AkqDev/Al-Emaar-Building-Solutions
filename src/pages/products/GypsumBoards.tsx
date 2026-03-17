import React, { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import MadaProducts from '../../data/mada';
import KhayaatProducts from '../../data/khayaat';
import gypsumImg from '../../assets/gypsum.png';

import IntroGypsumItems from '../../components/IntroGypsumItems'
interface Product {
  id: number;
  name: string;
  description: string;
  productImg: string;
}

interface ThicknessOption {
  thickness: string;
  description: string;
}

// Thickness options for gypsum boards
const thicknessOptions: ThicknessOption[] = [
  { thickness: "0.40", description: "Lightweight, ideal for standard applications" },
  { thickness: "0.41", description: "Durable, perfect for interior partitions" },
  { thickness: "0.42", description: "High-quality for residential projects" },
  { thickness: "0.43", description: "Premium with fire resistance" },
  { thickness: "0.44", description: "Versatile for smooth finishing" },
  { thickness: "0.45", description: "Standard for seamless walls" },
  { thickness: "0.46", description: "Reliable with superior strength" },
  { thickness: "0.47", description: "Professional-grade for high-traffic areas" },
  { thickness: "0.48", description: "Moisture-resistant for humid environments" },
  { thickness: "0.49", description: "Heavy-duty with impact resistance" },
  { thickness: "0.50", description: "Standard for general construction" },
  { thickness: "0.51", description: "Fire-rated meeting safety standards" },
  { thickness: "0.52", description: "Acoustic with sound dampening" },
  { thickness: "0.53", description: "Premium for superior finish" },
  { thickness: "0.54", description: "Reinforced with structural integrity" },
  { thickness: "0.55", description: "Commercial-grade for large projects" },
  { thickness: "0.56", description: "High-performance, sag-resistant" },
  { thickness: "0.57", description: "Industrial for demanding applications" },
  { thickness: "0.58", description: "Extra-strong for heavy-duty use" },
  { thickness: "0.59", description: "Professional with lasting performance" },
  { thickness: "0.60", description: "Thick with superior insulation" },
  { thickness: "0.61", description: "Heavy-duty for commercial buildings" },
  { thickness: "0.62", description: "Ultra-strong for maximum durability" },
  { thickness: "0.64", description: "Extra-thick for specialized needs" },
];

// Single gypsum board product with thickness options
const gypsumBoardProduct: Product = {
  id: 100,
  name: "5 cm Gypsum Board – Various Thicknesses",
  description: "High-quality gypsum boards available in multiple thicknesses from 0.40mm to 0.64mm for walls, ceilings, and partitions.",
  productImg: gypsumImg
};

// Combine all products: Mada, Khayaat, and gypsum board with thickness options
const products: Product[] = [...MadaProducts, ...KhayaatProducts, gypsumBoardProduct];

const GypsumBoards: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleWhatsAppClick = (productName: string, thickness?: string) => {
    const fullProductName = thickness 
      ? `${productName} - Thickness ${thickness}mm` 
      : productName;
    const message = `I want to buy the ${fullProductName} from Gypsum Boards`;
    const whatsappNumber = '966544837829';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleDropdown = (productId: number) => {
    setOpenDropdown(openDropdown === productId ? null : productId);
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-6 font-[Poppins]">
      <IntroGypsumItems/>
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
            Gypsum
            <span className="text-[#6B5E18] !ml-2">Boards</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          High-quality gypsum boards in various thicknesses for walls, ceilings, and partitions.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-8 transition-all duration-300 border border-gray-100 hover:shadow-xl group relative">
            <div className="h-64 flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-[#f9f9f9]">
              <img
                src={product.productImg}
                alt={product.name}
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-gray-100">
              <div className="flex-1 mr-4">
                <h3 className="text-xl text-gray-900 font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 leading-snug">{product.description}</p>
              </div>
              
              {/* Show dropdown button only for gypsum board with thickness options */}
              {product.id === 100 ? (
                <button
                  onClick={() => toggleDropdown(product.id)}
                  className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100 hover:bg-black hover:text-white transition-all active:scale-95 group/btn flex-shrink-0 mt-1"
                >
                  <ChevronDown 
                    size={24} 
                    strokeWidth={2.5} 
                    className={`transition-transform ${openDropdown === product.id ? 'rotate-180' : ''}`} 
                  />
                </button>
              ) : (
                <button
                  onClick={() => handleWhatsAppClick(product.name)}
                  className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100 hover:bg-black hover:text-white transition-all active:scale-95 group/btn flex-shrink-0 mt-1"
                >
                  <ArrowRight size={24} strokeWidth={2.5} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              )}
            </div>

            {/* Dropdown for thickness options */}
            {product.id === 100 && openDropdown === product.id && (
              <div className="mt-4 bg-gray-50 rounded-2xl p-4 max-h-96 overflow-y-auto border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 mb-3">Select Thickness:</p>
                <div className="space-y-2">
                  {thicknessOptions.map((option, index) => (
                    <div 
                      key={index}
                      className="flex items-center justify-between p-3 bg-white rounded-xl hover:bg-gray-100 transition-all cursor-pointer border border-gray-100"
                      onClick={() => handleWhatsAppClick(product.name, option.thickness)}
                    >
                      <div className="flex-1">
                        <p className="text-sm font-bold text-gray-900">{option.thickness}mm</p>
                        <p className="text-xs text-gray-500">{option.description}</p>
                      </div>
                      <ArrowRight size={18} className="text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GypsumBoards;
