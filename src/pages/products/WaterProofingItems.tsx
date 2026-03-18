import React from 'react';
import { ArrowRight } from 'lucide-react';
import IntroWaterProofing from '../../components/IntroWaterProofing';

// Original product images
import EpoxyFlooring from '../../assets/WaterProofingItems/EpoxyFlooring.png';
import EpoxyWater from '../../assets/WaterProofingItems/EpoxyWater.png';
import JointSealant from '../../assets/WaterProofingItems/JointSealant.png';
import MembraneRoll from '../../assets/WaterProofingItems/MembraneRoll.png';
import RepairPowder from '../../assets/WaterProofingItems/RepairPowder.png';
import RepairPutty from '../../assets/WaterProofingItems/RepairPutty.png';
import TileAdhesive from '../../assets/WaterProofingItems/TileAdhesive.png';
import TileChemicals from '../../assets/WaterProofingItems/TileChemicals.png';

// Brand data
import DcpProducts from '../../data/Dcp';
import AdhelantProducts from '../../data/Adhelant';
import CICProducts from '../../data/Cic';
import CMCIProducts from '../../data/Cmci';
import FosamProducts from '../../data/Fosroc';
import DadcoProducts from '../../data/Dadco';
import SaabitProducts from '../../data/Saabit';
import BitumatProducts from '../../data/Bitumat';
import PattexProducts from '../../data/Pattex';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface BrandSection {
  brand: string;
  products: { id: number; name: string; description: string; productImg: string }[];
}

const generalProducts: Product[] = [
  { id: 1, name: "Epoxy (Flooring & Wall)", description: "High-performance seamless coating for industrial and decorative surfaces.", image: EpoxyFlooring },
  { id: 2, name: "Epoxy Water Tank Coating", description: "Food-grade certified protection for hygienic water storage solutions.", image: EpoxyWater },
  { id: 3, name: "Joint Sealant", description: "Flexible expansion joint fillers to prevent water ingress and structural gaps.", image: JointSealant },
  { id: 4, name: "Waterproof Membrane Roll", description: "Heavy-duty bituminous or synthetic rolls for roof and basement protection.", image: MembraneRoll },
  { id: 5, name: "Repair Powder", description: "Fast-setting cementitious powder for structural repairs and crack filling.", image: RepairPowder },
  { id: 6, name: "Repair Putty", description: "Smooth application putty for surface leveling and minor masonry repairs.", image: RepairPutty },
  { id: 7, name: "Tile Adhesive", description: "Strong-bond polymer modified adhesive for all types of ceramic and stone.", image: TileAdhesive },
  { id: 8, name: "Ceramic & Tile Chemicals", description: "Specialized grouts and cleaners to enhance tile durability and aesthetics.", image: TileChemicals },
];

const brandSections: BrandSection[] = [
  { brand: "DCP", products: DcpProducts },
  { brand: "Adhelant", products: AdhelantProducts },
  { brand: "CIC", products: CICProducts },
  { brand: "CMCI", products: CMCIProducts },
  { brand: "Fosroc", products: FosamProducts },
  { brand: "Dadco", products: DadcoProducts },
  { brand: "Saabit", products: SaabitProducts },
  { brand: "Bitumat", products: BitumatProducts },
  { brand: "Pattex", products: PattexProducts },
];

const WaterProofingItems: React.FC = () => {
  const handleWhatsAppClick = (productName: string) => {
    const message = `I want to buy the ${productName} from WaterProofing & Chemicals`;
    const whatsappNumber = '966544837829';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const renderCard = (id: number, name: string, description: string, image: string) => (
    <div key={id} className="bg-white rounded-3xl p-8 transition-all duration-300 border border-gray-100 hover:shadow-xl group">
      <div className="h-64 flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-[#f9f9f9]">
        <img src={image} alt={name} className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105" />
      </div>
      <div className="flex justify-between items-start pt-4 border-t border-gray-100">
        <div className="flex-1 mr-4">
          <h3 className="text-xl text-gray-900 font-bold mb-2">{name}</h3>
          <p className="text-sm text-gray-500 leading-snug">{description}</p>
        </div>
        <button
          onClick={() => handleWhatsAppClick(name)}
          className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100 hover:bg-black hover:text-white transition-all active:scale-95 group/btn flex-shrink-0 mt-1"
        >
          <ArrowRight size={24} strokeWidth={2.5} className="transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-16 px-6 font-[Poppins]">
      <IntroWaterProofing />

      {/* Page Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
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

      {/* General Products Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-20">
        {generalProducts.map((p) => renderCard(p.id, p.name, p.description, p.image))}
      </div>

      {/* Brand Sections */}
      {brandSections.map((section) => (
        <div key={section.brand} className="max-w-[1400px] mx-auto mb-20">
          {/* Brand Header */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-[2px] bg-gray-200 flex-grow max-w-[100px]"></div>
            <h3 className="text-xl md:text-2xl font-black tracking-tighter uppercase italic text-black/90 text-center">
              {section.brand}
              <span className="text-[#6B5E18] ml-2">Products</span>
            </h3>
            <div className="h-[2px] bg-gray-200 flex-grow max-w-[100px]"></div>
          </div>

          {/* Brand Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {section.products.map((p) => renderCard(p.id, p.name, p.description, p.productImg))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WaterProofingItems;
