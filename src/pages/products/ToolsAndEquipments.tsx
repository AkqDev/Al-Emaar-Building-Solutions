import React from 'react';
import { ArrowRight } from 'lucide-react';

// Imports
import CordlessDrill from '../../assets/ToolsAndEquipments/CordlessDrill.png';
import Cutter from '../../assets/ToolsAndEquipments/Cutter.png';
import DiamondDisc from '../../assets/ToolsAndEquipments/DiamondDisc.png';
import DoorKnobYale from '../../assets/ToolsAndEquipments/DoorKnobYale.png';
import DrillMachines from '../../assets/ToolsAndEquipments/DrillMachines.png';
import ElectricRimLock from '../../assets/ToolsAndEquipments/ElectricRimLock.png';
import Grinder from '../../assets/ToolsAndEquipments/Grinder.png';
import HandTools from '../../assets/ToolsAndEquipments/HandTools.png';
import LockCylinders from '../../assets/ToolsAndEquipments/LockCylinders.png';
import MakitaBlades from '../../assets/ToolsAndEquipments/MakitaBlades.png';
import MetalDisc from '../../assets/ToolsAndEquipments/MetalDisc.png';
import MultiTool from '../../assets/ToolsAndEquipments/MultiTool.png';
import PliersTata from '../../assets/ToolsAndEquipments/PliersTata.png';
import PowerTools from '../../assets/ToolsAndEquipments/PowerTools.png';
import TapeMeasure from '../../assets/ToolsAndEquipments/TapeMeasure.png';
import ToolKit from '../../assets/ToolsAndEquipments/ToolKit.png';
import WrenchAdj from '../../assets/ToolsAndEquipments/WrenchAdj.png';

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
  { 
    id: 6, 
    name: "Cordless Drill", 
    description: "Portable battery-powered drill with variable speed control for convenient drilling and fastening tasks.", 
    image: CordlessDrill 
  },
  { 
    id: 7, 
    name: "Diamond Cutting Disc", 
    description: "Premium diamond-tipped cutting discs for precise cutting of concrete, stone, and ceramic materials.", 
    image: DiamondDisc 
  },
  { 
    id: 8, 
    name: "Yale Door Knob", 
    description: "High-security Yale brand door knobs with durable construction and smooth locking mechanism.", 
    image: DoorKnobYale 
  },
  { 
    id: 9, 
    name: "Electric Rim Lock", 
    description: "Electronic rim lock system with remote access control for enhanced security and convenience.", 
    image: ElectricRimLock 
  },
  { 
    id: 10, 
    name: "Lock Cylinders", 
    description: "Replacement lock cylinders with anti-pick technology for doors, cabinets, and security applications.", 
    image: LockCylinders 
  },
  { 
    id: 11, 
    name: "Makita Saw Blades", 
    description: "Professional-grade Makita cutting blades with carbide tips for clean cuts in wood and metal.", 
    image: MakitaBlades 
  },
  { 
    id: 12, 
    name: "Metal Cutting Disc", 
    description: "Reinforced abrasive discs designed for fast and safe cutting of steel, iron, and metal pipes.", 
    image: MetalDisc 
  },
  { 
    id: 13, 
    name: "Multi-Tool", 
    description: "Versatile oscillating multi-tool for sanding, cutting, scraping, and grinding in tight spaces.", 
    image: MultiTool 
  },
  { 
    id: 14, 
    name: "Tata Pliers", 
    description: "Heavy-duty Tata brand pliers with ergonomic grip for cutting, gripping, and bending wire and cables.", 
    image: PliersTata 
  },
  { 
    id: 15, 
    name: "Tape Measure", 
    description: "Retractable measuring tape with clear markings and durable casing for accurate measurements.", 
    image: TapeMeasure 
  },
  { 
    id: 16, 
    name: "Tool Kit", 
    description: "Complete tool kit with organized storage case containing essential tools for repairs and installations.", 
    image: ToolKit 
  },
  { 
    id: 17, 
    name: "Adjustable Wrench", 
    description: "Chrome-plated adjustable wrench with wide jaw capacity for tightening and loosening various bolt sizes.", 
    image: WrenchAdj 
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