import React from 'react';
import { ArrowRight } from 'lucide-react';

// Imports
import BidetSprayer from '../../assets/PlumbingItems/BidetSprayer.png';
import LadderMulti from '../../assets/PlumbingItems/LadderMulti.png';
import PVCBundled from '../../assets/PlumbingItems/PVCBundled.png';
import PVCStack from '../../assets/PlumbingItems/PVCStack.png';
import ShowerRound from '../../assets/PlumbingItems/ShowerRound.png';
import ShowerSquare from '../../assets/PlumbingItems/ShowerSquare.png';
import SteelPipes from '../../assets/PlumbingItems/SteelPipes.png';
import SteelSink from '../../assets/PlumbingItems/SteelSink.png';


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  { 
    id: 1, 
    name: "Bidet Sprayer", 
    description: "Modern handheld bidet spray with adjustable water pressure for enhanced bathroom hygiene and comfort.", 
    image: BidetSprayer 
  },
  { 
    id: 2, 
    name: "Multi-Purpose Ladder", 
    description: "Versatile aluminum ladder with multiple configurations for plumbing installations and maintenance work.", 
    image: LadderMulti 
  },
  { 
    id: 3, 
    name: "PVC Pipe Bundle", 
    description: "High-quality bundled PVC pipes for water supply and drainage systems with excellent durability.", 
    image: PVCBundled 
  },
  { 
    id: 4, 
    name: "PVC Pipe Stack", 
    description: "Premium PVC pipes in various sizes for residential and commercial plumbing applications.", 
    image: PVCStack 
  },
  { 
    id: 5, 
    name: "Round Shower Head", 
    description: "Elegant round shower head with wide spray coverage for a luxurious bathing experience.", 
    image: ShowerRound 
  },
  { 
    id: 6, 
    name: "Square Shower Head", 
    description: "Contemporary square shower head design with rainfall effect for modern bathroom aesthetics.", 
    image: ShowerSquare 
  },
  { 
    id: 7, 
    name: "Steel Pipes", 
    description: "Heavy-duty galvanized steel pipes for high-pressure water lines and industrial plumbing systems.", 
    image: SteelPipes 
  },
  { 
    id: 8, 
    name: "Stainless Steel Sink", 
    description: "Durable stainless steel kitchen sink with corrosion resistance and easy-to-clean surface finish.", 
    image: SteelSink 
  },
];

const PlumbingItems: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-6 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
          {/* Heading Section */}
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
            Plumbing
            <span className="text-[#6B5E18] !ml-2">Items</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Premium plumbing solutions including pipes, fittings, and fixtures for efficient 
          water supply and drainage systems in residential and commercial projects.
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
              
              <button className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100 hover:bg-black hover:text-white transition-all active:scale-95 group/btn flex-shrink-0 mt-1">
                <ArrowRight size={24} strokeWidth={2.5} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlumbingItems;