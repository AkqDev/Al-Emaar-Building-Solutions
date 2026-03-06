import SEO from '../components/SEO'
import Hero from '../components/Hero'
import OurProducts from '../components/OurProducts'
import TopCategories from '../components/TopCategories'
import Brands from '../components/Brands'
import Values from '../components/Values'
import MapComponent from '../components/MapComponent'
import SEOContent from '../components/SEOContent'

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Building Materials Supplier in Jeddah - Al Emaar Al Areeq Trading Est.",
    "description": "Leading building materials supplier in Jeddah providing construction materials, epoxy flooring, waterproofing solutions, industrial paints, power tools, plumbing and electrical materials.",
    "url": "https://alemaaralareq.com",
    "mainEntity": {
      "@type": "HardwareStore",
      "name": "Al Emaar Al Areeq Trading Est.",
      "description": "Complete construction materials under one roof in Jeddah",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jeddah",
        "addressRegion": "Makkah",
        "addressCountry": "SA"
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://alemaaralareq.com"
        }
      ]
    }
  };

  return (
    <>
      <SEO 
        title="Building Materials Supplier in Jeddah | Al Emaar Al Areeq Trading Est."
        description="Leading building materials supplier in Jeddah. We supply construction materials, epoxy flooring, waterproofing, industrial paints, power tools, plumbing & electrical materials. Authorized dealer for Sika, Jotun, Bosch, Makita, Weber, DCP, Bitumat, CIC Saudi."
        keywords="building materials supplier in Jeddah, construction materials shop Jeddah, building materials company Jeddah, epoxy supplier Jeddah, waterproofing materials Jeddah, industrial paint supplier Jeddah, power tools supplier Jeddah, plumbing materials supplier Jeddah, electrical materials supplier Jeddah, tile adhesive supplier Jeddah, gypsum board supplier Jeddah, Sika epoxy supplier Jeddah, Jotun paint supplier Jeddah, Bosch tools supplier Jeddah, Makita tools Jeddah, Total Tools supplier Jeddah, Emtop tools distributor KSA, Al Jazeera Paints dealer Jeddah, KAPCI Coatings steel paint supplier, Hempel road marking paint, DCP epoxy dealer, Saveto tile adhesive, Weber grout supplier, Bitumat roof coating, CIC Saudi waterproofing, Bahra Cables cable supplier, Alfanar electrical materials, Pedrollo submersible pump supplier, مورد مواد بناء جدة, محل مواد بناء جدة, مورد إيبوكسي جدة, مواد عزل مائي جدة, مورد دهانات صناعية جدة, مورد عدد كهربائية جدة, مورد سباكة جدة, مورد مواد كهرباء جدة, مورد كيماويات بناء جدة, مورد لاصق بلاط جدة, مورد جبس بورد جدة"
        canonical="https://alemaaralareq.com/"
        schema={homeSchema}
      />
      <div className="pt-0">
        <Hero/>
        <OurProducts/>
        <TopCategories/>
        <Brands/>
        <SEOContent/>
        <Values/>
        <MapComponent/>
      </div>
    </>
  )
}

export default Home