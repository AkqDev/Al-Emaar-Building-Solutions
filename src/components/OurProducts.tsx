import React from 'react';
import about from '../assets/about.png'

// --- Data Definitions ---
const categories = [
  { name: 'Water Proofing Items', img: 'https://placehold.co/100x100?text=Waterproof' },
  { name: 'Paints & Adhesives', img: 'https://placehold.co/100x100?text=Paints' },
  { name: 'Gypsum Board', img: 'https://placehold.co/100x100?text=Gypsum' },
  { name: 'Tools & Equipment', img: 'https://placehold.co/100x100?text=Tools' },
  { name: 'Safety Products', img: 'https://placehold.co/100x100?text=Safety' },
];

const trendingProducts = [
  { id: 1, name: 'Comnix', subName: 'Waterproofing Membrane Roll', category: 'Water Proofing', img: 'https://placehold.co/200x150' },
  { id: 2, name: 'Jotun Jotashield', subName: 'Exterior Paint 20L', category: 'Paints & Adhesives', img: 'https://placehold.co/200x150' },
  { id: 3, name: 'Elephant Gypsum', subName: 'Board - 8ft x 4ft', category: 'Gypsum Board', img: 'https://placehold.co/200x150' },
  { id: 4, name: 'SDS Plus Rotary', subName: 'Hammer Drill', category: 'Tools & Equipment', img: 'https://placehold.co/200x150' },
  { id: 5, name: 'UPVC Pipe &', subName: 'Fittings Asst Pack', category: 'Plumbing', img: 'https://placehold.co/200x150' },
  { id: 6, name: '6mm Single Core', subName: 'Copper Cable Roll', category: 'Electrical', img: 'https://placehold.co/200x150' },
  { id: 7, name: 'Construction Materials', subName: 'General Supply', category: 'Construction', img: 'https://placehold.co/200x150' },
  { id: 8, name: 'Conmix OPC', subName: '50kg Bag', category: 'Cement/Materials', img: 'https://placehold.co/200x150' },
];

const OurProducts: React.FC = () => {
  
  const handleWhatsAppClick = (productName: string, subName: string, category: string) => {
    // Replace with your actual WhatsApp number (e.g., 923001234567)
    const phoneNumber = "920000000000"; 
    
    // Create a descriptive message
    const message = `Hello Al-Emaar! I am interested in purchasing the following product:\n\n` +
                    `*Product:* ${productName}\n` +
                    `*Details:* ${subName}\n` +
                    `*Category:* ${category}\n\n` +
                    `Could you please provide more information and pricing?`;

    // Encode the message for a URL
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-8xl mx-auto p-4 md:p-8 bg-white font-poppins text-[#423129]">
      
      {/* --- Header Section: Categories --- */}
      <section className="my-12 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#423129] text-center md:text-left">All Categories</h2>
        <div className="grid md:grid-cols-5 gap-4">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col items-center hover:shadow-md transition-all cursor-pointer">
              <div className="w-20 h-20 flex items-center justify-center mb-3">
                <img src={cat.img} alt={cat.name} className="max-h-full object-contain" />
              </div>
              <span className="text-md font-bold text-center px-2">{cat.name}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* --- Main Content: Trending Products --- */}
        <div className="lg:col-span-3">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#423129] text-center md:text-left">Trending Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trendingProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden relative flex flex-col group shadow-sm">
                <div className="absolute top-0 left-0 bg-[#233F90] text-white text-[10px] px-3 py-1 rounded-br-lg z-10 font-medium">
                  Popular
                </div>
                
                <div className="p-4 h-36 flex items-center justify-center bg-white">
                  <img src={product.img} alt={product.name} className="max-h-full object-contain group-hover:scale-105 transition-transform" />
                </div>
                
                <div className="p-4 flex-grow flex flex-col bg-white">
                  <h3 className="text-sm font-semibold text-[#423129]">
                    {product.name}
                  </h3>
                  <p className="text-[12px] text-gray-500 mb-2 h-8">{product.subName}</p>
                  
                  {/* Updated Button with WhatsApp functionality */}
                  <button 
                    onClick={() => handleWhatsAppClick(product.name, product.subName, product.category)}
                    className="w-full bg-[#6B5E18] text-white py-2 rounded-lg text-sm font-bold transition-colors mt-auto shadow-sm"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Sidebar --- */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg md:mt-8">
            <div className="min-h-[300px] overflow-hidden">
              <img 
                src={about} 
                alt="About Al-Emaar Construction" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#423129]">About Al-Emaar</h2>
              <p className="text-gray-600 text-[13px] mb-6">
                AL-EMAAR Building Solutions is a leading supplier of top-quality building materials. We provide a comprehensive range products to meet all your construction needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;