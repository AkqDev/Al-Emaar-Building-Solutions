import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import AboutCompany from './pages/AboutCompany'

// Products/Categories Pages
import ConstructionMaterials from './pages/products/ConstructionMaterials'
import ElectricalItems from './pages/products/ElectricalItems'
import GypsumBoards from './pages/products/GypsumBoards'
import PaintsAndAdhesives from './pages/products/PaintsAndAdhesives'
import PlumbingItems from './pages/products/PlumbingItems'
import PortaCabins from './pages/products/PortaCabins'
import SafetyProducts from './pages/products/SafetyProducts'
import ToolsAndEquipments from './pages/products/ToolsAndEquipments'
import WaterProofingItems from './pages/products/WaterProofingItems'

// Brand pages
import SevenSevenSeven from './pages/Brands/777'
import Adhelant from './pages/Brands/Adhelant'
import Agm from './pages/Brands/Agm'
import Artlife from './pages/Brands/Artlife'
import Bitumat from './pages/Brands/Bitumat'
import Bosch from './pages/Brands/Bosch'
import Cic from './pages/Brands/Cic'
import Cmci from './pages/Brands/Cmci'
import Dadco from './pages/Brands/Dadco'
import Dcp from './pages/Brands/Dcp'
import Dewesser from './pages/Brands/Dewesser'
import Emtop from './pages/Brands/Emtop'
import Fosroc from './pages/Brands/Fosroc'
import Hempel from './pages/Brands/Hempel'
import Jazeera from './pages/Brands/Jazeera'
import Jotun from './pages/Brands/jotun'
import Kapci from './pages/Brands/Kapci'
import Makita from './pages/Brands/Makita'
import Pattex from './pages/Brands/Pattex'
import Pedrolla from './pages/Brands/Pedrolla'
import Saaf from './pages/Brands/Saaf'
import Sabit from './pages/Brands/Sabit'
import Saveto from './pages/Brands/Saveto'
import Sika from './pages/Brands/Sika'
import Total from './pages/Brands/Total'
import Tremco from './pages/Brands/Tremco'
import Weber from './pages/Brands/Weber'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutCompany />} />

        {/* Shop by products routes */}
        <Route path="/products/construction-materials" element={<ConstructionMaterials />} />
        <Route path="/products/electrical-items" element={<ElectricalItems />} />
        <Route path="/products/gypsum-boards" element={<GypsumBoards />} />
        <Route path="/products/paints-adhesives" element={<PaintsAndAdhesives />} />
        <Route path="/products/plumbing-items" element={<PlumbingItems />} />
        <Route path="/products/porta-cabins" element={<PortaCabins />} />
        <Route path="/products/safety-products" element={<SafetyProducts />} />
        <Route path="/products/tools-equipments" element={<ToolsAndEquipments />} />
        <Route path="/products/waterproofing-items" element={<WaterProofingItems />} />

        {/* Brand pages routes */}
        <Route path="/777-products" element={<SevenSevenSeven />} />
        <Route path="/adhelant-products" element={<Adhelant />} />
        <Route path="/agm-products" element={<Agm />} />
        <Route path="/artlife-products" element={<Artlife />} />
        <Route path="/bitumat-products" element={<Bitumat />} />
        <Route path="/bosch-products" element={<Bosch />} />
        <Route path="/cic-products" element={<Cic />} />
        <Route path="/cmci-products" element={<Cmci />} />
        <Route path="/dadco-products" element={<Dadco />} />
        <Route path="/dcp-products" element={<Dcp />} />
        <Route path="/dewesser-products" element={<Dewesser />} />
        <Route path="/emtop-products" element={<Emtop />} />
        <Route path="/fosroc-products" element={<Fosroc />} />
        <Route path="/hempel-products" element={<Hempel />} />
        <Route path="/jazeera-products" element={<Jazeera />} />
        <Route path="/jotun-products" element={<Jotun />} />
        <Route path="/kapci-products" element={<Kapci />} />
        <Route path="/makita-products" element={<Makita />} />
        <Route path="/pattex-products" element={<Pattex />} />
        <Route path="/pedrolla-products" element={<Pedrolla />} />
        <Route path="/saaf-products" element={<Saaf />} />
        <Route path="/sabit-products" element={<Sabit />} />
        <Route path="/saveto-products" element={<Saveto />} />
        <Route path="/sika-products" element={<Sika />} />
        <Route path="/total-products" element={<Total />} />
        <Route path="/tremco-products" element={<Tremco />} />
        <Route path="/weber-products" element={<Weber />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </Router>
  )
}

export default App
