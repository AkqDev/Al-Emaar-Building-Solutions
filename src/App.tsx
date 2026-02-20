import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutCompany from './pages/AboutCompany'
import ConstructionMaterials from './pages/products/ConstructionMaterials'
import ElectricalItems from './pages/products/ElectricalItems'
import GypsumBoards from './pages/products/GypsumBoards'
import PaintsAndAdhesives from './pages/products/PaintsAndAdhesives'
import PlumbingItems from './pages/products/PlumbingItems'
import PotaCabins from './pages/products/PotaCabins'
import SafetyProducts from './pages/products/SafetyProducts'
import ToolsAndEquipments from './pages/products/ToolsAndEquipments'
import WaterProofingItems from './pages/products/WaterProofingItems'


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
        <Route path="/products/porta-cabins" element={<PotaCabins />} />
        <Route path="/products/safety-products" element={<SafetyProducts />} />
        <Route path="/products/tools-equipments" element={<ToolsAndEquipments />} />
        <Route path="/products/waterproofing-items" element={<WaterProofingItems />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
