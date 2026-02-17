import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import OurProducts from '../components/OurProducts'
import TopCategories from '../components/TopCategories'
import Brands from '../components/Brands'
import Values from '../components/Values'
import LocationSection from '../components/LocationSection'

const Home = () => {
  return (
    <div>
     <Navbar />
     <Hero/>
     <OurProducts/>
     <TopCategories/>
     <Brands/>
     <Values/>
     <LocationSection/>
    </div>
  )
}

export default Home