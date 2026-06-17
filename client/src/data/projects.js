export const projects = [
  {
    id: 'hsr-beijing-shanghai',
    title: 'Beijing-Shanghai HSR Electrification',
    category: 'domestic',
    industry: 'Railway',
    scale: '1,318 km',
    year: '2023',
    summary: 'Complete electrification system design and equipment supply for China flagship high-speed rail route.',
    img: '/images/projects/highspeed-railway.jpg',
    items: '2,000+ Units'
  },
  {
    id: 'metro-line14',
    title: 'Shenzhen Metro Line 14 Power Supply',
    category: 'domestic',
    industry: 'Urban Transit',
    scale: '50.3 km',
    year: '2022',
    summary: 'Full-line power distribution system and substations for high-capacity urban metro line.',
    img: '/images/projects/metro-transit.jpg',
    items: '800+ Units'
  },
  {
    id: 'state-grid-500kv',
    title: 'State Grid 500kV Substation Project',
    category: 'domestic',
    industry: 'Power Grid',
    scale: '500 kV',
    year: '2023',
    summary: 'Ultra-high voltage substation equipment supply and integration for national grid backbone.',
    img: '/images/projects/power-substation.jpg',
    items: '150+ Units'
  },
  {
    id: 'ethiopia-railway',
    title: 'Ethiopia-Djibouti Railway Power System',
    category: 'overseas',
    industry: 'Railway',
    scale: '752 km',
    year: '2022',
    summary: 'First cross-border electrified railway in East Africa - complete power system design and delivery.',
    img: '/images/projects/africa-railway.jpg',
    items: '1,200+ Units'
  },
  {
    id: 'jakarta-bandung',
    title: 'Jakarta-Bandung HSR Power Supply',
    category: 'overseas',
    industry: 'Railway',
    scale: '142 km',
    year: '2023',
    summary: 'First high-speed railway in Southeast Asia - power and electrification system delivery.',
    img: '/images/projects/highspeed-railway.jpg',
    items: '600+ Units'
  },
  {
    id: 'pakistan-grid',
    title: 'Pakistan Grid Modernization',
    category: 'overseas',
    industry: 'Power Grid',
    scale: '230 kV',
    year: '2022',
    summary: '132kV/230kV substation and transmission line modernization across multiple regions.',
    img: '/images/projects/power-substation.jpg',
    items: '300+ Units'
  }
];

export const domesticProjects = projects.filter(p => p.category === 'domestic');
export const overseasProjects = projects.filter(p => p.category === 'overseas');
