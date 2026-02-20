# Developer Documentation - Al-Emaar Website Update

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx              ✅ UPDATED - New menu structure
│   ├── SearchBar.tsx           ✅ NEW - Search functionality
│   ├── Footer.tsx              ✓ Existing
│   ├── Hero.tsx                ✓ Existing
│   ├── About.tsx               ✓ Existing
│   ├── MissionVision.tsx       ✓ Existing
│   ├── Values.tsx              ✓ Existing
│   ├── Brands.tsx              ✓ Existing
│   ├── OurProducts.tsx         ✓ Existing
│   ├── TopCategories.tsx       ✓ Existing
│   └── MapComponent.tsx        ✓ Existing
│
├── pages/
│   ├── Home.tsx                ✓ Existing
│   ├── AboutCompany.tsx        ✅ NEW
│   ├── ShopByBrands.tsx        ✅ NEW
│   ├── Projects.tsx            ✅ NEW
│   ├── Contact.tsx             ✅ NEW
│   ├── products/
│   │   └── WaterproofingChemicals.tsx  ✅ NEW
│   └── [legacy pages]          ✓ Existing (kept for compatibility)
│
├── data/
│   └── categories.ts           ✅ NEW - All categories and brands
│
└── App.tsx                     ✅ UPDATED - New routes

```

## 🔧 Technical Implementation

### New Components

#### SearchBar.tsx
- Real-time search functionality
- Searches through product categories and subcategories
- Dropdown results with highlighting
- Click outside to close
- Clear button

**Props:**
```typescript
interface SearchBarProps {
  className?: string;
}
```

**Usage:**
```tsx
<SearchBar className="flex-grow max-w-2xl" />
```

#### Updated Navbar.tsx
**New Features:**
- Dropdown menus for products and brands
- Language switcher (EN/AR toggle)
- Quote request button
- Enhanced WhatsApp integration
- Mobile-responsive sidebar
- Hover effects and animations

**State Management:**
```typescript
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
const [isBrandsDropdownOpen, setIsBrandsDropdownOpen] = useState(false);
const [language, setLanguage] = useState<'en' | 'ar'>('en');
```

### Data Structure

#### categories.ts
**Exports:**
1. `productCategories` - Array of product categories with subcategories
2. `brandCategories` - Array of brand categories with brands
3. `allBrands` - Flattened array of all brands

**Type Definitions:**
```typescript
interface ProductCategory {
  id: string;
  name: string;
  path: string;
  icon: string;
  subcategories: string[];
}

interface Brand {
  name: string;
  logo: string;
}

interface BrandCategory {
  category: string;
  brands: Brand[];
}
```

### Routing Structure

```typescript
// New Routes
/about              → AboutCompany
/brands             → ShopByBrands
/projects           → Projects
/contact            → Contact
/products/waterproofing → WaterproofingChemicals
/products/paint     → PaintsAndAdhesives
/products/construction → ConstructionMaterials
// ... etc

// Legacy Routes (maintained for backward compatibility)
/water-proofing-items → WaterProofingItems
/paints-and-adhesives → PaintsAndAdhesives
// ... etc
```

## 🎨 Styling

### Color Scheme
```css
Primary Blue: #292A87
Primary Gold: #6B5E18
Success Green: #4E7E48
Slate Grays: #f8fafc, #f1f5f9, #e2e8f0, #cbd5e1
```

### Responsive Breakpoints
```css
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
```

### Key CSS Classes
- `font-poppins` - Applied to all text
- `container mx-auto px-4` - Standard container
- `rounded-xl` - Standard border radius
- `shadow-lg` - Standard shadow

## 🔌 Integration Points

### WhatsApp Integration
**Location:** `src/components/Navbar.tsx`

```typescript
const handleWhatsAppClick = () => {
  window.open('https://wa.me/966XXXXXXXXX', '_blank');
};

const handleQuoteRequest = () => {
  window.open('https://wa.me/966XXXXXXXXX?text=I would like to request a quote', '_blank');
};
```

**To Update:**
Replace `966XXXXXXXXX` with actual WhatsApp Business number.

### Language Switching
**Current Implementation:** UI toggle only

**To Complete:**
1. Install i18next: `npm install react-i18next i18next`
2. Create translation files
3. Wrap app with I18nextProvider
4. Use `useTranslation()` hook in components

**Example Setup:**
```typescript
// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: require('./locales/en.json') },
      ar: { translation: require('./locales/ar.json') }
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });
```

## 📝 TODO: Remaining Tasks

### High Priority
1. **Update WhatsApp Numbers**
   - File: `src/components/Navbar.tsx`
   - Lines: 18-22

2. **Add Brand Logos**
   - Create: `public/brands/` folder
   - Add: PNG files for each brand
   - Update: `src/data/categories.ts` logo paths

3. **Create Remaining Product Pages**
   - Paint & Coating
   - Wood & Interior
   - Services
   - Use `WaterproofingChemicals.tsx` as template

4. **Update Contact Information**
   - File: `src/pages/Contact.tsx`
   - Update: Address, phone, email, hours

### Medium Priority
5. **Implement Arabic Translation**
   - Install i18next
   - Create translation files
   - Update all components

6. **Add Product Images**
   - Replace emoji placeholders
   - Optimize images for web
   - Add alt text for SEO

7. **Add Project Photos**
   - Update `src/pages/Projects.tsx`
   - Add real project images
   - Add project details

### Low Priority
8. **SEO Optimization**
   - Add meta tags
   - Create sitemap
   - Add structured data

9. **Analytics Integration**
   - Google Analytics
   - Facebook Pixel
   - Conversion tracking

10. **Performance Optimization**
    - Image lazy loading
    - Code splitting
    - Bundle optimization

## 🧪 Testing

### Manual Testing Checklist
```bash
# Start dev server
npm run dev

# Test these features:
□ All navigation links work
□ Search bar shows results
□ Product dropdowns work
□ Brand dropdowns work
□ Mobile menu opens/closes
□ WhatsApp buttons work
□ Language switcher toggles
□ All pages load correctly
□ Forms are functional
□ Responsive on mobile
```

### Build Testing
```bash
# Build for production
npm run build

# Preview production build
npm run preview

# Check for errors
npm run lint
```

## 🚀 Deployment

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

### Environment Variables (if needed)
```env
VITE_WHATSAPP_NUMBER=966XXXXXXXXX
VITE_API_URL=https://api.example.com
VITE_GA_ID=G-XXXXXXXXXX
```

### Recommended Hosting
- Vercel (recommended for React)
- Netlify
- AWS Amplify
- GitHub Pages

### Deployment Steps
1. Build the project
2. Test the build locally
3. Push to Git repository
4. Connect to hosting platform
5. Configure domain
6. Set up SSL certificate
7. Configure redirects (if needed)

## 📚 Dependencies

### Core
- React 19.2.0
- React Router DOM 7.13.0
- TypeScript 5.9.3

### UI
- Tailwind CSS 4.1.18
- Lucide React 0.564.0 (icons)
- React Icons 5.5.0
- Framer Motion 12.34.0 (animations)

### Build Tools
- Vite 7.3.1
- ESLint 9.39.1

## 🐛 Known Issues

None currently. All TypeScript diagnostics pass.

## 📞 Support

For technical questions or issues:
1. Check this documentation
2. Review IMPLEMENTATION_GUIDE.md
3. Check QUICK_SETUP.md
4. Contact development team

## 📄 License

[Your License Here]
