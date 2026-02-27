import React from 'react';
import { ArrowRight } from 'lucide-react';

// Imports
import ElectricFittings from '../../assets/ElectricalItems/ElectricFittings.png';
import PVCPipes from '../../assets/ElectricalItems/PVCPipes.png';
import Switches from '../../assets/ElectricalItems/Switches.png';
import ExhaustFan from '../../assets/ElectricalItems/ExhaustFan.png';
import BuildingWire from '../../assets/ElectricalItems/BuildingWire.png';

import Floodlight from '../../assets/ElectricalItems/Floodlight.png';
import HandheldLEDLight from '../../assets/ElectricalItems/HandheldLEDLight.png';
import LEDTBulb from '../../assets/ElectricalItems/LEDTBulb.png';
import LEDTubes from '../../assets/ElectricalItems/LEDTubes.png';
import LightFixture from '../../assets/ElectricalItems/LightFixture.png';
import MaintenanceKit from '../../assets/ElectricalItems/MaintenanceKit.png';
import MultiPlugAdapter from '../../assets/ElectricalItems/MultiPlugAdapter.png';
import OnCameraLED from '../../assets/ElectricalItems/OnCameraLED.png';
import OrientLEDBulb from '../../assets/ElectricalItems/OrientLEDBulb.png';
import SlimLED from '../../assets/ElectricalItems/SlimLED.png';


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  { 
    id: 1, 
    name: "Electric Fittings", 
    description: "Comprehensive range of industrial and domestic connectors, junction boxes, and mounting hardware.", 
    image: ElectricFittings 
  },
  { 
    id: 2, 
    name: "PVC Electrical Pipes", 
    description: "High-insulation, flame-retardant conduit pipes for safe and organized cable management.", 
    image: PVCPipes 
  },
  { 
    id: 3, 
    name: "Switches & Accessories", 
    description: "Modern, ergonomic switchboards and modular accessories designed for durability and aesthetic appeal.", 
    image: Switches 
  },
  { 
    id: 4, 
    name: "Exhaust Fan", 
    description: "High-performance ventilation fans for efficient air circulation and moisture control in bathrooms and kitchens.", 
    image: ExhaustFan 
  },
  { 
    id: 5, 
    name: "Building Wire", 
    description: "Premium quality electrical wiring cables with superior conductivity and insulation for safe power distribution.", 
    image: BuildingWire 
  },
  { 
    id: 6, 
    name: "LED Floodlight", 
    description: "Powerful outdoor lighting solution with energy-efficient LED technology for security and landscape illumination.", 
    image: Floodlight 
  },
  { 
    id: 7, 
    name: "Handheld LED Light", 
    description: "Portable rechargeable LED work light perfect for maintenance, inspection, and emergency lighting needs.", 
    image: HandheldLEDLight 
  },
  { 
    id: 8, 
    name: "LED Bulb", 
    description: "Energy-saving LED bulbs with long lifespan and bright illumination for residential and commercial spaces.", 
    image: LEDTBulb 
  },
  { 
    id: 9, 
    name: "LED Tubes", 
    description: "Efficient tubular LED lights ideal for offices, warehouses, and industrial facilities with instant brightness.", 
    image: LEDTubes 
  },
  { 
    id: 10, 
    name: "Light Fixture", 
    description: "Stylish and functional lighting fixtures designed to enhance ambiance while providing optimal illumination.", 
    image: LightFixture 
  },
  { 
    id: 11, 
    name: "Maintenance Kit", 
    description: "Complete electrical maintenance toolkit with essential tools and accessories for repairs and installations.", 
    image: MaintenanceKit 
  },
  { 
    id: 12, 
    name: "Multi-Plug Adapter", 
    description: "Versatile power extension with multiple outlets and surge protection for safe connection of multiple devices.", 
    image: MultiPlugAdapter 
  },
  { 
    id: 13, 
    name: "On-Camera LED Light", 
    description: "Professional portable LED panel light for photography, videography, and content creation with adjustable brightness.", 
    image: OnCameraLED 
  },
  { 
    id: 14, 
    name: "Orient LED Bulb", 
    description: "Premium Orient brand LED bulbs offering superior brightness, energy efficiency, and extended durability.", 
    image: OrientLEDBulb 
  },
  { 
    id: 15, 
    name: "Slim LED Panel", 
    description: "Ultra-thin LED panel lights with uniform illumination, perfect for modern ceiling installations and false ceilings.", 
    image: SlimLED 
  },
];

const ElectricalItems: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-6 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
          {/* Heading Section */}
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
            Electrical
            <span className="text-[#6B5E18] !ml-2">Items</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Reliable electrical components and high-safety conduit systems engineered to 
          power and protect your residential and commercial projects.
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

export default ElectricalItems;