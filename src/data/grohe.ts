import grohe1 from "../assets/Brands/Grohe/grohe1.png";
import grohe2 from "../assets/Brands/Grohe/grohe2.png";
import grohe3 from "../assets/Brands/Grohe/grohe3.png";
import grohe4 from "../assets/Brands/Grohe/grohe4.png";
import grohe5 from "../assets/Brands/Grohe/grohe5.png";
import grohe6 from "../assets/Brands/Grohe/grohe6.png";
import grohe7 from "../assets/Brands/Grohe/grohe7.png";
import grohe8 from "../assets/Brands/Grohe/grohe8.png";
import grohe9 from "../assets/Brands/Grohe/grohe9.png";
import grohe10 from "../assets/Brands/Grohe/grohe10.png";
import grohe11 from "../assets/Brands/Grohe/grohe11.png";
import grohe12 from "../assets/Brands/Grohe/grohe12.png";
import grohe13 from "../assets/Brands/Grohe/grohe13.png";
import grohe14 from "../assets/Brands/Grohe/grohe14.png";
import grohe15 from "../assets/Brands/Grohe/grohe15.png";
import grohe16 from "../assets/Brands/Grohe/grohe16.png";
import grohe17 from "../assets/Brands/Grohe/grohe17.png";
import grohe18 from "../assets/Brands/Grohe/grohe18.png";
import grohe19 from "../assets/Brands/Grohe/grohe19.png";
import grohe20 from "../assets/Brands/Grohe/grohe20.png";
import grohe21 from "../assets/Brands/Grohe/grohe21.png";
import grohe22 from "../assets/Brands/Grohe/grohe22.png";
import grohe23 from "../assets/Brands/Grohe/grohe23.png";
import grohe24 from "../assets/Brands/Grohe/grohe24.png";
import grohe25 from "../assets/Brands/Grohe/grohe25.png";
import grohe26 from "../assets/Brands/Grohe/grohe26.png";
import grohe27 from "../assets/Brands/Grohe/grohe27.png";
import grohe28 from "../assets/Brands/Grohe/grohe28.png";

const GroheProducts = [
  { id: 1, name: "Thermostatic shower mixer for 2 outlets with integrated shut off/diverter valve", description: "Premium thermostatic shower mixer with dual outlet control, featuring integrated shut-off and diverter valve for precise temperature and flow management", productImg: grohe1 },
  { id: 2, name: "Single-lever shower mixer 1/2", description: "Ergonomic single-lever shower mixer with 1/2 inch connection, offering smooth temperature and flow control with modern design", productImg: grohe2 },
  { id: 3, name: "Shower hose", description: "Flexible and durable shower hose with anti-twist technology, ensuring long-lasting performance and smooth water flow", productImg: grohe3 },
  { id: 4, name: "Shower system - concealed - with Rainshower SmartActive 310 Cube", description: "Concealed shower system featuring the innovative Rainshower SmartActive 310 Cube head for a luxurious rainfall shower experience", productImg: grohe4 },
  { id: 5, name: "Single-lever bath/shower mixer 1/2", description: "Versatile single-lever mixer for bath and shower with 1/2 inch connection, combining functionality with elegant design", productImg: grohe5 },
  { id: 6, name: "Head shower set 286 mm, 1 spray", description: "Large 286mm overhead shower head with single spray pattern, delivering a refreshing and immersive shower experience", productImg: grohe6 },
  { id: 7, name: "BauEdge", description: "BauEdge basin mixer 1/2 M-Size with contemporary angular design, featuring smooth operation and water-saving technology", productImg: grohe7 },
  { id: 8, name: "Eurostyle", description: "Eurostyle basin mixer 1/2 S-Size with sleek European styling, perfect for modern bathrooms with compact spaces", productImg: grohe8 },
  { id: 9, name: "Soap dispenser", description: "Stylish soap dispenser with easy refill mechanism, designed to complement Grohe bathroom fixtures seamlessly", productImg: grohe9 },
  { id: 10, name: "Crystal glass with holder", description: "Elegant crystal glass tumbler with chrome holder, adding a touch of sophistication to your bathroom accessories", productImg: grohe10 },
  { id: 11, name: "3-hole basin mixer S-Size", description: "Three-hole basin mixer in S-Size with separate hot and cold controls, offering classic elegance and precise water control", productImg: grohe11 },
  { id: 12, name: "Vessel Basin", description: "Contemporary vessel basin with smooth curves and premium finish, designed to sit elegantly on countertops", productImg: grohe12 },
  { id: 13, name: "Counter Top Basin", description: "Modern countertop basin with sleek design and durable construction, perfect for contemporary bathroom installations", productImg: grohe13 },
  { id: 14, name: "Wash basin 60 mm - 1 hole punched - with overflow", description: "Standard 60mm wash basin with single tap hole and integrated overflow protection for safe and practical use", productImg: grohe14 },
  { id: 15, name: "Pedestal", description: "Classic pedestal support for wash basins, providing stable mounting while concealing plumbing connections elegantly", productImg: grohe15 },
  { id: 16, name: "Bundle wash basin 60 + Start Flow single-lever basin mixer", description: "Complete bundle featuring 60mm wash basin paired with Start Flow single-lever mixer for convenient installation", productImg: grohe16 },
  { id: 17, name: "Wall hung compact WC", description: "Space-saving wall-hung compact WC with concealed cistern, ideal for modern bathrooms with limited space", productImg: grohe17 },
  { id: 18, name: "Exposed flushing cistern", description: "Traditional exposed flushing cistern with reliable dual-flush mechanism for water efficiency and easy maintenance", productImg: grohe18 },
  { id: 19, name: "Floor standing WC for close coupled combination", description: "Floor-standing WC designed for close-coupled cistern installation, combining comfort with efficient flushing performance", productImg: grohe19 },
  { id: 20, name: "Urinal", description: "Hygienic wall-mounted urinal with smooth ceramic finish and efficient water-saving flush system for commercial applications", productImg: grohe20 },
  { id: 21, name: "WC seat soft close slim", description: "Slim-profile WC seat with soft-close mechanism, preventing slamming and ensuring quiet, gentle closing every time", productImg: grohe21 },
  { id: 22, name: "PowerBox", description: "Universal concealed installation box for wall-mounted fixtures, providing secure mounting and easy access for maintenance", productImg: grohe22 },
  { id: 23, name: "Infra-red Electronic For Urinal ", description: "Touchless infrared electronic flush system for urinals, promoting hygiene and water conservation with automatic operation", productImg: grohe23 },
  { id: 24, name: "Actuation plate", description: "Modern flush actuation plate with dual-flush buttons, featuring sleek design and easy-to-clean surface", productImg: grohe24 },
  { id: 25, name: "Tap And boiler", description: "Instant hot water tap with integrated boiler system, providing immediate access to boiling water for convenience", productImg: grohe25 },
  { id: 26, name: "Magnesium + Zinc filter", description: "Advanced water filtration system with magnesium and zinc elements, improving water quality and protecting fixtures from scale buildup", productImg: grohe26 },
  { id: 27, name: "Soap Dispenser", description: "Premium soap dispenser with large capacity and smooth pump action, designed to match Grohe's bathroom collection", productImg: grohe27 },
  { id: 28, name: "Waste bin recycling separation system", description: "Innovative waste bin with built-in recycling separation system, promoting eco-friendly waste management in modern bathrooms", productImg: grohe28 },
];

export default GroheProducts;