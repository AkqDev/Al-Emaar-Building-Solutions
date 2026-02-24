import React from 'react';
import { ArrowRight } from 'lucide-react';

// Imports
import Cutter from '../../assets/ToolsAndEquipments/Cutter.png';
import DrillMachines from '../../assets/ToolsAndEquipments/DrillMachines.png';
import Grinder from '../../assets/ToolsAndEquipments/Grinder.png';
import HandTools from '../../assets/ToolsAndEquipments/HandTools.png';
import PowerTools from '../../assets/ToolsAndEquipments/PowerTools.png';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  { 
    id: 1, 
    name: "Hand Tools", 
    description: "Essential precision tools including wrenches, hammers, and screwdrivers for everyday manual tasks.", 
    image: HandTools 
  },
  { 
    id: 2, 
    name: "Power Tools", 
    description: "High-performance electric equipment designed to increase efficiency and precision on the job site.", 
    image: PowerTools 
  },
  { 
    id: 3, 
    name: "Drill Machines", 
    description: "Versatile impact and rotary drills capable of penetrating concrete, metal, and wood with ease.", 
    image: DrillMachines 
  },
  { 
    id: 4, 
    name: "Grinders", 
    description: "Heavy-duty angle grinders for professional cutting, grinding, and polishing applications.", 
    image: Grinder 
  },
  { 
    id: 5, 
    name: "Cutters", 
    description: "Industrial-strength cutting tools for precise sizing of tiles, metal rods, and masonry materials.", 
    image: Cutter 
  },
];

const ToolsAndEquipments: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-6 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
          {/* Heading Section */}
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
            Tools And
            <span className="text-[#6B5E18] !ml-2">Equipments</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Equip your projects with professional-grade machinery and precision hand tools 
          engineered for maximum durability and peak performance.
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

export default ToolsAndEquipments;