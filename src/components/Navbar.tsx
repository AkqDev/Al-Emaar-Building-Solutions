import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, LayoutGrid } from 'lucide-react'; // Added LayoutGrid icon
import { IoLogoWhatsapp } from 'react-icons/io';
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';
import { productCategories } from '../data/categories';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/966XXXXXXXXX', '_blank');
  };

  const mainNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Company', path: '/about' },
  ];

  return (
    <header className="w-full font-poppins bg-white relative shadow-sm border-b border-slate-100">
      {/* --- Main Row --- */}
      <div className="container mx-auto px-4 py-3 lg:py-4 flex items-center justify-between gap-4">
        
        {/* Logo Group */}
        <Link to="/" className="flex items-center gap-3 min-w-fit group cursor-pointer">
          <img 
            src={logo} 
            alt="Al-Emaar Buildings Logo" 
            className="h-12 lg:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="flex flex-col">
            <span className="text-lg font-black text-slate-800 uppercase leading-none">Al-Emaar</span>
            <span className="text-[9px] lg:text-[10px] font-bold text-[#292A87] mt-1">Building Solutions</span>
          </div>
        </Link>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <SearchBar className="w-full max-w-3xl" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* WhatsApp Button (Desktop) */}
          <button 
            onClick={handleWhatsAppClick}
            className="hidden lg:flex items-center gap-2 bg-[#4E7E48] text-white px-6 py-3 rounded-xl font-bold shadow-md transition-all hover:bg-[#3d6339] active:scale-95 ml-4"
          >
            <IoLogoWhatsapp size={22} />
            <span>WhatsApp</span>
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* --- Updated Desktop Navigation Bar (Matches Image) --- */}
      <div className="hidden lg:block border-t border-slate-100 bg-[#F8F9FA]">
        <div className="container mx-auto px-4 flex items-center">
          
          {/* Browse Categories Dropdown (Brown background as per image) */}
          <div 
            className="relative"
            onMouseEnter={() => setIsBrowseOpen(true)}
            onMouseLeave={() => setIsBrowseOpen(false)}
          >
            <button className="bg-[#6B5E18] text-white font-bold px-6 py-4 flex items-center gap-3 transition-colors">
              <LayoutGrid size={18} />
              Browse Categories
              <ChevronDown size={14} className={`transition-transform ${isBrowseOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`
              absolute top-full left-0 w-80 bg-white border border-slate-200 shadow-xl transition-all duration-200 z-50
              ${isBrowseOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}
            `}>
              <div className="py-2 max-h-[500px] overflow-y-auto">
                {productCategories.map((cat) => (
                  <Link 
                    key={cat.id}
                    to={cat.path} 
                    className="flex items-center justify-between px-4 py-3 hover:bg-slate-50 cursor-pointer group border-b border-slate-100 last:border-0"
                  >
                    <span className="text-sm font-bold text-slate-700 group-hover:text-[#292A87]">
                      {cat.name}
                    </span>
                    <ChevronRight size={14} className="text-slate-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Main Links (Home, About) and Category Quick Links */}
          <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar">
            {mainNavLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path}
                className="text-slate-700 font-bold hover:text-[#292A87] cursor-pointer text-sm whitespace-nowrap transition-colors px-5 py-4 block"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Visual separator like in the image */}
            <div className="h-6 w-[1px] bg-slate-200 mx-2"></div>

            {/* Quick access to first few categories (matches image labels) */}
            {productCategories.slice(0, 5).map((cat) => (
              <Link 
                key={cat.id}
                to={cat.path}
                className="text-slate-600 font-medium hover:text-[#292A87] cursor-pointer text-sm whitespace-nowrap transition-colors px-4 py-4 block"
              >
                {cat.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* --- MOBILE FULL-WIDTH SIDEBAR (UNCHANGED) --- */}
      <div className={`
        fixed inset-0 h-screen w-full bg-white z-[101] transform transition-transform duration-500 ease-in-out lg:hidden
        ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full overflow-hidden">
          {/* Sidebar Header */}
          <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
             <div className="flex flex-col">
              <span className="text-xl font-black text-slate-800 uppercase">Al-Emaar</span>
              <span className="text-xs font-bold text-[#292A87]">Building Solutions</span>
            </div>
            <button 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="p-3 bg-slate-100 rounded-full text-slate-600 active:scale-90 transition-transform"
            >
              <X size={28} />
            </button>
          </div>

          {/* Search Bar Mobile */}
          <div className="px-5 py-6">
            <SearchBar />
          </div>

          {/* Navigation Links */}
          <div className="flex-grow overflow-y-auto px-5 pb-10">
            <nav className="space-y-1">
              {mainNavLinks.map((link, index) => (
                <Link 
                  key={index}
                  to={link.path}
                  className="flex items-center justify-between py-4 border-b border-slate-50 text-slate-800 font-bold text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={20} className="text-slate-300" />
                </Link>
              ))}

              <div className="pt-8 pb-4">
                <span className="text-sm font-black text-[#6B5E18] uppercase tracking-widest">
                  Browse Categories
                </span>
              </div>
              
              <div className="grid grid-cols-1 gap-2">
                {productCategories.map((cat) => (
                  <Link 
                    key={cat.id}
                    to={cat.path}
                    className="flex items-center justify-between p-4 bg-slate-50 rounded-xl text-slate-700 font-semibold active:bg-slate-100 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{cat.name}</span>
                    <ChevronRight size={18} className="text-slate-400" />
                  </Link>
                ))}
              </div>
            </nav>
          </div>

          {/* Bottom Actions - WhatsApp Only */}
          <div className="p-5 bg-white border-t border-slate-100">
            <button 
              onClick={handleWhatsAppClick} 
              className="w-full flex items-center justify-center gap-3 bg-[#4E7E48] text-white py-5 rounded-2xl font-bold text-xl shadow-lg active:scale-[0.98] transition-all"
            >
              <IoLogoWhatsapp size={28} />
              Chat on WhatsApp
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;