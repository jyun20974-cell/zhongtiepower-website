import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRightOutlined, CheckCircleFilled, ThunderboltOutlined, BulbFilled } from '@ant-design/icons';
import { products } from '../data/catalog.js';

const ProductsPage = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const categories = [
    { key: 'all', label: isZh ? '全部产品' : 'All Products' },
    { key: 'transformer', label: isZh ? '电力变压器' : 'Power Transformers' },
    { key: 'switchgear', label: isZh ? '开关柜 & 断路器' : 'Switchgear & Breakers' },
    { key: 'substation', label: isZh ? '变电站' : 'Substations' },
    { key: 'distribution', label: isZh ? '配电设备' : 'Distribution' },
  ];

  const [cat, setCat] = useState('all');
  const filtered = cat === 'all' ? products : products.filter((p) => p.category === cat);

  const colorByCategory = {
    transformer: { main: '#0F2340', accent: '#D4A843' },
    switchgear: { main: '#C8102E', accent: '#F5D78A' },
    substation: { main: '#1A365D', accent: '#D4A843' },
    distribution: { main: '#2A4A73', accent: '#D4A843' },
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 50%, #1A365D 100%)' }}>
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#D4A843] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#C8102E] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-[11.5px] font-bold text-[#D4A843] tracking-wider uppercase mb-5">
            <ThunderboltOutlined style={{ fontSize: 12 }} />
            {isZh ? '产品中心' : 'Products'}
          </div>
          <h1 className="text-[34px] lg:text-[52px] font-extrabold leading-[1.15] tracking-tight mb-5 max-w-[820px] mx-auto">
            {isZh ? '全系列电力设备与电气化解决方案' : 'Complete Range of Power Equipment & Electrification Solutions'}
          </h1>
          <p className="text-[14.5px] lg:text-[16.5px] text-white/80 leading-[1.85] mb-8 max-w-[680px] mx-auto">
            {isZh
              ? '从 10kV 到 500kV 的完整产品家族，覆盖发电、输电、配电、铁路电气化全应用场景，工程级可靠，工业级稳定。'
              : 'A complete product family from 10kV to 500kV — engineered for generation, transmission, distribution and railway electrification applications.'}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[14px] font-bold rounded-xl no-underline shadow-[0_10px_35px_rgba(200,16,46,0.4)] transition-all hover:translate-y-[-1px]">
              {t('nav.requestQuote')} <ArrowRightOutlined style={{ fontSize: 13 }} />
            </Link>
            <a href="#catalog" className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/35 text-white text-[14px] font-bold rounded-xl no-underline transition-all hover:translate-y-[-1px] backdrop-blur-sm">
              {isZh ? '浏览目录' : 'Browse Catalog'} <ArrowRightOutlined style={{ fontSize: 13 }} />
            </a>
          </div>
        </div>
      </section>

      {/* 筛选 & 产品列表 */}
      <section id="catalog" className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-12">
            <div>
              <h2 className="text-[28px] lg:text-[38px] font-extrabold text-[#0F2340] leading-tight tracking-tight mb-3">
                {isZh ? '精选产品系列' : 'Featured Product Series'}
              </h2>
              <p className="text-[13.5px] lg:text-[14.5px] text-gray-500 max-w-[600px] leading-[1.7]">
                {isZh ? '点击任意产品卡片，可快速询价。支持定制化设计与 OEM。' : 'Click any product card to request a quote. Custom designs and OEM supported.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setCat(c.key)}
                  className={`px-4 py-2.5 text-[12.5px] font-bold rounded-lg border transition-all no-underline ${
                    cat === c.key
                      ? 'bg-[#0F2340] text-white border-[#0F2340] shadow-[0_6px_18px_rgba(15,35,64,0.25)]'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F2340] hover:text-[#0F2340]'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 lg:gap-6">
            {filtered.map((p, idx) => {
              const c = colorByCategory[p.category] || { main: '#0F2340', accent: '#D4A843' };
              const zhFeatures = {
                'Oil-Immersed Power Transformer': ['99.7% 能效', '最长 50 年寿命', 'IEC 60076 认证', '10kV - 500kV'],
                'Dry-Type Distribution Transformer': ['F级绝缘', '低噪音运行', '自熄阻燃', '环保设计'],
                'SF6 Gas-Insulated Switchgear': ['IEC 62271 标准', '紧凑型设计', '免维护', '最高 550kV'],
                'Vacuum Circuit Breaker': ['100,000 次机械寿命', '快速分断', '长寿命', '紧凑结构'],
                'Prefabricated Substation': ['工厂预组装', '快速部署', '全天候运行', '模块化设计'],
                'Ring Main Unit (RMU)': ['占地面积小', '安全可靠', '低维护', '广泛应用'],
                'LV Distribution Box': ['可定制配置', 'IP65 防护', '坚固耐用', '易于安装'],
                'Compact Mobile Substation': ['24 小时快速部署', '可移动', '完全集成', '应急就绪'],
              };
              const defaultZh = ['工程级品质', '工业级可靠性', '国际认证', '全周期服务'];
              const defaultEn = ['Engineered Quality', 'Industrial Reliability', 'International Certification', 'Full-lifecycle Service'];
              const features = isZh ? (zhFeatures[p.name] || defaultZh) : defaultEn;

              return (
                <Link
                  key={p.id}
                  to="/contact"
                  className="group relative block bg-white rounded-2xl overflow-hidden border border-gray-200/60 hover:border-transparent transition-all duration-400 hover:shadow-[0_35px_80px_rgba(15,35,64,0.18)] hover:-translate-y-1.5 no-underline"
                >
                  <div className="relative aspect-[4/3] overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${c.main} 0%, ${c.accent}40 100%)` }}>
                    <div className="absolute inset-0 opacity-[0.08]"
                      style={{
                        backgroundImage: `
                          linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)
                        `,
                        backgroundSize: '28px 28px'
                      }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="70%" height="70%" viewBox="0 0 180 130" style={{ filter: 'drop-shadow(0 12px 35px rgba(0,0,0,0.25))' }} className="transition-transform duration-500 group-hover:scale-105">
                        <rect x="50" y="25" width="80" height="80" rx="6" fill="white" opacity="0.95" />
                        <rect x="60" y="38" width="12" height="54" rx="2" fill={c.main} opacity="0.85" />
                        <rect x="82" y="38" width="12" height="54" rx="2" fill={c.main} opacity="0.85" />
                        <rect x="104" y="38" width="12" height="54" rx="2" fill={c.main} opacity="0.85" />
                        <circle cx="90" cy="20" r="5" fill={c.accent} />
                        <line x="50" y1="112" x2="130" y2="112" stroke={c.main} strokeWidth="2.5" opacity="0.45" />
                      </svg>
                    </div>
                    <div className="absolute top-3 left-3 flex gap-2">
                      <div className="px-3 py-1 bg-white/95 text-[#0F2340] text-[10.5px] font-bold rounded-full shadow-sm tracking-wider uppercase">
                        {p.category}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#0F2340]/0 group-hover:bg-[#0F2340]/70 transition-all duration-400 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8102E] text-white text-[12.5px] font-bold rounded-lg shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-400">
                        {t('nav.requestQuote')} <ArrowRightOutlined style={{ fontSize: 11 }} />
                      </span>
                    </div>
                  </div>

                  <div className="p-5 lg:p-6">
                    <h3 className="text-[16px] lg:text-[17px] font-bold text-[#0F2340] mb-2 leading-snug">
                      {isZh ? p.nameZh : p.name}
                    </h3>
                    <div className="text-[12px] text-gray-500 font-medium mb-4 uppercase tracking-wider">
                      {isZh ? p.specZh : p.spec}
                    </div>
                    <div className="space-y-2">
                      {features.slice(0, 3).map((f, i) => (
                        <div key={i} className="flex items-start gap-2 text-[12.5px] text-gray-600">
                          <CheckCircleFilled style={{ fontSize: 12, color: c.main, flexShrink: 0, marginTop: 3 }} />
                          <span className="leading-[1.55]">{f}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-[12.5px] font-bold" style={{ color: c.main }}>
                      <span className="tracking-wide">{isZh ? p.highlightZh : p.highlight}</span>
                      <ArrowRightOutlined className="text-gray-300 group-hover:text-[#C8102E] transition-colors" style={{ fontSize: 13 }} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="py-16 lg:py-20 bg-[#F8F9FA]">
        <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[11.5px] font-bold text-[#C8102E] tracking-wider uppercase mb-5">
            <BulbFilled style={{ fontSize: 12 }} />
            {isZh ? '需要定制方案？' : 'Need a Custom Solution?'}
          </div>
          <h2 className="text-[26px] lg:text-[38px] font-extrabold text-[#0F2340] leading-tight tracking-tight mb-5 max-w-[760px] mx-auto">
            {isZh ? '告诉我们您的项目需求，获取工程级报价' : 'Tell Us Your Project Requirements & Get an Engineering-Grade Quote'}
          </h2>
          <p className="text-[14px] lg:text-[15.5px] text-gray-600 leading-[1.8] mb-8 max-w-[680px] mx-auto">
            {isZh
              ? '我们的工程团队将在 24 小时内与您联系，为您提供包括技术规格、图纸、报价及交付计划的完整方案。'
              : 'Our engineering team will respond within 24 hours with a complete package covering technical specifications, drawings, quotation and delivery schedule.'}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0F2340] hover:bg-[#1A365D] text-white text-[15px] font-bold rounded-xl no-underline shadow-[0_12px_40px_rgba(15,35,64,0.35)] transition-all hover:translate-y-[-1px]">
            {t('nav.getQuote')} <ArrowRightOutlined style={{ fontSize: 14 }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
