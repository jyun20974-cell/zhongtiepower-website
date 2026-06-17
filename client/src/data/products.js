// Products data with real images
export const products = [
  {
    id: 'oil-transformer',
    name: 'Oil-Immersed Power Transformer',
    spec: '10kV - 500kV | Up to 1000 MVA',
    tag: 'Core Product',
    img: '/images/products/oil-transformer.jpg',
    features: ['High Efficiency >99.7%', 'Low Loss Design', 'IEC 60076 Certified', '50+ Year Lifespan'],
    category: 'transformer'
  },
  {
    id: 'dry-transformer',
    name: 'Dry-Type Distribution Transformer',
    spec: '10kV - 35kV | Cast Resin',
    tag: 'Fire Resistant',
    img: '/images/products/dry-transformer.jpg',
    features: ['Class F Insulation', 'Low Noise <45dB', 'Self-Extinguishing', 'Eco-Friendly'],
    category: 'transformer'
  },
  {
    id: 'sf6-switchgear',
    name: 'SF6 Gas-Insulated Switchgear',
    spec: 'Up to 550kV | Compact Design',
    tag: 'High Voltage',
    img: '/images/products/sf6-switchgear.jpg',
    features: ['IEC 62271 Standard', 'Compact Modular', 'Maintenance-Free', 'High Reliability'],
    category: 'switchgear'
  },
  {
    id: 'vacuum-breaker',
    name: 'Vacuum Circuit Breaker',
    spec: '12kV - 40.5kV | High Breaking',
    tag: 'Reliable',
    img: '/images/products/vacuum-breaker.jpg',
    features: ['100,000 Operations', 'Quick Make/Break', 'Long Service Life', 'Compact Design'],
    category: 'switchgear'
  },
  {
    id: 'prefab-substation',
    name: 'Prefabricated Substation',
    spec: 'Up to 35kV | Outdoor Ready',
    tag: 'Plug & Play',
    img: '/images/products/prefab-substation.jpg',
    features: ['Factory Pre-Assembled', 'Fast Deployment', 'Weatherproof', 'Modular Design'],
    category: 'substation'
  },
  {
    id: 'rmu',
    name: 'Ring Main Unit (RMU)',
    spec: '12-24kV | SF6 Insulated',
    tag: 'Compact',
    img: '/images/products/ring-main-unit.jpg',
    features: ['Compact Footprint', 'Safe & Reliable', 'Low Maintenance', 'Wide Application'],
    category: 'switchgear'
  },
  {
    id: 'distribution-box',
    name: 'LV Distribution Box',
    spec: '400V | Indoor/Outdoor',
    tag: 'Custom Config',
    img: '/images/products/distribution-box.jpg',
    features: ['Customizable', 'IP65 Rated', 'Durable Build', 'Easy Installation'],
    category: 'distribution'
  },
  {
    id: 'compact-substation',
    name: 'Compact Mobile Substation',
    spec: 'Up to 35kV | Skid-Mounted',
    tag: 'Rapid Deploy',
    img: '/images/products/compact-substation.jpg',
    features: ['24h Deployment', 'Mobile & Portable', 'Fully Integrated', 'Emergency Ready'],
    category: 'substation'
  }
];

export const getProductsByCategory = (cat) => products.filter(p => p.category === cat);
export const getProductById = (id) => products.find(p => p.id === id);
