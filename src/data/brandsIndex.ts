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
import { hempelProducts } from './Hempel';
import PedrollaProducts from './Pedrolla';
import SaafProducts from './saaf';
import SavetoProducts from './Saveto';

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
    products: hempelProducts
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
  // Add more brands as they become available
  {
    id: 'bitumat',
    name: 'Bitumat',
    path: '/bitumat-products',
    products: []
  },
  {
    id: 'cic',
    name: 'CIC',
    path: '/cic-products',
    products: []
  },
  {
    id: 'cmci',
    name: 'CMCI',
    path: '/cmci-products',
    products: []
  },
  {
    id: 'dcp',
    name: 'DCP',
    path: '/dcp-products',
    products: []
  },
  {
    id: 'fosroc',
    name: 'Fosroc',
    path: '/fosroc-products',
    products: []
  },
  {
    id: 'gulfmaid',
    name: 'Gulfmaid',
    path: '/gulfmaid-products',
    products: []
  },
  {
    id: 'jazeera',
    name: 'Jazeera',
    path: '/jazeera-products',
    products: []
  },
  {
    id: 'jotun',
    name: 'Jotun',
    path: '/jotun-products',
    products: []
  },
  {
    id: 'kapci',
    name: 'Kapci',
    path: '/kapci-products',
    products: []
  },
  {
    id: 'pattex',
    name: 'Pattex',
    path: '/pattex-products',
    products: []
  },
  {
    id: 'sika',
    name: 'Sika',
    path: '/sika-products',
    products: []
  },
  {
    id: 'tremco',
    name: 'Tremco',
    path: '/tremco-products',
    products: []
  },
  {
    id: 'weber',
    name: 'Weber',
    path: '/weber-products',
    products: []
  }
];
