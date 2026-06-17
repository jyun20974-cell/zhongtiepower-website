// 产品数据 - 扩充到15个
export const products = [
  {
    id: 'oil-transformer',
    name: 'Oil-Immersed Power Transformer',
    nameZh: '油浸式电力变压器',
    spec: '10kV - 500kV | Up to 1000 MVA',
    specZh: '10kV-500kV | 最大 1000 兆伏安',
    highlight: '99.7% Efficiency · 50+ Year Lifespan',
    highlightZh: '99.7% 效率 · 50 年使用寿命',
    category: 'transformer'
  },
  {
    id: 'dry-transformer',
    name: 'Dry-Type Distribution Transformer',
    nameZh: '干式变压器',
    spec: '10kV - 35kV | Cast Resin',
    specZh: '10kV-35kV | 浇注绝缘',
    highlight: 'Class F Insulation · Low Noise',
    highlightZh: 'F 级绝缘 · 低噪设计',
    category: 'transformer'
  },
  {
    id: 'sf6-switchgear',
    name: 'SF6 Gas-Insulated Switchgear',
    nameZh: 'SF6 气体绝缘开关柜',
    spec: 'Up to 550kV | Compact Design',
    specZh: '最高 550kV | 紧凑型结构',
    highlight: 'IEC 62271 · Maintenance-Free',
    highlightZh: '符合 IEC 62271 · 免维护',
    category: 'switchgear'
  },
  {
    id: 'vacuum-breaker',
    name: 'Vacuum Circuit Breaker',
    nameZh: '真空断路器',
    spec: '12kV - 40.5kV | High Breaking',
    specZh: '12kV-40.5kV | 高分断能力',
    highlight: '100,000 Operations · Fast Break',
    highlightZh: '10 万次机械寿命 · 快速分断',
    category: 'switchgear'
  },
  {
    id: 'prefab-substation',
    name: 'Prefabricated Substation',
    nameZh: '预装式变电站',
    spec: 'Up to 35kV | Outdoor Ready',
    specZh: '最高 35kV | 户外型',
    highlight: 'Fast Deployment · All-in-One',
    highlightZh: '快速部署 · 一体化设计',
    category: 'substation'
  },
  {
    id: 'ring-main-unit',
    name: 'Ring Main Unit (RMU)',
    nameZh: '环网柜',
    spec: '12-24kV | SF6 Insulated',
    specZh: '12-24kV | SF6 气体绝缘',
    highlight: 'Compact Footprint · Reliable',
    highlightZh: '占地面积小 · 运行可靠',
    category: 'switchgear'
  },
  {
    id: 'distribution-box',
    name: 'LV Distribution Box',
    nameZh: '低压配电箱',
    spec: '400V | Indoor/Outdoor',
    specZh: '400V | 户内/户外型',
    highlight: 'Custom Config · IP65 Rated',
    highlightZh: '可定制配置 · IP65 防护',
    category: 'distribution'
  },
  {
    id: 'mobile-substation',
    name: 'Compact Mobile Substation',
    nameZh: '移动箱式变电站',
    spec: 'Up to 35kV | Skid-Mounted',
    specZh: '最高 35kV | 撬装式',
    highlight: '24h Rapid Deployment',
    highlightZh: '24 小时快速部署',
    category: 'substation'
  },
  // 新增产品
  {
    id: 'traction-transformer',
    name: 'Railway Traction Transformer',
    nameZh: '铁路牵引变压器',
    spec: '27.5kV - 55kV | High Overload',
    specZh: '27.5kV-55kV | 高过载能力',
    highlight: 'V-Connection · Anti-Vibration',
    highlightZh: 'V 接法 · 抗振动设计',
    category: 'transformer'
  },
  {
    id: 'box-substation',
    name: 'Box-Type Substation',
    nameZh: '箱式变电站',
    spec: '10kV - 35kV | European Style',
    specZh: '10kV-35kV | 欧式结构',
    highlight: 'Compact · Easy Maintenance',
    highlightZh: '紧凑设计 · 维护便捷',
    category: 'substation'
  },
  {
    id: 'combined-transformer',
    name: 'Combined Transformer',
    nameZh: '组合式变压器',
    spec: '10kV - 35kV | Pad-Mounted',
    specZh: '10kV-35kV | 美式箱变',
    highlight: 'Underground Cable · Safe',
    highlightZh: '地下电缆进出 · 安全可靠',
    category: 'transformer'
  },
  {
    id: 'mv-switchgear',
    name: 'MV Metal-Clad Switchgear',
    nameZh: '中压铠装开关柜',
    spec: '3.6kV - 40.5kV | Air Insulated',
    specZh: '3.6kV-40.5kV | 空气绝缘',
    highlight: 'IEC 62271-200 · Interlocked',
    highlightZh: 'IEC 62271-200 · 五防联锁',
    category: 'switchgear'
  },
  {
    id: 'high-voltage-gis',
    name: 'High Voltage GIS',
    nameZh: '高压气体绝缘开关设备',
    spec: '72.5kV - 252kV | SF6 Insulated',
    specZh: '72.5kV-252kV | SF6 绝缘',
    highlight: 'Fully Sealed · Long Life',
    highlightZh: '全密封结构 · 超长寿命',
    category: 'switchgear'
  },
  {
    id: 'reactive-compensation',
    name: 'Reactive Power Compensation',
    nameZh: '无功补偿装置',
    spec: 'Up to 35kV | Automatic',
    specZh: '最高 35kV | 自动投切',
    highlight: 'Power Factor > 0.95 · Energy Save',
    highlightZh: '功率因数 > 0.95 · 节能降耗',
    category: 'distribution'
  },
  {
    id: 'solar-grid-box',
    name: 'Solar Grid-Connected Box',
    nameZh: '光伏并网箱',
    spec: '400V - 35kV | IP65',
    specZh: '400V-35kV | IP65 防护',
    highlight: 'Anti-Islanding · Smart Monitor',
    highlightZh: '防孤岛保护 · 智能监控',
    category: 'distribution'
  }
];

