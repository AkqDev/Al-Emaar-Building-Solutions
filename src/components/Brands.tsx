import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  { name: 'ZRK', logo: '/logos/zrk.png' }, { name: 'Zora', logo: '/logos/zora.png' },
  { name: 'Wahkit', logo: '/logos/wahkit.png' }, { name: 'Voldam', logo: '/logos/voldam.png' },
  { name: 'Universal', logo: '/logos/universal.png' }, { name: 'Ubon', logo: '/logos/ubon.png' },
  { name: 'Thatta Cement', logo: '/logos/thatta.png' }, { name: 'Stile', logo: '/logos/stile.png' },
  { name: 'Steelex', logo: '/logos/steelex.png' }, { name: 'SMC', logo: '/logos/smc.png' },
  { name: 'SK Home', logo: '/logos/sk.png' }, { name: 'Sitara Craft', logo: '/logos/sitara.png' },
  { name: 'Sika', logo: '/logos/sika.png' }, { name: 'Sea Star', logo: '/logos/seastar.png' },
  { name: 'Schneider', logo: '/logos/schneider.png' }, { name: 'SAK', logo: '/logos/sak.png' },
  { name: 'Royal Fans', logo: '/logos/royal.png' }, { name: 'Ressichem', logo: '/logos/ressichem.png' },
  { name: 'Rasheed Steel', logo: '/logos/rasheed.png' }, { name: 'Power Cement', logo: '/logos/power.png' },
  { name: 'Porta', logo: '/logos/porta.png' }, { name: 'Popular', logo: '/logos/popular.png' },
  { name: 'Pony', logo: '/logos/pony.png' }, { name: 'Polo', logo: '/logos/polo.png' },
  { name: 'Platinum', logo: '/logos/platinum.png' }, { name: 'Pipe Plus', logo: '/logos/pipe.png' },
  { name: 'Patex', logo: '/logos/patex.png' }, { name: 'Pakland', logo: '/logos/pakland.png' },
  { name: 'Pakistan Cables', logo: '/logos/pakcables.png' }, { name: 'Pak Fan', logo: '/logos/pakfan.png' },
  { name: 'Pak Arab', logo: '/logos/pakarab.png' }, { name: 'Osaka', logo: '/logos/osaka.png' },
  { name: 'Naveena Steel', logo: '/logos/naveena.png' }, { name: 'National Plaster', logo: '/logos/national.png' },
  { name: 'Mughal Steel', logo: '/logos/mughal.png' }, { name: 'Ply', logo: '/logos/ply.png' },
  { name: 'Master Sanitary', logo: '/logos/master.png' }, { name: 'Marineplex', logo: '/logos/marine.png' },
  { name: 'Marachi', logo: '/logos/marachi.png' }, { name: 'Maple Leaf', logo: '/logos/maple.png' },
  { name: 'Lucky Cement', logo: '/logos/lucky.png' }, { name: 'Lahore Fan', logo: '/logos/lahore.png' },
  { name: 'Khurshid Fans', logo: '/logos/khurshid.png' }, { name: 'Khind', logo: '/logos/khind.png' },
  { name: 'KBW', logo: '/logos/kbw.png' }, { name: 'Jotun', logo: '/logos/jotun.png' },
  { name: 'Jeddah Polymer', logo: '/logos/jeddah.png' }, { name: 'IIL', logo: '/logos/iil.png' },
  { name: 'Ingco', logo: '/logos/ingco.png' }, { name: 'Imported', logo: '/logos/imported.png' },
  { name: 'Icons', logo: '/logos/icons.png' }, { name: 'Hunza Steel', logo: '/logos/hunza.png' },
  { name: 'Home Guard', logo: '/logos/homeguard.png' }, { name: 'H.M Cables', logo: '/logos/hmcables.png' },
  { name: 'Grohe', logo: '/logos/grohe.png' }, { name: 'Gobis Paints', logo: '/logos/gobis.png' },
  { name: 'GFC Fans', logo: '/logos/gfc.png' }, { name: 'Genc', logo: '/logos/genc.png' },
  { name: 'Fibre Concept', logo: '/logos/fibre.png' }, { name: 'Fatmi', logo: '/logos/fatmi.png' },
  { name: 'Falcon Cement', logo: '/logos/falcon.png' }, { name: 'Euro Locks', logo: '/logos/eurolocks.png' },
  { name: 'Doganlar', logo: '/logos/doganlar.png' }, { name: 'DG Cement', logo: '/logos/dg.png' },
  { name: 'Dell', logo: '/logos/dell.png' }, { name: 'Coarts', logo: '/logos/coarts.png' },
  { name: 'Clipsal', logo: '/logos/clipsal.png' }, { name: 'Boss', logo: '/logos/boss.png' },
  { name: 'Baifeibu', logo: '/logos/baifeibu.png' }, { name: 'Aqua Electrical', logo: '/logos/aqua.png' },
  { name: 'Amreli Steels', logo: '/logos/amreli.png' }, { name: 'Adamjee', logo: '/logos/adamjee.png' },
  { name: 'Accora', logo: '/logos/accora.png' }, { name: 'Agha Steel', logo: '/logos/agha.png' }
];

const Brands = () => {
  return (
    <div className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
          Elite Brands We Supply
        </h2>
        <div className="h-1 w-20 bg-blue-600 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Interactive Grid with Glassmorphism */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="group relative flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-95 group-hover:scale-105"
            />
            <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
              {brand.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Marquee Section */}
      <div className="mt-32 relative flex overflow-x-hidden border-y border-slate-100 bg-slate-50/50 py-10">
        <div className="animate-scroll flex whitespace-nowrap">
          {[...brands, ...brands].map((brand, i) => (
            <div key={i} className="flex items-center justify-center mx-12">
              <img 
                src={brand.logo} 
                alt="" 
                className="h-8 w-auto grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer" 
              />
            </div>
          ))}
        </div>
        
        {/* Shadow Overlays for a "Fade In/Out" look */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </div>
  );
};

export default Brands;