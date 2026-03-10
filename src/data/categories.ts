// Product Categories Data
export const productCategories = [
  {
    id: 'construction-materials',
    name: 'Construction Materials',
    path: '/products/construction-materials'
  },
  {
    id: 'electrical-items',
    name: 'Electrical Items',
    path: '/products/electrical-items'
  },
  {
    id: 'gypsum-boards',
    name: 'Gypsum Boards',
    path: '/products/gypsum-boards'
  },
  {
    id: 'paints-adhesives',
    name: 'Paints',
    path: '/products/paints-adhesives'
  },
  {
    id: 'plumbing-items',
    name: 'Plumbing Items',
    path: '/products/plumbing-items'
  },
  {
    id: 'porta-cabins',
    name: 'Porta Cabins',
    path: '/products/porta-cabins'
  },
  {
    id: 'safety-products',
    name: 'Safety Products',
    path: '/products/safety-products'
  },
  {
    id: 'tools-equipments',
    name: 'Tools And Equipments',
    path: '/products/tools-equipments'
  },
  {
    id: 'waterproofing-items',
    name: 'Waterproofing Items',
    path: '/products/waterproofing-items'
  }
];

// Brand Categories Data
export const brandCategories = [
  {
    category: 'Waterproofing & Chemical Brands',
    brands: [
      { name: 'Sika', logo: '/brands/sika.png' },
      { name: 'Adhelant', logo: '/brands/adhelant.png' },
      { name: 'Jotun', logo: '/brands/jotun.png' },
      { name: 'Fosroc', logo: '/brands/fosroc.png' },
      { name: 'Henkel', logo: '/brands/henkel.png' },
      { name: 'Bitumat', logo: '/brands/bitumat.png' },
      { name: 'Ezomax', logo: '/brands/ezomax.png' },
      { name: 'Weber', logo: '/brands/weber.png' }
    ]
  },
  {
    category: 'Paint Brands',
    brands: [
      { name: 'Jotun', logo: '/brands/jotun.png' },
      { name: 'Jazeera Paints', logo: '/brands/jazeera.png' },
      { name: '777 Paint', logo: '/brands/777.png' },
      { name: 'Jeddah Paint', logo: '/brands/jeddah-paint.png' }
    ]
  },
  {
    category: 'Board & Building Brands',
    brands: [
      { name: 'Saveto Khayyat', logo: '/brands/saveto.png' },
      { name: 'Mada Gypsum', logo: '/brands/mada.png' },
      { name: 'Ajwaa', logo: '/brands/ajwaa.png' }
    ]
  },
  {
    category: 'Electrical Brands',
    brands: [
      { name: 'Alfanar', logo: '/brands/alfanar.png' },
      { name: 'Al Riyadh', logo: '/brands/alriyadh.png' },
      { name: 'Al Baha', logo: '/brands/albaha.png' },
      { name: 'Jeddah Cables', logo: '/brands/jeddah-cables.png' }
    ]
  },
  {
    category: 'Tools Brands',
    brands: [
      { name: 'Makita', logo: '/brands/makita.png' },
      { name: 'Bosch', logo: '/brands/bosch.png' },
      { name: 'Total Tools', logo: '/brands/total.png' },
      { name: 'DeWalt', logo: '/brands/dewalt.png' },
      { name: 'Stanley', logo: '/brands/stanley.png' },
      { name: 'DeWesser', logo: '/brands/dewesser.png' }
    ]
  },
  {
    category: 'Thermo Polystrene Panels',
    brands: [
      { name: 'SABIT', logo: '/brands/sabit.png' },
      { name: 'Juffali Thermo Polystrene', logo: '/brands/juffali.png' }
    ]
  }
];

export const allBrands = brandCategories.flatMap(cat => cat.brands);
