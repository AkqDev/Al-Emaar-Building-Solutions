import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { hempelProducts } from '../../data/hempel';

interface ColorVariant {
  color: string;
  colorName: string;
  url: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  type: string;
  'product-img': string;
  url: string;
  color?: string;
  variants?: ColorVariant[];
}

const Hempel: React.FC = () => {
  const [selectedVariants, setSelectedVariants] = useState<{ [key: number]: string }>({});

  const handleColorChange = (productId: number, url: string) => {
    setSelectedVariants(prev => ({ ...prev, [productId]: url }));
  };

  const getProductUrl = (product: Product) => {
    return selectedVariants[product.id] || product.url;
  };

  const getProductImage = (imageUrl: string) => {
    // If the image URL starts with /-, it's a relative Hempel URL
    if (imageUrl.startsWith('/-/')) {
      return `https://www.hempel.com${imageUrl}`;
    }
    return imageUrl;
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-6 font-sans">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-4 mb-2">
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
          <h2 className="text-2xl md:text-3xl font-black text-center tracking-tighter uppercase italic text-black/90">
            Hempel <span className="text-[#6B5E18] ml-2">Products</span>
          </h2>
          <div className="h-[1px] bg-gray-200 flex-grow max-w-[100px]"></div>
        </div>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Premium coating solutions for industrial and marine applications
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {hempelProducts.map((product: Product) => (
          <div key={product.id} className="bg-white rounded-3xl p-8 transition-all duration-300 border border-gray-100 hover:shadow-xl group">
            
            {/* Image Section */}
            <div className="h-64 flex items-center justify-center mb-6 overflow-hidden rounded-2xl bg-[#f9f9f9]">
              <img 
                src={getProductImage(product['product-img'])} 
                alt={product.name} 
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback to a default image if the image fails to load
                  e.currentTarget.src = 'https://via.placeholder.com/400x400/f9f9f9/666666?text=Hempel+Product';
                }}
              />
            </div>

            {/* Content Row */}
            <div className="flex justify-between items-start pt-4 border-t border-gray-100">
              <div className="flex-1 mr-4">
                <h3 className="text-xl text-gray-900 font-bold mb-2">{product.name}</h3>
                <p className="text-xs text-gray-400 mb-2 uppercase tracking-wide">{product.type}</p>
                <p className="text-sm text-gray-500 leading-snug mb-3">
                  {product.description}
                </p>
                
                {/* Color Variants */}
                {product.variants && product.variants.length > 0 && (
                  <div className="flex gap-2 mt-3">
                    {product.variants.map((variant, index) => (
                      <button
                        key={index}
                        onClick={() => handleColorChange(product.id, variant.url)}
                        className={`w-5 h-5 rounded-full border-2 transition-all hover:scale-110 ${
                          selectedVariants[product.id] === variant.url || (!selectedVariants[product.id] && variant.url === product.url)
                            ? 'border-black ring-2 ring-offset-2 ring-black/20'
                            : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: variant.color }}
                        title={variant.colorName}
                      />
                    ))}
                  </div>
                )}
              </div>
              
              <a 
                href={getProductUrl(product)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 p-4 rounded-2xl shadow-sm border border-gray-100 hover:bg-black hover:text-white transition-all active:scale-95 group/btn flex-shrink-0 mt-1"
              >
                <ArrowRight size={24} strokeWidth={2.5} className="transition-transform group-hover/btn:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hempel;
