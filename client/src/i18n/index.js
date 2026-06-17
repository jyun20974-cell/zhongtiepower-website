import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 直接内联翻译资源，避免 JSON import 兼容性问题
const enResources = {
  nav: {
    home: 'Home',
    about: 'About Us',
    products: 'Products',
    projects: 'Projects',
    downloads: 'Downloads',
    contact: 'Contact Us',
    getQuote: 'Get a Quote',
    requestQuote: 'Request Quote'
  },
  home: {
    companyOverviewTitle: 'Why Choose Xuzhou CREC Group',
    companyOverviewSubtitle: 'Over 70 years of power equipment manufacturing experience, delivering reliable solutions worldwide.',
    ourAdvantages: 'Our Core Advantages',
    featuredProducts: 'Featured Products',
    ourGlobalNetwork: 'Global Service Network',
    globalDesc: 'Our products have been successfully deployed in 30+ countries, providing localized service and technical support.',
    featuredProjects: 'Featured Projects',
    testimonials: 'Client Testimonials',
    readyToPower: 'Ready to Power Your Project?',
    readyDesc: 'Let our expert team provide the best solution for your power infrastructure needs. Get free technical consultation and quotation.',
    getFreeQuote: 'Get Free Quote',
    advantage1Title: '70+ Years of Experience',
    advantage1Desc: 'Since 1952, dedicated to power equipment manufacturing with continuous innovation in processes and technology.',
    advantage1Data: 'Since 1952',
    advantage2Title: 'Global Service Network',
    advantage2Desc: 'Products exported to 30+ countries across Asia, Africa, Middle East, South America and Europe.',
    advantage2Data: '30+ Countries',
    advantage3Title: 'Smart Manufacturing',
    advantage3Desc: 'Automated production lines, precision testing equipment, and strict quality control systems.',
    advantage3Data: '80,000 sqm Base',
    advantage4Title: 'Full International Certifications',
    advantage4Desc: 'CE, UL, IEC 61439, ISO 9001, ISO 14001, ISO 45001 — meeting global market requirements.',
    advantage4Data: 'Full Certified',
    advantage5Title: 'State Grid Certified Supplier',
    advantage5Desc: 'Long-term certified supplier for State Grid and China Southern Power Grid.',
    advantage5Data: 'Qualified Supplier',
    advantage6Title: 'Custom Engineering Services',
    advantage6Desc: 'Professional engineering team providing full-cycle customized solutions from design to after-sales.',
    advantage6Data: 'Full-Cycle Service',
    learnMoreAboutUs: 'Learn More About Us',
    highlight1: 'State Grid & China Southern Power Grid certified supplier',
    highlight2: 'Full international certifications: CE, UL, IEC, ISO 9001/14001/45001',
    highlight3: '80,000 sqm smart manufacturing base with automated production lines',
    highlight4: 'Products exported to 30+ countries across 6 continents',
    videoDuration: '3:00',
    watchFullVersion: 'Watch Full Version'
  },
  footer: {
    quickLinks: 'Quick Links',
    productCategories: 'Product Categories',
    contactInfo: 'Contact Info',
    copyright: '© 2026 Xuzhou CREC Group. All rights reserved.'
  }
};

const zhResources = {
  nav: {
    home: '首页',
    about: '关于我们',
    products: '产品中心',
    projects: '项目案例',
    downloads: '资料下载',
    contact: '联系我们',
    getQuote: '获取报价',
    requestQuote: '立即询价'
  },
  home: {
    companyOverviewTitle: '为什么选择徐州中铁电气',
    companyOverviewSubtitle: '70 余年电力设备制造经验，为全球客户提供可靠解决方案。',
    ourAdvantages: '核心优势',
    featuredProducts: '精选产品',
    ourGlobalNetwork: '全球服务网络',
    globalDesc: '产品已成功部署于全球 30+ 国家，提供本地化服务与技术支持。',
    featuredProjects: '标杆项目',
    testimonials: '客户评价',
    readyToPower: '为您的项目提供电力支持？',
    readyDesc: '让我们的专家团队为您的电力基础设施需求提供最佳解决方案。获取免费的技术咨询与报价。',
    getFreeQuote: '免费获取报价',
    advantage1Title: '70 余年制造经验',
    advantage1Desc: '自 1952 年起深耕电力设备制造，不断创新工艺与技术，确保每一台设备的可靠性与高性能。',
    advantage1Data: '1952 年创立',
    advantage2Title: '全球化服务网络',
    advantage2Desc: '产品出口至亚洲、非洲、中东、南美、欧洲 30+ 国家，在主要市场设有本地服务中心。',
    advantage2Data: '30+ 国家',
    advantage3Title: '智能制造能力',
    advantage3Desc: '自动化生产线、精密检测设备、严格的质量控制体系，确保每一台设备符合国际标准。',
    advantage3Data: '8 万平基地',
    advantage4Title: '国际认证齐全',
    advantage4Desc: 'CE、UL、IEC 61439、ISO 9001、ISO 14001、ISO 45001 全认证，满足主要全球市场要求。',
    advantage4Data: '全体系认证',
    advantage5Title: '国家电网合格供应商',
    advantage5Desc: '国家电网和南方电网的长期合格供应商，在超高压及特高压领域拥有丰富的项目经验。',
    advantage5Data: '合格供应商',
    advantage6Title: '定制化工程服务',
    advantage6Desc: '专业工程团队提供从设计到售后的全流程定制化方案，灵活适配您的项目规格与需求。',
    advantage6Data: '全流程服务',
    learnMoreAboutUs: '了解更多',
    highlight1: '国家电网与南方电网双认证合格供应商',
    highlight2: '全系列国际认证：CE、UL、IEC、ISO 9001/14001/45001',
    highlight3: '8万平方米智能制造基地，自动化产线覆盖全流程',
    highlight4: '产品出口至亚洲、非洲、中东、欧洲、美洲等30+国家',
    videoDuration: '3:00',
    watchFullVersion: '观看完整版'
  },
  footer: {
    quickLinks: '快速导航',
    productCategories: '产品分类',
    contactInfo: '联系方式',
    copyright: '© 2026 中国徐州中铁电气集团有限公司 版权所有'
  }
};

const savedLang = typeof window !== 'undefined' ? (window.localStorage.getItem('crec_lang') || null) : null;
const browserLang = typeof navigator !== 'undefined' ? (navigator.language || navigator.userLanguage || 'en') : 'en';
const initial = savedLang || (browserLang.startsWith('zh') ? 'zh' : 'en');

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enResources },
    zh: { translation: zhResources }
  },
  lng: initial,
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

// 同步设置 html lang
if (typeof document !== 'undefined') {
  document.documentElement.lang = initial === 'zh' ? 'zh-CN' : 'en';
}

// 监听语言切换
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    document.documentElement.lang = lng === 'zh' ? 'zh-CN' : 'en';
  }
});

export default i18n;
