// Brand Categories with Logos and Keywords
// Primary Brands
import sika from '../assets/PrimaryBrands/sika.png';
import jotun from '../assets/PrimaryBrands/jotun.svg';
import weber from '../assets/PrimaryBrands/weber.png';
import jazeera from '../assets/PrimaryBrands/jazeera.svg';
import saveto from '../assets/PrimaryBrands/saveto.svg';
import seven from '../assets/PrimaryBrands/777.png';
import agm from '../assets/PrimaryBrands/agm.png';
import hempel from '../assets/PrimaryBrands/hempel.png';
import grohe from '../assets/PrimaryBrands/grohe.png';
import jeddah from '../assets/PrimaryBrands/Jeddah.png';
import khayaat from '../assets/PrimaryBrands/khayaat.png';
import mada from '../assets/PrimaryBrands/mada.png';
import saudiCeramics from '../assets/PrimaryBrands/saudiCeramics.png';

// Construction Brands
import adhelant from '../assets/ConstructionBrands/adhelant.png';
import bitumat from '../assets/ConstructionBrands/bitumat.png';
import cic from '../assets/ConstructionBrands/cic.svg';
import cmci from '../assets/ConstructionBrands/cmci.png';
import dadco from '../assets/ConstructionBrands/dadco.png';
import dcp from '../assets/ConstructionBrands/dcp.svg';
import fosroc from '../assets/ConstructionBrands/fosroc.svg';
import kapci from '../assets/ConstructionBrands/kapci.png';
import pattex from '../assets/ConstructionBrands/pattex.png';
import saaf from '../assets/ConstructionBrands/saaf.png';
import sabit from '../assets/ConstructionBrands/sabit.svg';
import tremco from '../assets/ConstructionBrands/tremco.png';

// Tools Brands
import artlife from '../assets/ToolsBrands/ArtLife.png';
import bosch from '../assets/ToolsBrands/bosch.png';
import dewesser from '../assets/ToolsBrands/Dewesser.svg';
import emtop from '../assets/ToolsBrands/emtop.png';
import makita from '../assets/ToolsBrands/makita.svg';
import pedrolla from '../assets/ToolsBrands/pedrolla.png';
import total from '../assets/ToolsBrands/total.png';

// Electrical Brands
import alfanar from '../assets/ToolsBrands/Alfanar.png';
import bahra from '../assets/ToolsBrands/Bahra.svg';
import orient from '../assets/ToolsBrands/Orient.png';

export type BrandCategory = {
  id: string;
  name: string;
  keywords: string[];
  brands: {
    id: string;
    name: string;
    logo: string;
    path: string;
    description: string;
  }[];
};

