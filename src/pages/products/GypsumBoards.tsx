import React from 'react';
import { ArrowRight } from 'lucide-react';
import gypsumImg from '../../assets/gypsum.png';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Gypsum Board Products
const products: Product[] = [
  { id: 1, name: "5 cm Gypsum Board – Thickness 0.40", description: "Lightweight gypsum board with 0.40mm thickness, ideal for standard wall and ceiling applications.", image: gypsumImg },
  { id: 2, name: "5 cm Gypsum Board – Thickness 0.41", description: "Durable gypsum board with 0.41mm thickness, perfect for interior partitions and drywall systems.", image: gypsumImg },
  { id: 3, name: "5 cm Gypsum Board – Thickness 0.42", description: "High-quality gypsum board with 0.42mm thickness, suitable for residential and commercial projects.", image: gypsumImg },
  { id: 4, name: "5 cm Gypsum Board – Thickness 0.43", description: "Premium gypsum board with 0.43mm thickness, offering excellent fire resistance and sound insulation.", image: gypsumImg },
  { id: 5, name: "5 cm Gypsum Board – Thickness 0.44", description: "Versatile gypsum board with 0.44mm thickness, designed for smooth finishing and easy installation.", image: gypsumImg },
  { id: 6, name: "5 cm Gypsum Board – Thickness 0.45", description: "Standard gypsum board with 0.45mm thickness, ideal for creating seamless walls and ceilings.", image: gypsumImg },
  { id: 7, name: "5 cm Gypsum Board – Thickness 0.46", description: "Reliable gypsum board with 0.46mm thickness, providing superior strength and durability.", image: gypsumImg },
  { id: 8, name: "5 cm Gypsum Board – Thickness 0.47", description: "Professional-grade gypsum board with 0.47mm thickness, perfect for high-traffic areas.", image: gypsumImg },
  { id: 9, name: "5 cm Gypsum Board – Thickness 0.48", description: "Moisture-resistant gypsum board with 0.48mm thickness, suitable for humid environments.", image: gypsumImg },
  { id: 10, name: "5 cm Gypsum Board – Thickness 0.49", description: "Heavy-duty gypsum board with 0.49mm thickness, offering enhanced impact resistance.", image: gypsumImg },
  { id: 11, name: "5 cm Gypsum Board – Thickness 0.50", description: "Standard gypsum board with 0.50mm thickness, ideal for general construction applications.", image: gypsumImg },
  { id: 12, name: "5 cm Gypsum Board – Thickness 0.51", description: "Fire-rated gypsum board with 0.51mm thickness, meeting strict safety standards.", image: gypsumImg },
  { id: 13, name: "5 cm Gypsum Board – Thickness 0.52", description: "Acoustic gypsum board with 0.52mm thickness, providing excellent sound dampening properties.", image: gypsumImg },
  { id: 14, name: "5 cm Gypsum Board – Thickness 0.53", description: "Premium gypsum board with 0.53mm thickness, designed for superior finish quality.", image: gypsumImg },
  { id: 15, name: "5 cm Gypsum Board – Thickness 0.54", description: "Reinforced gypsum board with 0.54mm thickness, offering maximum structural integrity.", image: gypsumImg },
  { id: 16, name: "5 cm Gypsum Board – Thickness 0.55", description: "Commercial-grade gypsum board with 0.55mm thickness, perfect for large-scale projects.", image: gypsumImg },
  { id: 17, name: "5 cm Gypsum Board – Thickness 0.56", description: "High-performance gypsum board with 0.56mm thickness, resistant to sagging and warping.", image: gypsumImg },
  { id: 18, name: "5 cm Gypsum Board – Thickness 0.57", description: "Industrial gypsum board with 0.57mm thickness, built for demanding applications.", image: gypsumImg },
  { id: 19, name: "5 cm Gypsum Board – Thickness 0.58", description: "Extra-strong gypsum board with 0.58mm thickness, ideal for heavy-duty installations.", image: gypsumImg },
  { id: 20, name: "5 cm Gypsum Board – Thickness 0.59", description: "Professional gypsum board with 0.59mm thickness, ensuring long-lasting performance.", image: gypsumImg },
  { id: 21, name: "5 cm Gypsum Board – Thickness 0.60", description: "Thick gypsum board with 0.60mm thickness, providing superior insulation and strength.", image: gypsumImg },
  { id: 22, name: "5 cm Gypsum Board – Thickness 0.61", description: "Heavy-duty gypsum board with 0.61mm thickness, perfect for commercial buildings.", image: gypsumImg },
  { id: 23, name: "5 cm Gypsum Board – Thickness 0.62", description: "Ultra-strong gypsum board with 0.62mm thickness, designed for maximum durability.", image: gypsumImg },
  { id: 24, name: "5 cm Gypsum Board – Thickness 0.64", description: "Extra-thick gypsum board with 0.64mm thickness, ideal for specialized construction needs.", image: gypsumImg },
];

const GypsumBoards: React.FC = () => {
  const handleWhatsAppClick = (productName: string) => {
    const message = `I want to buy the ${productName} from Gypsum Boards`;
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
          <div key={product.id} className="bg-white rounded-3xl p-8 transition-all duration-300 border border-gray-100 hover:shadow-xl group">
            <div className="h-64 flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-[#f9f9f9]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-start pt-4 border-t border-gray-100">
              <div className="flex-1 mr-4">
                <h3 className="text-xl text-gray-900 font-bold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 leading-snug">{product.description}</p>
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

export default GypsumBoards;