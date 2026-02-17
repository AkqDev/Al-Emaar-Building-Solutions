import React, { useState } from 'react';
import { Search, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';
import { IoLogoWhatsapp } from 'react-icons/io';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);

  const categories = [
    { name: 'Water Proofing Items' },
    { name: 'Paints And adhesives' },
    { name: 'Gypsum Boards' },
    { name: 'Tools And Equipments' },
    { name: 'Safety Products' },
    { name: 'Plumbing Items' },
    { name: 'Electrical Items' },
    { name: 'Construction Materials' },
    { name: 'Pota Cabins' },
  ];

  const trendingItems = ['Water Proofing Items', 'Paints & Adhesives', 'Gypsum Board', 'Tools & Equipments', 'Plumbing Items', 'Electrical Items', 'Construction Materials'];

  return (
    // Added font-poppins here
    <header className="w-full font-poppins bg-white relative shadow-sm border-b border-slate-100">
      {/* --- Main Row --- */}
      <div className="container mx-auto px-4 py-3 lg:py-4 flex items-center justify-between gap-8">
        
        {/* Logo Group */}
        <div className="flex items-center gap-3 min-w-fit group cursor-pointer">
          <img 
            src={logo} 
            alt="Al-Emaar Buildings Logo" 
            className="h-12 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex flex-col">
            <span className="text-lg  font-black text-slate-800 uppercase">
              Al-Emaar
            </span>
            <span className="text-[9px] lg:text-[10px] font-bold  text-[#292A87]">
              Building Solutions
            </span>
          </div>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-grow max-w-2xl items-center border-2 border-slate-100 bg-slate-50 rounded-full overflow-hidden focus-within:border-[#292A87] focus-within:bg-white transition-all">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="flex-grow px-6 py-2 outline-none bg-transparent text-sm" 
          />
          <button className="p-3 text-slate-400 hover:text-[#292A87]">
            <Search size={18} />
          </button>
        </div>

        {/* Right Action */}
        <div className="flex items-center">
          <button className="hidden lg:flex items-center gap-2 bg-[#4E7E48] text-white px-6 py-2.5 rounded-xl font-bold shadow-md transition-all active:scale-95">
            <IoLogoWhatsapp size={22} />
            <span>Chat on WhatsApp</span>
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

{/* --- Desktop Sub-Navigation --- */}
<div className="hidden lg:block border-t border-slate-100 bg-[#6B5E18]">
  <div className="container mx-auto px-4 flex items-center relative">
    
    {/* Categories Dropdown Wrapper */}
    <div 
      className="relative z-50 border-x border-white/20" // Left and Right border for the first element
      onMouseEnter={() => setIsDesktopDropdownOpen(true)}
      onMouseLeave={() => setIsDesktopDropdownOpen(false)}
    >
      <button className="shadow-xl text-white px-6 py-3 flex items-center gap-3 font-bold text-sm hover:bg-black/10 transition-colors w-60">
        <span>Browse Categories</span>
        <ChevronDown size={16} className={`transition-transform ${isDesktopDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      <div className={`
        absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-xl transition-all duration-200
        ${isDesktopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
      `}>
        <ul className="py-2">
          {categories.map((cat, index) => (
            <li key={index} className="flex items-center justify-between px-4 py-2 hover:bg-slate-50 cursor-pointer group">
              <span className="text-sm font-semibold text-slate-700 group-hover:text-[#292A87]">{cat.name}</span>
              <ChevronRight size={12} className="text-slate-300" />
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Trending Items Navigation */}
    <nav className="flex items-center">
      {trendingItems.map((item) => (
        <span 
          key={item} 
          className="text-white font-bold hover:bg-black/10 cursor-pointer text-sm whitespace-nowrap transition-colors px-6 py-3 border-r border-white/20 relative group"
        >
          {item}
          {/* Animated Underline */}
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/50 transition-all group-hover:w-1/2"></span>
        </span>
      ))}
    </nav>
  </div>
</div>

      {/* --- MOBILE SIDEBAR --- */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar Drawer - SLIDES FROM RIGHT */}
      <div className={`
        fixed top-0 right-0 h-screen w-[280px] sm:w-[350px] bg-white z-[101] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full font-poppins">
          <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <span className="font-black text-[#292A87] uppercase tracking-tight">Menu</span>
            <button 
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 bg-white rounded-full shadow-sm text-slate-500 hover:text-red-500 transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex-grow overflow-y-auto">
            <div className="p-4">
              <h3 className="text-xs font-black text-[#7F6A2F] uppercase tracking-widest mb-4">Categories</h3>
              <ul className="space-y-1">
                {categories.map((cat, index) => (
                  <li 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 text-slate-700 font-bold text-sm active:bg-slate-100 cursor-pointer"
                  >
                    {cat.name}
                    <ChevronRight size={16} className="text-slate-300" />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <button className="w-full flex items-center justify-center gap-3 bg-[#292A87] text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-[0.98] transition-all">
              <IoLogoWhatsapp size={24} />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;