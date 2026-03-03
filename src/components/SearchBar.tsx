import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { productCategories } from '../data/categories';

interface SearchBarProps {
  className?: string;
}

const SearchBar = ({ className = '' }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  const searchResults = searchQuery.trim() 
    ? productCategories.filter(cat => 
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center border-2 border-slate-100 bg-slate-50 rounded-full overflow-hidden focus-within:border-[#292A87] focus-within:bg-white transition-all">
        <input 
          type="text" 
          placeholder="Search products..." 
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
          {searchResults.map((category) => (
            <div key={category.id} className="p-4 border-b border-slate-100 last:border-0">
              <a 
                href={category.path}
                className="font-bold text-[#292A87] hover:underline block"
                onClick={() => {
                  setShowResults(false);
                  setSearchQuery('');
                }}
              >
                {category.name}
              </a>
            </div>
          ))}
        </div>
      )}

      {showResults && searchQuery && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-50 p-4 text-center text-slate-500">
          No products found for "{searchQuery}"
        </div>
      )}
    </div>
  );
};

export default SearchBar;