export const brandCategoriesData: BrandCategory[] = [
  {
    id: 'paint-brands',
    name: 'Paint Brands',
    keywords: ['paint', 'paints', 'coating', 'color', 'primer', 'emulsion', 'oil paint', 'plastic paint', 'road marking'],
    brands: [
      {
        id: 'jotun',
        name: 'Jotun',
        logo: jotun,
        path: '/jotun-products',
        description: 'Premium paints, primers, putty, and road marking paints'
      },
      {
        id: '777',
        name: '777',
        logo: seven,
        path: '/777-products',
        description: 'Plastic and oil-based paints in various finishes'
      },
      {
        id: 'jazeera',
        name: 'Jazeera Paints',
        logo: jazeera,
        path: '/jazeera-products',
        description: 'Paints, texture coatings, and tile adhesives'
      },
      {
        id: 'kapci',
        name: 'Kapci',
        logo: kapci,
        path: '/kapci-products',
        description: 'Automotive and industrial paints, primers'
      },
      {
        id: 'hempel',
        name: 'Hempel',
        logo: hempel,
        path: '/hempel-products',
        description: 'Road marking paints and wall putty'
      },
      {
        id: 'jeddah-paints',
        name: 'Jeddah Paints',
        logo: jeddah,
        path: '/jeddah-products',
        description: 'Architectural and decorative paints including Paramatti, Buksan, and DECO ranges'
      }
    ]
  },
  {
    id: 'waterproofing-brands',
    name: 'Waterproofing & Construction Chemical Brands',
    keywords: ['waterproofing', 'waterproof', 'chemical', 'epoxy', 'grout', 'sealant', 'adhesive', 'repair', 'mortar', 'construction chemical', 'membrane', 'coating'],
    brands: [
      {
        id: 'sika',
        name: 'Sika',
        logo: sika,
        path: '/sika-products',
        description: 'Waterproofing, epoxy systems, grouts, and sealants'
      },
      {
        id: 'weber',
        name: 'Weber',
        logo: weber,
        path: '/weber-products',
        description: 'Waterproofing, grouts, adhesives, and repair mortars'
      },
      {
        id: 'fosroc',
        name: 'Fosroc',
        logo: fosroc,
        path: '/fosroc-products',
        description: 'Waterproofing membranes, repair mortars, epoxy systems'
      },
      {
        id: 'bitumat',
        name: 'Bitumat',
        logo: bitumat,
        path: '/bitumat-products',
        description: 'Asphalt primers and elastomeric waterproofing'
      },
      {
        id: 'tremco',
        name: 'Tremco',
        logo: tremco,
        path: '/tremco-products',
        description: 'Rubber-based waterproofing solutions'
      },
      {
        id: 'adhelant',
        name: 'Adhelant',
        logo: adhelant,
        path: '/adhelant-products',
        description: 'Waterproofing and adhesive products'
      },
      {
        id: 'saveto',
        name: 'Saveto',
        logo: saveto,
        path: '/saveto-products',
        description: 'Construction materials and gypsum products'
      },
      {
        id: 'pattex',
        name: 'Pattex',
        logo: pattex,
        path: '/pattex-products',
        description: 'Adhesives and bonding solutions'
      }
    ]
  },
  {
    id: 'tools-brands',
    name: 'Tools & Equipment Brands',
    keywords: ['tools', 'equipment', 'drill', 'grinder', 'saw', 'power tools', 'hand tools', 'hammer', 'cutting', 'cordless', 'electric tools'],
    brands: [
      {
        id: 'bosch',
        name: 'Bosch',
        logo: bosch,
        path: '/bosch-products',
        description: 'Power tools - drills, grinders, saws, laser levels'
      },
      {
        id: 'makita',
        name: 'Makita',
        logo: makita,
        path: '/makita-products',
        description: 'Power tools - drills, grinders, saws, hammers, blowers'
      },
      {
        id: 'total',
        name: 'Total',
        logo: total,
        path: '/total-products',
        description: 'Power tools, saw blades, cutting discs'
      },
      {
        id: 'emtop',
        name: 'Emtop',
        logo: emtop,
        path: '/emtop-products',
        description: 'Power tools, hand tools, and accessories'
      },
      {
        id: 'dewesser',
        name: 'Dewesser',
        logo: dewesser,
        path: '/dewesser-products',
        description: 'Tools and equipment'
      },
      {
        id: 'dadco',
        name: 'Dadco',
        logo: dadco,
        path: '/dadco-products',
        description: 'Tools and hardware'
      },
      {
        id: 'pedrolla',
        name: 'Pedrolla',
        logo: pedrolla,
        path: '/pedrolla-products',
        description: 'Tools and equipment'
      }
    ]
  },
  {
    id: 'construction-materials-brands',
    name: 'Construction Materials & Boards',
    keywords: ['construction', 'materials', 'boards', 'gypsum', 'insulation', 'panels', 'polystyrene', 'building materials', 'plasterboard', 'gypsum board', 'fire rated', 'moisture resistant'],
    brands: [
      {
        id: 'saabit',
        name: 'Saabit',
        logo: sabit,
        path: '/sabit-products',
        description: 'Thermo polystyrene panels and insulation'
      },
      {
        id: 'cic',
        name: 'CIC',
        logo: cic,
        path: '/cic-products',
        description: 'Construction materials'
      },
      {
        id: 'cmci',
        name: 'CMCI',
        logo: cmci,
        path: '/cmci-products',
        description: 'Construction materials'
      },
      {
        id: 'dcp',
        name: 'DCP',
        logo: dcp,
        path: '/dcp-products',
        description: 'Construction materials'
      },
      {
        id: 'khayaat',
        name: 'Khayaat',
        logo: khayaat,
        path: '/khayaat-products',
        description: 'Gypsum boards - regular, moisture resistant, fire rated, and impact boards'
      },
      {
        id: 'mada',
        name: 'Mada',
        logo: mada,
        path: '/mada-products',
        description: 'Plasterboards - acoustic, fire resistant, moisture resistant, and cement boards'
      },
      {
        id: 'saudi-ceramics',
        name: 'Saudi Ceramics',
        logo: saudiCeramics,
        path: '/saudi-ceramics-products',
        description: 'Ceramic tiles and hollow/load bearing bricks for construction'
      }
    ]
  },
  {
    id: 'specialty-brands',
    name: 'Specialty Brands',
    keywords: ['specialty', 'decorative', 'special products'],
    brands: [
      {
        id: 'agm',
        name: 'AGM',
        logo: agm,
        path: '/agm-products',
        description: 'Construction products'
      },
      {
        id: 'artlife',
        name: 'Artlife',
        logo: artlife,
        path: '/artlife-products',
        description: 'Decorative and construction materials'
      },
      {
        id: 'saaf',
        name: 'Saaf',
        logo: saaf,
        path: '/saaf-products',
        description: 'Construction products'
      }
    ]
  },
  {
    id: 'plumbing-brands',
    name: 'Plumbing Brands',
    keywords: ['plumbing', 'bathroom', 'shower', 'faucet', 'mixer', 'tap', 'basin', 'toilet', 'wc', 'sanitary', 'pipe', 'cistern', 'urinal', 'bath'],
    brands: [
      {
        id: 'grohe',
        name: 'Grohe',
        logo: grohe,
        path: '/grohe-products',
        description: 'Premium bathroom fittings - shower mixers, basin mixers, WC, and accessories'
      }
    ]
  },
  {
    id: 'electrical-brands',
    name: 'Electrical Brands',
    keywords: ['electrical', 'electric', 'cable', 'wire', 'switch', 'socket', 'circuit breaker', 'mcb', 'panel', 'lighting', 'led', 'fan', 'bulb', 'plug', 'outlet', 'wiring', 'voltage'],
    brands: [
      {
        id: 'alfanar',
        name: 'Alfanar',
        logo: alfanar,
        path: '/alfanar-products',
        description: 'Electrical cables, circuit breakers, switches, sockets, and wiring accessories'
      },
      {
        id: 'bahra',
        name: 'Bahra',
        logo: bahra,
        path: '/bahra-products',
        description: 'Copper busbars, cables, switches, and socket outlets'
      },
      {
        id: 'orient',
        name: 'Orient',
        logo: orient,
        path: '/orient-products',
        description: 'Fans, LED lighting, smart plugs, extension boards, and electrical accessories'
      }
    ]
  }
];

// Helper function to search brands by keyword
export const searchBrandsByKeyword = (keyword: string): BrandCategory[] => {
  const query = keyword.toLowerCase().trim();
  
  return brandCategoriesData.filter(category => {
    // Check if category name matches
    if (category.name.toLowerCase().includes(query)) {
      return true;
    }
    
    // Check if any keyword matches
    return category.keywords.some(kw => kw.toLowerCase().includes(query));
  });
};

// Get all brands flattened
export const getAllBrands = () => {
  return brandCategoriesData.flatMap(category => 
    category.brands.map(brand => ({
      ...brand,
      category: category.name,
      categoryId: category.id
    }))
  );
};
