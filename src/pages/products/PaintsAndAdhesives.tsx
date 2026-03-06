import React from 'react';
import { ArrowRight } from 'lucide-react';

// Imports
import EnamelPaint from '../../assets/PaintsItems/EnamelPaint.png';
import EpoxyPaint from '../../assets/PaintsItems/EpoxyPaint.png';
import WallPutty from '../../assets/PaintsItems/WallPutty.png';
import WaterBasePaint from '../../assets/PaintsItems/WaterBasePaint.png';
import waterproofPaint from '../../assets/PaintsItems/waterproofPaint.png';
import WeatherCoat from '../../assets/PaintsItems/WeatherCoat.png';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  { 
    id: 1, 
    name: "Enamel Paint", 
    description: "High-gloss, durable oil-based coating perfect for metal and wood surfaces.", 
    image: EnamelPaint 
  },
  { 
    id: 2, 
    name: "Water-Base Paint", 
    description: "Eco-friendly, quick-drying interior emulsion for a smooth and vibrant finish.", 
    image: WaterBasePaint 
  },
  { 
    id: 3, 
    name: "Weather Coat", 
    description: "Advanced exterior protection against UV rays, heavy rain, and dust accumulation.", 
    image: WeatherCoat 
  },
  { 
    id: 4, 
    name: "Epoxy Paint", 
    description: "Tough, industrial-grade floor coating resistant to chemicals and heavy traffic.", 
    image: EpoxyPaint 
  },
  { 
    id: 5, 
    name: "Wall Putty (Gypsum & Normal)", 
    description: "Premium base coat to fill pores and create a perfectly level surface for painting.", 
    image: WallPutty 
  },
  { 
    id: 6, 
    name: "Synthetic Waterproof Paint", 
    description: "Specialized moisture-resistant formula to prevent dampness and fungal growth.", 
    image: waterproofPaint 
  },
];

const PaintsAndAdhesives: React.FC = () => {
  const handleWhatsAppClick = (productName: string) => {
    const message = `I want to buy the ${productName} from Paints & Adhesives`;
    const whatsappNumber = '966544837829';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-6 font-[Poppins]">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
          {/* Heading Section */}
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
            Paints &
            <span className="text-[#6B5E18] !ml-2">Adhesives Items</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Enhance and protect your surfaces with our premium range of decorative paints 
          and high-strength bonding adhesives tailored for every environment.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-8 transition-all duration-300 border border-gray-100 hover:shadow-xl group">
            
            {/* Image */}
            <div className="h-64 flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-[#f9f9f9]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" 
              />
            </div>

            {/* Content Row */}
            <div className="flex justify-between items-start pt-4 border-t border-gray-100">
              <div className="flex-1 mr-4">
                <h3 className="text-xl text-gray-900 font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 leading-snug">
                  {product.description}
                </p>
              </div>
              
              <button 
                onClick={() => handleWhatsAppClick(product.name)}
                className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100 hover:bg-black hover:text-white transition-all active:scale-95 group/btn flex-shrink-0 mt-1"
              >
                <ArrowRight size={24} strokeWidth={2.5} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaintsAndAdhesives;