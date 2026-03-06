import React from 'react';
import { ArrowRight } from 'lucide-react';

// Imports
import EpoxyFlooring from '../../assets/WaterProofingItems/EpoxyFlooring.png';
import EpoxyWater from '../../assets/WaterProofingItems/EpoxyWater.png';
import JointSealant from '../../assets/WaterProofingItems/JointSealant.png';
import MembraneRoll from '../../assets/WaterProofingItems/MembraneRoll.png';
import RepairPowder from '../../assets/WaterProofingItems/RepairPowder.png';
import RepairPutty from '../../assets/WaterProofingItems/RepairPutty.png';
import TileAdhesive from '../../assets/WaterProofingItems/TileAdhesive.png';
import TileChemicals from '../../assets/WaterProofingItems/TileChemicals.png';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  { 
    id: 1, 
    name: "Epoxy (Flooring & Wall)", 
    description: "High-performance seamless coating for industrial and decorative surfaces.", 
    image: EpoxyFlooring 
  },
  { 
    id: 2, 
    name: "Epoxy Water Tank Coating", 
    description: "Food-grade certified protection for hygienic water storage solutions.", 
    image: EpoxyWater 
  },
  { 
    id: 3, 
    name: "Joint Sealant", 
    description: "Flexible expansion joint fillers to prevent water ingress and structural gaps.", 
    image: JointSealant 
  },
  { 
    id: 4, 
    name: "Waterproof Membrane Roll", 
    description: "Heavy-duty bituminous or synthetic rolls for roof and basement protection.", 
    image: MembraneRoll 
  },
  { 
    id: 5, 
    name: "Repair Powder", 
    description: "Fast-setting cementitious powder for structural repairs and crack filling.", 
    image: RepairPowder 
  },
  { 
    id: 6, 
    name: "Repair Putty", 
    description: "Smooth application putty for surface leveling and minor masonry repairs.", 
    image: RepairPutty 
  },
  { 
    id: 7, 
    name: "Tile Adhesive", 
    description: "Strong-bond polymer modified adhesive for all types of ceramic and stone.", 
    image: TileAdhesive 
  },
  { 
    id: 8, 
    name: "Ceramic & Tile Chemicals", 
    description: "Specialized grouts and cleaners to enhance tile durability and aesthetics.", 
    image: TileChemicals 
  },
];

const WaterProofingItems: React.FC = () => {
  const handleWhatsAppClick = (productName: string) => {
    const message = `I want to buy the ${productName} from WaterProofing & Chemicals`;
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
            WaterProofing &
            <span className="text-[#6B5E18] !ml-2">Chemicals Items</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Advanced chemical solutions and waterproofing systems designed to protect 
          your structures from water damage and environmental wear.
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

export default WaterProofingItems;