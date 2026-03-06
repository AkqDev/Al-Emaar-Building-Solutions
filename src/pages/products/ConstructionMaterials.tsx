import React from 'react';
import { ArrowRight } from 'lucide-react';

// Imports
import CementBoard from '../../assets/ConstructionMaterials/CementBoard.png';
import ConcreteBoard from '../../assets/ConstructionMaterials/ConcreteBoard.png';
import GeoTextile from '../../assets/ConstructionMaterials/GeoTextile.png';
import GypsumBoard from '../../assets/ConstructionMaterials/GypsumBoard.png';
import NylonRoll from '../../assets/ConstructionMaterials/NylonRoll.png';
import PlasticSheets from '../../assets/ConstructionMaterials/PlasticSheets.png';
import PolystyreneGreen from '../../assets/ConstructionMaterials/PolystyreneGreen.png';
import PolystyreneWhite from '../../assets/ConstructionMaterials/PolystyreneWhite.png';
import StealWire from '../../assets/ConstructionMaterials/StealWire.png';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  { id: 1, name: "Cement Board", description: "High-durability moisture resistant boards for exterior cladding.", image: CementBoard },
  { id: 2, name: "Concrete Board", description: "Heavy-duty structural boards for high-impact construction areas.", image: ConcreteBoard },
  { id: 3, name: "Geo Textile", description: "Permeable fabrics used for soil stabilization and filtration.", image: GeoTextile },
  { id: 4, name: "Gypsum Board", description: "Premium finish drywall for interior walls and ceilings.", image: GypsumBoard },
  { id: 5, name: "Nylon Roll", description: "Industrial grade nylon protection for construction sites.", image: NylonRoll },
  { id: 6, name: "Plastic Sheets", description: "Heavy-duty waterproof vapor barriers and coverings.", image: PlasticSheets },
  { id: 7, name: "Polystyrene Green", description: "High-density thermal insulation for energy-efficient building.", image: PolystyreneGreen },
  { id: 8, name: "Polystyrene White", description: "Lightweight expanded polystyrene for insulation and filling.", image: PolystyreneWhite },
  { id: 9, name: "Steel Wire", description: "High-tensile strength reinforcement wire for concrete works.", image: StealWire },
];

const ConstructionMaterials: React.FC = () => {
  const handleWhatsAppClick = (productName: string) => {
    const message = `I want to buy the ${productName} from Construction Materials`;
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
            Constructions
          <span className="text-[#6B5E18] !ml-2">Materials</span>
        </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Your trusted partner for premium construction materials. We provide high-quality 
          solutions engineered for durability and structural excellence.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-3xl p-8 transition-all duration-300 border border-gray-100 hover:shadow-xl group">
            
            {/* Image - Increased height and object-contain */}
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

export default ConstructionMaterials;