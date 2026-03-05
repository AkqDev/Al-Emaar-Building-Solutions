import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { productCategories } from '../data/categories';
import { brandsIndex } from '../data/brandsIndex';

interface SearchBarProps {
  className?: string;
  onResultClick?: () => void;
}

interface SearchResult {
  type: 'category' | 'brand' | 'product';
  name: string;
  path: string;
  brandName?: string;
  description?: string;
}

const SearchBar = ({ className = '', onResultClick }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const searchRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const searchResults: SearchResult[] = searchQuery.trim() 
    ? (() => {
        const query = searchQuery.toLowerCase();
        const results: SearchResult[] = [];

        // Search in product categories
        productCategories.forEach(cat => {
          if (cat.name.toLowerCase().includes(query)) {
            results.push({
              type: 'category',
              name: cat.name,
              path: cat.path
            });
          }
        });

        // Search in brands
        brandsIndex.forEach(brand => {
          const brandMatches = brand.name.toLowerCase().includes(query);
          
          if (brandMatches) {
            results.push({
              type: 'brand',
              name: brand.name,
              path: brand.path
            });
          }

          // Search in brand products
          brand.products.forEach(product => {
            if (product.name.toLowerCase().includes(query)) {
              results.push({
                type: 'product',
                name: product.name,
                path: brand.path,
                brandName: brand.name,
                description: product.description
              });
            }
          });
        });

        return results;
      })()
    : [];

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="flex items-center border-2 border-slate-100 bg-slate-50 rounded-full overflow-hidden focus-within:border-[#292A87] focus-within:bg-white transition-all">
        <input 
          type="text" 
          placeholder="Search brands, products, categories..." 
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          className="flex-grow px-6 py-2 outline-none bg-transparent text-sm" 
        />
        {searchQuery && (
          <button 
            onClick={() => {
              setSearchQuery('');
              setShowResults(false);
            }}
            className="p-2 text-slate-400 hover:text-red-500"
          >
            <X size={16} />
          </button>
        )}
        <button className="p-3 text-slate-400 hover:text-[#292A87]">
          <Search size={18} />
        </button>
      </div>

      {/* Search Results Dropdown */}
      {showResults && searchQuery && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {searchResults.map((result, index) => (
            <div key={`${result.type}-${index}`} className="p-4 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
              <button 
                onClick={() => {
                  navigate(result.path);
                  setShowResults(false);
                  setSearchQuery('');
                  onResultClick?.();
                }}
                className="block w-full text-left"
              >
                <div className="flex items-start gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium mt-1 ${
                    result.type === 'category' 
                      ? 'bg-blue-100 text-blue-700' 
                      : result.type === 'brand'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {result.type === 'category' ? 'Category' : result.type === 'brand' ? 'Brand' : 'Product'}
                  </span>
                  <div className="flex-1">
                    <div className="font-semibold text-[#292A87] hover:underline">
                      {result.name}
                    </div>
                    {result.brandName && (
                      <div className="text-xs text-slate-500 mt-0.5">
                        Brand: {result.brandName}
                      </div>
                    )}
                    {result.description && (
                      <div className="text-xs text-slate-600 mt-1 line-clamp-2">
                        {result.description}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}

      {showResults && searchQuery && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-50 p-4 text-center text-slate-500">
          No brands, products, or categories found for "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
