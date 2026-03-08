import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { productCategories } from '../data/categories';
import { brandsIndex } from '../data/brandsIndex';
import { searchBrandsByKeyword, brandCategoriesData } from '../data/brandCategories';
import type { BrandCategory } from '../data/brandCategories';

interface SearchBarProps {
  className?: string;
  onResultClick?: () => void;
}

interface SearchResult {
  type: 'category' | 'brand' | 'product' | 'page' | 'brand-category';
  name: string;
  path: string;
  brandName?: string;
  description?: string;
  logo?: string;
  brandCategory?: BrandCategory;
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

  // Get all results when search is empty (for "See All" view)
  const getAllResults = (): SearchResult[] => {
    const results: SearchResult[] = [];

    // Add main pages
    results.push(
      {
        type: 'page',
        name: 'Home',
        path: '/',
        description: 'Main homepage'
      },
      {
        type: 'page',
        name: 'About Company',
        path: '/about',
        description: 'Learn about our company'
      }
    );

    // Add all categories
    productCategories.forEach(cat => {
      results.push({
        type: 'category',
        name: cat.name,
        path: cat.path
      });
    });

    // Add all brands
    brandsIndex.forEach(brand => {
      results.push({
        type: 'brand',
        name: brand.name,
        path: brand.path
      });

      // Add all products from each brand
      brand.products.forEach(product => {
        results.push({
          type: 'product',
          name: product.name,
          path: brand.path,
          brandName: brand.name,
          description: product.description
        });
      });
    });

    return results;
  };

  const searchResults: SearchResult[] = searchQuery.trim() 
    ? (() => {
        const query = searchQuery.toLowerCase();
        const results: SearchResult[] = [];

        // Search in brand categories by keywords (PRIORITY)
        const matchingCategories = searchBrandsByKeyword(query);
        matchingCategories.forEach(category => {
          results.push({
            type: 'brand-category',
            name: category.name,
            path: '#',
            description: `${category.brands.length} brands available`,
            brandCategory: category
          });
        });

        // Search in pages
        const pages = [
          { name: 'Home', path: '/', description: 'Main homepage' },
          { name: 'About Company', path: '/about', description: 'Learn about our company' }
        ];

        pages.forEach(page => {
          if (page.name.toLowerCase().includes(query)) {
            results.push({
              type: 'page',
              name: page.name,
              path: page.path,
              description: page.description
            });
          }
        });

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
            if (product.name.toLowerCase().includes(query) || 
                product.description.toLowerCase().includes(query)) {
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
    : getAllResults();

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
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-50 max-h-96 overflow-y-auto">
          {!searchQuery && (
            <div className="p-3 bg-slate-50 border-b border-slate-200 sticky top-0">
              <p className="text-sm font-semibold text-slate-700">
                Browse All ({searchResults.length} items)
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Pages • Categories • Brands • Products
              </p>
            </div>
          )}
          {searchQuery && (
            <div className="p-3 bg-slate-50 border-b border-slate-200 sticky top-0">
              <p className="text-sm font-semibold text-slate-700">
                Search Results ({searchResults.length} found)
              </p>
            </div>
          )}
          {searchResults.map((result, index) => {
            // Special rendering for brand category results
            if (result.type === 'brand-category' && result.brandCategory) {
              return (
                <div key={`${result.type}-${index}`} className="p-4 border-b border-slate-100 last:border-0 bg-gradient-to-r from-slate-50 to-white">
                  <div className="mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-indigo-100 text-indigo-700">
                        Category Match
                      </span>
                      <h3 className="font-bold text-[#292A87] text-sm">
                        {result.brandCategory.name}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-3">
                      {result.brandCategory.brands.length} brands available
                    </p>
                  </div>
                  
                  {/* Brand Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {result.brandCategory.brands.map((brand) => (
                      <button
                        key={brand.id}
                        onClick={() => {
                          navigate(brand.path);
                          setShowResults(false);
                          setSearchQuery('');
                          onResultClick?.();
                        }}
                        className="flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-[#292A87] hover:shadow-md transition-all group"
                      >
                        <div className="w-16 h-16 flex items-center justify-center mb-2 bg-slate-800 rounded-lg group-hover:bg-slate-900 transition-colors">
                          <img 
                            src={brand.logo} 
                            alt={brand.name}
                            className="max-w-full max-h-full object-contain p-2"
                          />
                        </div>
                        <div className="text-xs font-semibold text-slate-700 text-center group-hover:text-[#292A87]">
                          {brand.name}
                        </div>
                        <div className="text-[10px] text-slate-500 text-center mt-1 line-clamp-2">
                          {brand.description}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            // Regular result rendering
            return (
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
                        : result.type === 'product'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {result.type === 'category' ? 'Category' : 
                       result.type === 'brand' ? 'Brand' : 
                       result.type === 'product' ? 'Product' : 'Page'}
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
            );
          })}
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
