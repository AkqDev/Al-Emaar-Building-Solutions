// Brands Index - Central registry of all brands with their products and routes
import BoschProducts from './Bosch';
import MakitaProducts from './Makita';
import TotalProducts from './Total';
import SaabitProducts from './Saabit';
import SevenSevenSevenProducts from './777';
import AdhelantProducts from './Adhelant';
import AgmProducts from './agm';
import ArtlifeProducts from './Artlife';
import DadcoProducts from './Dadco';
import DewesserProducts from './Dewesser';
import EmtopProducts from './Emtop';
import HempelProducts from './Hempel';
import PedrollaProducts from './Pedrolla';
import SaafProducts from './saaf';
import SavetoProducts from './Saveto';
import BitumatProducts from './Bitumat';
import CICProducts from './Cic';
import CMCIProducts from './Cmci';
import DcpProducts from './Dcp';
import FosrocProducts from './Fosroc';
import JazeeraProducts from './Jazeera';
import JotunProducts from './Jotun';
import KapciProducts from './Kapci';
import PattexProducts from './Pattex';
import SikaProducts from './Sika';
import TremcoProducts from './Tremco';
import WeberProducts from './Weber';
import GroheProducts from './grohe';
import JeddahPaintsProducts from './JeddahPaints';
import KhayaatProducts from './khayaat';
import MadaProducts from './mada';
import SaudiCeramicsProducts from './saudiCeramics';
import AlfanarProducts from './Alfanar';
import BahraProducts from './Bahra';
import OrientProducts from './Orient';

export interface BrandInfo {
  id: string;
  name: string;
  path: string;
  products: Array<{
    id: number;
    name: string;
    description: string;
    productImg: string;
  }>;
}

export const brandsIndex: BrandInfo[] = [
  {
    id: 'bosch',
    name: 'Bosch',
    path: '/bosch-products',
    products: BoschProducts
  },
  {
    id: 'makita',
    name: 'Makita',
    path: '/makita-products',
    products: MakitaProducts
  },
  {
    id: 'total',
    name: 'Total',
    path: '/total-products',
    products: TotalProducts
  },
  {
    id: 'sabit',
    name: 'Sabit',
    path: '/sabit-products',
    products: SaabitProducts
  },
  {
    id: '777',
    name: '777',
    path: '/777-products',
    products: SevenSevenSevenProducts
  },
  {
    id: 'adhelant',
    name: 'Adhelant',
    path: '/adhelant-products',
    products: AdhelantProducts
  },
  {
    id: 'agm',
    name: 'AGM',
    path: '/agm-products',
    products: AgmProducts
  },
  {
    id: 'artlife',
    name: 'Artlife',
    path: '/artlife-products',
    products: ArtlifeProducts
  },
  {
    id: 'dadco',
    name: 'Dadco',
    path: '/dadco-products',
    products: DadcoProducts
  },
  {
    id: 'dewesser',
    name: 'Dewesser',
    path: '/dewesser-products',
    products: DewesserProducts
  },
  {
    id: 'emtop',
    name: 'Emtop',
    path: '/emtop-products',
    products: EmtopProducts
  },
  {
    id: 'hempel',
    name: 'Hempel',
    path: '/hempel-products',
    products: HempelProducts
  },
  {
    id: 'pedrolla',
    name: 'Pedrolla',
    path: '/pedrolla-products',
    products: PedrollaProducts
  },
  {
    id: 'saaf',
    name: 'Saaf',
    path: '/saaf-products',
    products: SaafProducts
  },
  {
    id: 'saveto',
    name: 'Saveto',
    path: '/saveto-products',
    products: SavetoProducts
  },
  {
    id: 'bitumat',
    name: 'Bitumat',
    path: '/bitumat-products',
    products: BitumatProducts
  },
  {
    id: 'cic',
    name: 'CIC',
    path: '/cic-products',
    products: CICProducts
  },
  {
    id: 'cmci',
    name: 'CMCI',
    path: '/cmci-products',
    products: CMCIProducts
  },
  {
    id: 'dcp',
    name: 'DCP',
    path: '/dcp-products',
    products: DcpProducts
  },
  {
    id: 'fosroc',
    name: 'Fosroc',
    path: '/fosroc-products',
    products: FosrocProducts
  },
  {
    id: 'jazeera',
    name: 'Jazeera',
    path: '/jazeera-products',
    products: JazeeraProducts
  },
  {
    id: 'jotun',
    name: 'Jotun',
    path: '/jotun-products',
    products: JotunProducts
  },
  {
    id: 'kapci',
    name: 'Kapci',
    path: '/kapci-products',
    products: KapciProducts
  },
  {
    id: 'pattex',
    name: 'Pattex',
    path: '/pattex-products',
    products: PattexProducts
  },
  {
    id: 'sika',
    name: 'Sika',
    path: '/sika-products',
    products: SikaProducts
  },
  {
    id: 'tremco',
    name: 'Tremco',
    path: '/tremco-products',
    products: TremcoProducts
  },
  {
    id: 'weber',
    name: 'Weber',
    path: '/weber-products',
    products: WeberProducts
  },
  {
    id: 'grohe',
    name: 'Grohe',
    path: '/grohe-products',
    products: GroheProducts
  },
  {
    id: 'jeddah-paints',
    name: 'Jeddah Paints',
    path: '/jeddah-products',
    products: JeddahPaintsProducts
  },
  {
    id: 'khayaat',
    name: 'Khayaat',
    path: '/khayaat-products',
    products: KhayaatProducts
  },
  {
    id: 'mada',
    name: 'Mada',
    path: '/mada-products',
    products: MadaProducts
  },
  {
    id: 'saudi-ceramics',
    name: 'Saudi Ceramics',
    path: '/saudiCeramics-products',
    products: SaudiCeramicsProducts
  },
  {
    id: 'alfanar',
    name: 'Alfanar',
    path: '/alfanar-products',
    products: AlfanarProducts
  },
  {
    id: 'bahra',
    name: 'Bahra',
    path: '/bahra-products',
    products: BahraProducts
  },
  {
    id: 'orient',
    name: 'Orient',
    path: '/orient-products',
    products: OrientProducts
  }
];