// 项目案例数据 - 扩充到13个
export const projects = [
  {
    id: 'beijing-shanghai-hsr',
    title: 'Beijing-Shanghai High-Speed Railway',
    titleZh: '京沪高速铁路电气化工程',
    industry: 'Railway',
    industryZh: '铁路交通',
    scale: '1,318 km',
    year: '2023',
    summary: 'Complete electrification system design and equipment supply for China flagship high-speed rail route.',
    summaryZh: '为中国旗舰高铁线路提供完整的电气化系统设计和设备供应。',
    category: 'domestic',
    imageLabel: 'HSR · 1318km'
  },
  {
    id: 'shenzhen-metro-line14',
    title: 'Shenzhen Metro Line 14',
    titleZh: '深圳地铁 14 号线供电系统',
    industry: 'Urban Transit',
    industryZh: '城市轨道交通',
    scale: '50.3 km',
    year: '2022',
    summary: 'Full-line power distribution system and substations for high-capacity urban metro line.',
    summaryZh: '大运量城市轨道交通线路的全线配电系统和变电站。',
    category: 'domestic',
    imageLabel: 'Metro · 50km'
  },
  {
    id: 'state-grid-500kv',
    title: 'State Grid 500kV Substation',
    titleZh: '国家电网 500kV 变电站工程',
    industry: 'Power Grid',
    industryZh: '电网系统',
    scale: '500 kV',
    year: '2023',
    summary: 'Ultra-high voltage substation equipment supply and integration for national grid backbone.',
    summaryZh: '为国家电网骨干网架提供超高压变电站设备供应与集成。',
    category: 'domestic',
    imageLabel: '500kV UHV'
  },
  {
    id: 'chengdu-guiyang-hsr',
    title: 'Chengdu-Guiyang High-Speed Railway',
    titleZh: '成贵高铁电气化工程',
    industry: 'Railway',
    industryZh: '铁路交通',
    scale: '648 km',
    year: '2023',
    summary: 'Complete traction power supply system for mountainous high-speed railway in Southwest China.',
    summaryZh: '为中国西南山区高铁提供完整牵引供电系统。',
    category: 'domestic',
    imageLabel: 'HSR · 648km'
  },
  {
    id: 'guangzhou-metro',
    title: 'Guangzhou Metro Power System',
    titleZh: '广州地铁供电系统工程',
    industry: 'Urban Transit',
    industryZh: '城市轨道交通',
    scale: '35 km',
    year: '2022',
    summary: 'Traction substations and distribution equipment for new metro line expansion.',
    summaryZh: '新地铁线路扩建的牵引变电站及配电设备。',
    category: 'domestic',
    imageLabel: 'Metro · 35km'
  },
  {
    id: 'inner-mongolia-wind',
    title: 'Inner Mongolia Wind Farm Substation',
    titleZh: '内蒙古风电场变电站',
    industry: 'Renewable Energy',
    industryZh: '新能源',
    scale: '200 MW',
    year: '2023',
    summary: 'Step-up substation and collection system for large-scale wind power base.',
    summaryZh: '大型风电基地升压变电站及集电系统。',
    category: 'domestic',
    imageLabel: 'Wind · 200MW'
  },
  {
    id: 'ethiopia-railway',
    title: 'Ethiopia-Djibouti Railway',
    titleZh: '埃塞俄比亚-吉布提铁路电气化',
    industry: 'Railway',
    industryZh: '铁路交通',
    scale: '752 km',
    year: '2022',
    summary: 'First cross-border electrified railway in East Africa — complete power system design and delivery.',
    summaryZh: '东非首条跨境电气化铁路 — 完整电力系统设计与交付。',
    category: 'overseas',
    imageLabel: 'Africa · 752km'
  },
  {
    id: 'jakarta-bandung',
    title: 'Jakarta-Bandung HSR',
    titleZh: '雅万高铁电力系统',
    industry: 'Railway',
    industryZh: '铁路交通',
    scale: '142 km',
    year: '2023',
    summary: 'First high-speed railway in Southeast Asia — power and electrification system delivery.',
    summaryZh: '东南亚首条高速铁路 — 电力与电气化系统整体交付。',
    category: 'overseas',
    imageLabel: 'Indonesia · 142km'
  },
  {
    id: 'pakistan-grid',
    title: 'Pakistan Grid Modernization',
    titleZh: '巴基斯坦电网现代化升级',
    industry: 'Power Grid',
    industryZh: '电网系统',
    scale: '230 kV',
    year: '2022',
    summary: '132kV/230kV substation and transmission line modernization across multiple regions.',
    summaryZh: '多区域 132kV/230kV 变电站与输电线路现代化工程。',
    category: 'overseas',
    imageLabel: 'Pakistan · 230kV'
  },
  {
    id: 'nigeria-substation',
    title: 'Nigeria 132kV Substation',
    titleZh: '尼日利亚 132kV 变电站',
    industry: 'Power Grid',
    industryZh: '电网系统',
    scale: '132 kV',
    year: '2023',
    summary: 'Turnkey substation project including transformers, switchgear and protection systems.',
    summaryZh: '交钥匙变电站工程，含变压器、开关柜及保护系统。',
    category: 'overseas',
    imageLabel: 'Nigeria · 132kV'
  },
  {
    id: 'kenya-transmission',
    title: 'Kenya Transmission Line',
    titleZh: '肯尼亚输电线路工程',
    industry: 'Power Grid',
    industryZh: '电网系统',
    scale: '400 km',
    year: '2022',
    summary: 'High-voltage transmission line and associated substation equipment supply.',
    summaryZh: '高压输电线路及配套变电站设备供应。',
    category: 'overseas',
    imageLabel: 'Kenya · 400km'
  },
  {
    id: 'saudi-arabia-distribution',
    title: 'Saudi Arabia Distribution Project',
    titleZh: '沙特阿拉伯配电项目',
    industry: 'Power Grid',
    industryZh: '电网系统',
    scale: '13.8kV',
    year: '2023',
    summary: 'Medium voltage distribution transformers and switchgear for industrial park.',
    summaryZh: '工业园区中压配电变压器及开关柜供应。',
    category: 'overseas',
    imageLabel: 'Saudi · 13.8kV'
  },
  {
    id: 'thailand-railway',
    title: 'Thailand Railway Electrification',
    titleZh: '泰国铁路电气化工程',
    industry: 'Railway',
    industryZh: '铁路交通',
    scale: '253 km',
    year: '2024',
    summary: 'Traction power supply system for double-track railway electrification upgrade.',
    summaryZh: '复线铁路电气化升级牵引供电系统。',
    category: 'overseas',
    imageLabel: 'Thailand · 253km'
  }
];
