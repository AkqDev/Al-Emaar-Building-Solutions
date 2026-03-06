import React from 'react';
import { ArrowRight } from 'lucide-react';

// Added .jpeg extensions to imports
import Safety1 from '../../assets/SafetyProducts/safety1.jpeg';
import Safety2 from '../../assets/SafetyProducts/safety2.jpeg';
import Safety3 from '../../assets/SafetyProducts/safety3.jpeg';
import Safety4 from '../../assets/SafetyProducts/safety4.jpeg';
import Safety5 from '../../assets/SafetyProducts/safety5.jpeg';
import Safety6 from '../../assets/SafetyProducts/safety6.jpeg';
import Safety7 from '../../assets/SafetyProducts/safety7.jpeg';
import Safety8 from '../../assets/SafetyProducts/safety8.jpeg';
import Safety9 from '../../assets/SafetyProducts/safety9.jpeg';
import Safety10 from '../../assets/SafetyProducts/safety10.jpeg';
import Safety11 from '../../assets/SafetyProducts/safety11.jpeg';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string; // This will hold the imported variable
}

const products: Product[] = [
  { 
    id: 1, 
    name: "Safety Equipment Set", 
    description: "Complete personal protective equipment set including an orange hard hat, safety boots, gloves, ear muffs, and goggles for comprehensive worker protection.", 
    image: Safety1 // Using the imported variable instead of a string
  },
  { 
    id: 2, 
    name: "Safety Sports Shoes", 
    description: "Modern athletic-style safety footwear featuring steel toes, slip-resistant yellow-accented soles, and breathable materials for industrial comfort.", 
    image: Safety2 
  },
  { 
    id: 3, 
    name: "High-Visibility Safety Vests", 
    description: "Fluorescent lime and orange safety vests equipped with silver reflective strips to ensure maximum visibility in high-traffic or low-light work zones.", 
    image: Safety3 
  },
  { 
    id: 4, 
    name: "Yellow Industrial Hard Hat", 
    description: "High-density impact-resistant safety helmet with a ventilated top and adjustable suspension system for protection against falling debris.", 
    image: Safety4 
  },
  { 
    id: 5, 
    name: "Tactical Safety Goggles", 
    description: "Advanced wrap-around safety eyewear with yellow-tinted anti-glare lenses, rugged black frames, and a wide field of vision for eye protection.", 
    image: Safety5 
  },
  { 
    id: 6, 
    name: "PPE Equipment Icons", 
    description: "A graphic collection of essential safety gear including noise-canceling ear muffs, dotted grip gloves, protective goggles, a respirator mask, and a hard hat.", 
    image: Safety6 
  },
  { 
    id: 7, 
    name: "Foam Fire Extinguisher", 
    description: "6 Litre AFFF Foam fire extinguisher designed specifically for Class A and B fires, featuring a clear pressure gauge and discharge hose.", 
    image: Safety7 
  },
  { 
    id: 8, 
    name: "Dry Powder Fire Extinguishers", 
    description: "Bulk set of ABC dry powder fire extinguishers, suitable for tackling wood, liquid, and electrical fires in industrial settings.", 
    image: Safety8 
  },
  { 
    id: 9, 
    name: "Organized Professional Tool Box", 
    description: "Multi-tier cantilever tool box featuring custom-fit compartments for wrenches, screwdrivers, and pliers to ensure efficient tool management.", 
    image: Safety9 
  },
  { 
    id: 10, 
    name: "Hard Hat and Essential Tools", 
    description: "An illustrative set combining a yellow safety helmet with various hand tools like a drill, saw, hammer, and level for general construction work.", 
    image: Safety10 
  },
  { 
    id: 11, 
    name: "Traffic Cones", 
    description: "Bright orange traffic safety cones with white reflective collars for marking hazardous areas, directing traffic flow, and creating safe work zones.", 
    image: Safety11 
  }
];

const SafetyProducts: React.FC = () => {
  const handleWhatsAppClick = (productName: string) => {
    const message = `I want to buy the ${productName} from Safety Products`;
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
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
            Safety
            <span className="text-[#6B5E18] !ml-2">Products</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Professional safety equipment and protective gear ensuring worker safety and compliance 
          with industry standards on construction sites and industrial facilities.
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

export default SafetyProducts;