import React from 'react';
import { ArrowRight } from 'lucide-react';

// Imports
import Porta1 from '../../assets/PortaCabins/porta1.png';
import Porta2 from '../../assets/PortaCabins/porta2.png';
import Porta3 from '../../assets/PortaCabins/porta3.png';
import Porta4 from '../../assets/PortaCabins/porta4.png';
import Porta5 from '../../assets/PortaCabins/porta5.png';
import Porta6 from '../../assets/PortaCabins/porta6.png';
import Porta7 from '../../assets/PortaCabins/porta7.png';
import Porta8 from '../../assets/PortaCabins/porta8.png';
import Porta9 from '../../assets/PortaCabins/porta9.png';
import Porta10 from '../../assets/PortaCabins/porta10.png';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  { 
    id: 1, 
    name: "Portable Power Generator (CAT XQP30)", 
    description: "Heavy-duty Caterpillar diesel generator providing reliable backup power for construction sites, events, and emergency applications with fuel-efficient operation.", 
    image: Porta1 
  },
  { 
    id: 2, 
    name: "Industrial Storage Tanks", 
    description: "Large-capacity steel storage tanks for water, fuel, or chemicals with corrosion-resistant coating and secure mounting systems for industrial use.", 
    image: Porta2 
  },
  { 
    id: 3, 
    name: "Container Café/Kiosk", 
    description: "Converted shipping container designed as a mobile café or retail kiosk with serving windows, electrical setup, and modern interior finishes.", 
    image: Porta3 
  },
  { 
    id: 4, 
    name: "Container Workshop/Storage Shed", 
    description: "Robust container-based workshop with tool storage, workbench space, and ventilation ideal for construction sites and maintenance operations.", 
    image: Porta4 
  },
  { 
    id: 5, 
    name: "Container Office", 
    description: "Fully equipped portable office container with insulation, electrical wiring, windows, and door ready for immediate site management use.", 
    image: Porta5 
  },
  { 
    id: 6, 
    name: "Multi-Compartment Portable Building", 
    description: "Spacious modular structure with multiple rooms for offices, meeting areas, or accommodation with climate control and modern amenities.", 
    image: Porta6 
  },
  { 
    id: 7, 
    name: "Basic Site Cabin", 
    description: "Simple and economical portable cabin for temporary site offices, storage, or worker rest areas with basic weather protection.", 
    image: Porta7 
  },
  { 
    id: 8, 
    name: "Portable Security Cabin (Guard Room)", 
    description: "Compact security guard cabin with panoramic windows for visibility, climate control, and comfortable seating for 24/7 monitoring stations.", 
    image: Porta8 
  },
  { 
    id: 9, 
    name: "Modular Prefab Office Complex", 
    description: "Large-scale modular office building with multiple units, conference rooms, and administrative spaces for major construction projects or corporate sites.", 
    image: Porta9 
  },
  { 
    id: 10, 
    name: "Prefab Cabin Chassis/Frame", 
    description: "Structural steel frame and chassis foundation for custom porta cabin construction with reinforced support and transportation-ready design.", 
    image: Porta10 
  },
];

const PotaCabins: React.FC = () => {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-6 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
          {/* Heading Section */}
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
            Porta
            <span className="text-[#6B5E18] !ml-2">Cabins</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          High-quality portable cabins for construction sites, offices, and temporary facilities 
          with customizable designs and rapid installation.
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

export default PotaCabins;
