import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
  ThunderboltOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  CloudServerOutlined,
  TeamOutlined,
  ToolOutlined,
  ArrowRightOutlined,
  StarFilled,
  CheckCircleFilled,
  EnvironmentOutlined,
  PlayCircleOutlined
} from '@ant-design/icons';
import { products, projects } from '../data/catalog.js';
import VideoSection from './VideoSection.jsx';

/* ============================================================
   HERO SECTION - 首屏大图（大气版）
   ============================================================ */
const Hero = () => {
  const { t, i18n } = useTranslation();

  const isZh = i18n.language === 'zh';

  const heroData = {
    title: isZh ? '驱动全球电力' : 'Powering the World',
    accent: isZh ? '的中国力量' : ' with Chinese Engineering',
    subtitle: isZh
      ? '30 余年深耕电力设备制造，为中亚、东南亚、非洲、南美、大洋洲合作伙伴提供变压器、开关柜及铁路电气化解决方案。'
      : 'Over 30 years of expertise. Power transformers, switchgear and railway electrification systems for Central Asia, Southeast Asia, Africa, South America and Oceania.',
    gradient: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 40%, #1A365D 100%)'
  };

  return (
    <section className="relative min-h-[720px] lg:min-h-[820px] overflow-hidden pt-[72px]" style={{ background: heroData.gradient }}>
      {/* 装饰光点 - 更大更柔和 */}
      <div className="absolute top-32 right-32 w-64 h-64 bg-[#D4A843] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-32 left-24 w-72 h-72 bg-[#C8102E] rounded-full opacity-[0.1] blur-[120px] pointer-events-none" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-48 left-1/3 w-48 h-48 bg-white rounded-full opacity-[0.04] blur-[80px] pointer-events-none"></div>

      {/* SVG 装饰 - 电网轮廓 */}
      <svg className="absolute right-0 top-0 h-full opacity-[0.07] pointer-events-none" viewBox="0 0 800 820" preserveAspectRatio="xMaxYMid meet">
        <defs>
          <linearGradient id="gridGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D4A843" />
            <stop offset="100%" stopColor="#C8102E" />
          </linearGradient>
        </defs>
        <line x1="100" y1="220" x2="700" y2="220" stroke="url(#gridGlow)" strokeWidth="1" />
        <line x1="100" y1="300" x2="700" y2="300" stroke="url(#gridGlow)" strokeWidth="1" />
        <line x1="100" y1="380" x2="700" y2="380" stroke="url(#gridGlow)" strokeWidth="1" />
        {[150, 350, 550].map((x) => (
          <g key={x} stroke="url(#gridGlow)" strokeWidth="1.5" fill="none" opacity="0.8">
            <path d={`M${x} 160 L${x - 25} 420 L${x + 25} 420 Z`} />
            <path d={`M${x - 20} 220 L${x + 20} 220 M${x - 18} 280 L${x + 18} 280 M${x - 15} 340 L${x + 15} 340`} />
            <circle cx={x} cy="160" r="6" fill="#D4A843" opacity="0.6" />
          </g>
        ))}
        <rect x="60" y="520" width="180" height="100" stroke="url(#gridGlow)" strokeWidth="1.5" fill="none" opacity="0.4" rx="6" />
        <rect x="90" y="540" width="40" height="60" stroke="url(#gridGlow)" strokeWidth="1" fill="none" opacity="0.5" />
        <rect x="150" y="540" width="40" height="60" stroke="url(#gridGlow)" strokeWidth="1" fill="none" opacity="0.5" />
        <rect x="280" y="560" width="120" height="60" stroke="url(#gridGlow)" strokeWidth="1.5" fill="none" opacity="0.4" rx="4" />
        <rect x="440" y="540" width="180" height="80" stroke="url(#gridGlow)" strokeWidth="1.5" fill="none" opacity="0.4" rx="4" />
        {[
          [100, 540], [150, 540], [200, 540], [300, 570], [360, 570],
          [460, 550], [520, 550], [580, 550], [200, 220], [400, 220], [600, 220]
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#D4A843" opacity="0.7" />
        ))}
      </svg>

      {/* 内容 */}
      <div className="relative z-10 min-h-[648px] lg:min-h-[748px] flex items-center">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-10 xl:px-16 w-full">
          <div className="max-w-[720px] xl:max-w-[800px]">
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full mb-8 text-[13px] lg:text-[14px] xl:text-[15px] font-semibold text-white/90 tracking-wider animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[#D4A843]"></span>
              {isZh ? '中国徐州中铁电气集团 · 1992 年创立 · 全球电力设备制造商' : 'China Xuzhou Zhongtie Power Group · Est. 1992 · Global Power Equipment Manufacturer'}
            </div>

            <h1 className="text-[42px] lg:text-[68px] xl:text-[80px] font-extrabold text-white leading-[1.1] tracking-tight mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              {heroData.title}
              <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #D4A843 0%, #F5D78A 100%)' }}>
                {heroData.accent}
              </span>
            </h1>

            <p className="text-[15px] lg:text-[18px] xl:text-[20px] text-white/80 leading-[1.8] mb-10 max-w-[640px] xl:max-w-[720px] animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {heroData.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 xl:gap-5 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link to="/contact" className="group inline-flex items-center gap-3 px-8 py-4.5 xl:px-10 xl:py-5 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[15px] lg:text-[16px] xl:text-[17px] font-bold rounded-xl no-underline shadow-[0_12px_40px_rgba(200,16,46,0.45)] hover:shadow-[0_18px_55px_rgba(200,16,46,0.65)] transition-all hover:translate-y-[-2px]">
                <PlayCircleOutlined style={{ fontSize: 20 }} />
                {t('nav.getQuote')}
              </Link>
              <Link to="/products" className="group inline-flex items-center gap-3 px-8 py-4.5 xl:px-10 xl:py-5 bg-white/10 hover:bg-white/20 border border-white/25 hover:border-white/40 text-white text-[15px] lg:text-[16px] xl:text-[17px] font-bold rounded-xl no-underline backdrop-blur-sm transition-all hover:translate-y-[-2px]">
                {isZh ? '查看全线产品' : 'View All Products'}
                <ArrowRightOutlined style={{ fontSize: 16 }} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* 关键数据 - 更大更醒目 */}
            <div className="grid grid-cols-3 gap-6 lg:gap-10 mt-14 lg:mt-20 max-w-[600px] animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div className="text-[36px] lg:text-[52px] font-extrabold text-white leading-none">
                  30<span className="text-[#D4A843]">+</span>
                </div>
                <div className="text-[12px] lg:text-[14px] text-white/70 font-medium mt-3 tracking-wide">
                  {isZh ? '年制造经验' : 'Years Experience'}
                </div>
              </div>
              <div className="relative pl-6 lg:pl-10 border-l border-white/15">
                <div className="text-[36px] lg:text-[52px] font-extrabold text-white leading-none">
                  5<span className="text-[#D4A843]"></span>
                </div>
                <div className="text-[12px] lg:text-[14px] text-white/70 font-medium mt-3 tracking-wide">
                  {isZh ? '大洲市场' : 'Continents'}
                </div>
              </div>
              <div className="relative pl-6 lg:pl-10 border-l border-white/15">
                <div className="text-[36px] lg:text-[52px] font-extrabold text-white leading-none">
                  1200
                </div>
                <div className="text-[12px] lg:text-[14px] text-white/70 font-medium mt-3 tracking-wide">
                  {isZh ? '专业员工' : 'Employees'}
                </div>
              </div>
            </div>
          </div>

          {/* 幻灯片指示器 */}
          <div className="absolute bottom-10 left-5 right-5 lg:left-10 lg:right-10 flex items-center justify-between">
            <div className="flex gap-3">
              {[0,1,2].map((_, i) => (
                <button
                  key={i}

                  className={`h-[4px] rounded-full transition-all duration-500 ${'w-14 bg-[#D4A843]'}`}
                />
              ))}
            </div>
            <div className="hidden md:flex items-center gap-4 text-white/60 text-[13px] font-medium">
              <span>{isZh ? '✓ ISO 9001' : '✓ ISO 9001'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
              <span>{isZh ? '✓ IEC 认证' : '✓ IEC Certified'}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/30"></span>
              <span>{isZh ? '✓ CE/UL' : '✓ CE & UL'}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部渐变过渡 */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#F8F9FA] pointer-events-none"></div>
    </section>
  );
};


/* ============================================================
   ADVANTAGES - 核心优势（大气版）
   ============================================================ */
const Advantages = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const advantages = [
    { icon: ThunderboltOutlined, title: t('home.advantage1Title'), desc: t('home.advantage1Desc'), data: t('home.advantage1Data'), color: '#0F2340' },
    { icon: GlobalOutlined, title: t('home.advantage2Title'), desc: t('home.advantage2Desc'), data: t('home.advantage2Data'), color: '#C8102E' },
    { icon: CloudServerOutlined, title: t('home.advantage3Title'), desc: t('home.advantage3Desc'), data: t('home.advantage3Data'), color: '#1A365D' },
    { icon: SafetyCertificateOutlined, title: t('home.advantage4Title'), desc: t('home.advantage4Desc'), data: t('home.advantage4Data'), color: '#D4A843' },
    { icon: CheckCircleFilled, title: t('home.advantage5Title'), desc: t('home.advantage5Desc'), data: t('home.advantage5Data'), color: '#006B3C' },
    { icon: ToolOutlined, title: t('home.advantage6Title'), desc: t('home.advantage6Desc'), data: t('home.advantage6Data'), color: '#2A4A73' },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 xl:py-36">
      <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
        <div className="text-center max-w-[720px] xl:max-w-[800px] mx-auto mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-full text-[12px] font-bold text-[#C8102E] tracking-wider uppercase mb-5">
            {isZh ? '核心优势' : 'Our Advantages'}
          </div>
          <h2 className="text-[32px] lg:text-[44px] xl:text-[52px] font-extrabold text-[#0F2340] leading-tight mb-5 tracking-tight">
            {t('home.ourAdvantages')}
          </h2>
          <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-gray-500 leading-[1.7]">
            {isZh
              ? '六大核心能力，支撑我们成为全球电力设备与铁路电气化领域值得信赖的合作伙伴。'
              : 'Six core capabilities that make us a trusted partner in global power equipment and railway electrification.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantages.map(({ icon: Icon, title, desc, data, color }, idx) => (
            <div
              key={idx}
              className="group relative bg-[#F8F9FA] hover:bg-white rounded-2xl p-7 lg:p-8 border border-gray-200/60 hover:border-transparent transition-all duration-500 hover:shadow-[0_24px_64px_rgba(15,35,64,0.12)] hover:-translate-y-1.5"
            >
              <div
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-white transition-transform group-hover:scale-110 group-hover:rotate-[-3deg]"
                style={{ background: `${color}10`, color }}
              >
                <Icon style={{ fontSize: 26 }} />
              </div>
              <h3 className="text-[19px] lg:text-[20px] font-bold text-[#0F2340] mb-3">{title}</h3>
              <p className="text-[14px] lg:text-[15px] text-gray-600 leading-[1.75] mb-6">{desc}</p>
              <div
                className="inline-flex items-center gap-2.5 text-[12px] font-bold tracking-wider uppercase pt-5 border-t border-gray-200/60 w-full"
                style={{ color }}
              >
                <span className="w-2 h-2 rounded-full" style={{ background: color }}></span>
                {data}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   PRODUCTS - 精选产品
   ============================================================ */
const FeaturedProducts = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';
  const items = products.slice(0, 8);

  const colors = [
    { main: '#1A365D', accent: '#D4A843' },
    { main: '#C8102E', accent: '#F5D78A' },
    { main: '#2A4A73', accent: '#D4A843' },
    { main: '#0F2340', accent: '#C8102E' },
    { main: '#1A365D', accent: '#D4A843' },
    { main: '#C8102E', accent: '#F5D78A' },
    { main: '#2A4A73', accent: '#D4A843' },
    { main: '#0F2340', accent: '#C8102E' },
  ];

  return (
    <section className="bg-[#F8F9FA] py-20 lg:py-28 xl:py-36">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 lg:mb-20">
          <div className="max-w-[680px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-gray-200 rounded-full text-[12px] font-bold text-[#C8102E] tracking-wider uppercase mb-5">
              {isZh ? '精选产品' : 'Featured Products'}
            </div>
            <h2 className="text-[32px] lg:text-[44px] xl:text-[52px] font-extrabold text-[#0F2340] leading-tight tracking-tight">
              {t('home.featuredProducts')}
            </h2>
            <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-gray-500 leading-[1.7] mt-5">
              {isZh
                ? '从油浸式变压器到移动式变电站，覆盖全电压等级的完整产品线，满足各类电力应用场景。'
                : 'From oil-immersed transformers to mobile substations — a complete product range covering all voltage levels.'}
            </p>
          </div>
          <Link to="/products" className="self-start md:self-end inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#0F2340] hover:bg-[#1A365D] text-white text-[14px] font-bold rounded-xl no-underline transition-all hover:translate-y-[-2px] shadow-[0_8px_28px_rgba(15,35,64,0.25)]">
            {isZh ? '查看全部产品' : 'View All Products'}
            <ArrowRightOutlined style={{ fontSize: 14 }} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {items.map((p, idx) => {
            const c = colors[idx % colors.length];
            return (
              <Link
                key={p.id}
                to="/products"
                className="group relative block bg-white rounded-2xl overflow-hidden border border-gray-200/60 hover:border-transparent transition-all duration-500 hover:shadow-[0_32px_72px_rgba(15,35,64,0.15)] hover:-translate-y-2 no-underline"
              >
                <div
                  className="relative aspect-[4/3] overflow-hidden flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${c.main} 0%, ${c.accent}25 100%)` }}
                >
                  <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)`,
                      backgroundSize: '30px 30px'
                    }}
                  ></div>
                  <svg width="70%" height="70%" viewBox="0 0 180 130" style={{ filter: 'drop-shadow(0 10px 25px rgba(0,0,0,0.25))' }} className="transition-transform duration-500 group-hover:scale-110">
                    {idx % 4 === 0 && (
                      <>
                        <rect x="55" y="30" width="70" height="70" rx="6" fill="white" opacity="0.95" />
                        <rect x="62" y="40" width="10" height="50" rx="3" fill={c.main} opacity="0.85" />
                        <rect x="80" y="40" width="10" height="50" rx="3" fill={c.main} opacity="0.85" />
                        <rect x="98" y="40" width="10" height="50" rx="3" fill={c.main} opacity="0.85" />
                        <circle cx="90" cy="28" r="4" fill={c.accent} />
                        <line x1="60" y1="100" x2="120" y2="100" stroke={c.main} strokeWidth="2" opacity="0.5" />
                      </>
                    )}
                    {idx % 4 === 1 && (
                      <>
                        <rect x="45" y="30" width="90" height="75" rx="8" fill="white" opacity="0.95" />
                        <line x1="55" y1="45" x2="125" y2="45" stroke={c.main} strokeWidth="2" opacity="0.4" />
                        <line x1="55" y1="60" x2="125" y2="60" stroke={c.main} strokeWidth="2" opacity="0.4" />
                        <line x1="55" y1="75" x2="125" y2="75" stroke={c.main} strokeWidth="2" opacity="0.4" />
                        <circle cx="65" cy="95" r="5" fill={c.accent} />
                        <circle cx="90" cy="95" r="5" fill={c.accent} />
                        <circle cx="115" cy="95" r="5" fill={c.accent} />
                      </>
                    )}
                    {idx % 4 === 2 && (
                      <>
                        <rect x="50" y="25" width="80" height="80" rx="5" fill="white" opacity="0.95" />
                        <circle cx="90" cy="65" r="22" fill={c.main} opacity="0.85" />
                        <circle cx="90" cy="65" r="12" fill={c.accent} opacity="0.9" />
                        <circle cx="90" cy="65" r="5" fill="white" />
                        <line x1="50" y1="100" x2="130" y2="100" stroke={c.main} strokeWidth="2" opacity="0.4" />
                      </>
                    )}
                    {idx % 4 === 3 && (
                      <>
                        <rect x="40" y="55" width="100" height="45" rx="4" fill="white" opacity="0.95" />
                        <rect x="52" y="45" width="18" height="15" rx="2" fill={c.main} opacity="0.85" />
                        <rect x="80" y="45" width="18" height="15" rx="2" fill={c.main} opacity="0.85" />
                        <rect x="108" y="45" width="18" height="15" rx="2" fill={c.main} opacity="0.85" />
                        <rect x="48" y="65" width="8" height="25" rx="2" fill={c.accent} />
                        <rect x="70" y="65" width="8" height="25" rx="2" fill={c.accent} />
                        <rect x="92" y="65" width="8" height="25" rx="2" fill={c.accent} />
                        <rect x="114" y="65" width="8" height="25" rx="2" fill={c.accent} />
                      </>
                    )}
                  </svg>
                  <div className="absolute top-3.5 left-3.5 px-3.5 py-1.5 bg-white/95 text-[#0F2340] text-[11px] font-bold rounded-full shadow-sm tracking-wider uppercase">
                    {p.category.toUpperCase()}
                  </div>
                  <div className="absolute inset-0 bg-[#0F2340]/0 group-hover:bg-[#0F2340]/70 flex items-center justify-center transition-all duration-500 opacity-0 group-hover:opacity-100">
                    <div className="flex flex-col items-center gap-3 text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-6">
                      <div className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C8102E] text-white text-[13px] font-bold rounded-lg shadow-lg">
                        {t('nav.requestQuote')}
                      </div>
                      <div className="text-white/70 text-[12px]">{isZh ? '24 小时内响应' : 'Response within 24 hours'}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="text-[16px] lg:text-[17px] font-bold text-[#0F2340] mb-2 leading-snug">{isZh ? p.nameZh : p.name}</h3>
                  <div className="text-[12.5px] text-gray-500 font-medium mb-4 uppercase tracking-wider">{isZh ? p.specZh : p.spec}</div>
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="text-[13px] font-bold tracking-wide" style={{ color: c.main }}>{isZh ? p.highlightZh : p.highlight}</div>
                    <ArrowRightOutlined className="text-gray-300 group-hover:text-[#C8102E] transition-colors text-[14px]" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   GLOBAL SERVICE NETWORK - 全球服务网络
   ============================================================ */
const GlobalNetwork = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  // 使用抽象网络图 - 不画任何国界轮廓，仅用圆点连线表示全球服务覆盖
  // 坐标基于等距圆柱投影(equirectangular)，viewBox 0-800 x 0-400
  // 经度 -180~180 → x: 0~800, 纬度 90~-60 → y: 0~400
  const hub = { x: 580, y: 185 }; // 中国大致位置（中心枢纽）
  const countries = [
    // 东亚
    { name: isZh ? '中国' : 'China', x: 580, y: 185, hub: true },
    { name: isZh ? '韩国' : 'S. Korea', x: 605, y: 178 },
    { name: isZh ? '日本' : 'Japan', x: 625, y: 175 },
    // 东南亚
    { name: isZh ? '泰国' : 'Thailand', x: 570, y: 228 },
    { name: isZh ? '越南' : 'Vietnam', x: 575, y: 215 },
    { name: isZh ? '印度尼西亚' : 'Indonesia', x: 580, y: 260 },
    { name: isZh ? '马来西亚' : 'Malaysia', x: 570, y: 248 },
    { name: isZh ? '菲律宾' : 'Philippines', x: 600, y: 225 },
    // 南亚
    { name: isZh ? '印度' : 'India', x: 535, y: 215 },
    { name: isZh ? '巴基斯坦' : 'Pakistan', x: 515, y: 200 },
    { name: isZh ? '孟加拉' : 'Bangladesh', x: 555, y: 210 },
    { name: isZh ? '斯里兰卡' : 'Sri Lanka', x: 540, y: 228 },
    // 中亚/中东
    { name: isZh ? '哈萨克斯坦' : 'Kazakhstan', x: 510, y: 165 },
    { name: isZh ? '沙特' : 'Saudi Arabia', x: 490, y: 215 },
    { name: isZh ? '阿联酋' : 'UAE', x: 500, y: 220 },
    { name: isZh ? '土耳其' : 'Turkey', x: 465, y: 185 },
    { name: isZh ? '伊朗' : 'Iran', x: 505, y: 200 },
    // 非洲
    { name: isZh ? '埃及' : 'Egypt', x: 470, y: 205 },
    { name: isZh ? '埃塞俄比亚' : 'Ethiopia', x: 500, y: 245 },
    { name: isZh ? '肯尼亚' : 'Kenya', x: 510, y: 260 },
    { name: isZh ? '尼日利亚' : 'Nigeria', x: 440, y: 245 },
    { name: isZh ? '南非' : 'South Africa', x: 470, y: 310 },
    { name: isZh ? '坦桑尼亚' : 'Tanzania', x: 505, y: 270 },
    { name: isZh ? '安哥拉' : 'Angola', x: 450, y: 280 },
    // 欧洲
    { name: isZh ? '德国' : 'Germany', x: 430, y: 155 },
    { name: isZh ? '俄罗斯' : 'Russia', x: 530, y: 135 },
    { name: isZh ? '法国' : 'France', x: 420, y: 165 },
    { name: isZh ? '英国' : 'UK', x: 415, y: 148 },
    { name: isZh ? '西班牙' : 'Spain', x: 400, y: 175 },
    { name: isZh ? '意大利' : 'Italy', x: 435, y: 172 },
    { name: isZh ? '波兰' : 'Poland', x: 445, y: 150 },
    { name: isZh ? '荷兰' : 'Netherlands', x: 425, y: 150 },
    // 美洲
    { name: isZh ? '美国' : 'USA', x: 195, y: 165 },
    { name: isZh ? '加拿大' : 'Canada', x: 200, y: 135 },
    { name: isZh ? '墨西哥' : 'Mexico', x: 175, y: 195 },
    { name: isZh ? '巴西' : 'Brazil', x: 280, y: 290 },
    { name: isZh ? '阿根廷' : 'Argentina', x: 260, y: 335 },
    { name: isZh ? '智利' : 'Chile', x: 235, y: 330 },
    { name: isZh ? '秘鲁' : 'Peru', x: 240, y: 275 },
    { name: isZh ? '哥伦比亚' : 'Colombia', x: 225, y: 245 },
    // 大洋洲
    { name: isZh ? '澳大利亚' : 'Australia', x: 660, y: 310 },
    { name: isZh ? '新西兰' : 'New Zealand', x: 700, y: 335 },
  ];

  // 从中国出发的辐射连线（到各大洲代表国家）
  const connections = [
    // 东亚
    [0, 1], [0, 2], [0, 4],
    // 东南亚
    [0, 3], [0, 5], [0, 6], [0, 7],
    // 南亚
    [0, 8], [0, 9], [0, 10],
    // 中亚/中东
    [0, 12], [0, 14], [0, 15],
    // 非洲
    [0, 16], [0, 17], [0, 18], [0, 19],
    // 欧洲
    [0, 22], [0, 23], [0, 25],
    // 美洲
    [0, 31], [0, 34],
    // 大洋洲
    [0, 39],
    // 二级连线（非中国直连，展示区域网络）
    [9, 14], // 巴基斯坦→阿联酋
    [14, 16], // 阿联酋→埃及
    [17, 18], // 埃塞俄比亚→肯尼亚
    [19, 21], // 尼日利亚→南非
    [22, 24], // 德国→法国
    [24, 25], // 法国→英国
    [22, 27], // 德国→意大利
    [31, 32], // 美国→加拿大
    [31, 33], // 美国→墨西哥
    [34, 35], // 巴西→阿根廷
    [3, 8],  // 泰国→印度
    [12, 23], // 哈萨克斯坦→俄罗斯
    [15, 22], // 土耳其→德国
    [16, 17], // 埃及→埃塞俄比亚
    [20, 19], // 安哥拉→尼日利亚
    [36, 34], // 秘鲁→巴西
    [37, 34], // 哥伦比亚→巴西
    [39, 40], // 澳大利亚→新西兰
  ];

  return (
    <section className="bg-[#0F2340] text-white py-20 lg:py-28 xl:py-36 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A843] rounded-full opacity-[0.06] blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#C8102E] rounded-full opacity-[0.06] blur-[140px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 lg:px-10 xl:px-16">
        <div className="text-center max-w-[760px] mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[12px] font-bold text-[#D4A843] tracking-wider uppercase mb-5">
            <GlobalOutlined style={{ fontSize: 14 }} />
            {isZh ? '全球服务' : 'Global Reach'}
          </div>
          <h2 className="text-[32px] lg:text-[44px] xl:text-[52px] font-extrabold text-white leading-tight tracking-tight mb-5">
            {t('home.ourGlobalNetwork')}
          </h2>
          <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-white/70 leading-[1.7]">
            {t('home.globalDesc')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6 mb-14 max-w-[960px] mx-auto">
          {[
            { num: '30+', label: isZh ? '服务国家和地区' : 'Countries & Regions' },
            { num: '5', label: isZh ? '区域服务中心' : 'Regional Service Centers' },
            { num: '24/7', label: isZh ? '小时技术支持' : 'Technical Support' },
            { num: '1,200+', label: isZh ? '专业员工' : 'Professional Staff' },
          ].map((s, i) => (
            <div key={i} className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.10] rounded-2xl p-6 lg:p-7 text-center transition-all duration-300">
              <div className="text-[38px] lg:text-[48px] font-extrabold tracking-tight" style={{ background: 'linear-gradient(135deg, #D4A843, #F5D78A)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
                {s.num}
              </div>
              <div className="text-[12px] lg:text-[13px] xl:text-[14px] text-white/60 font-medium mt-3 tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.03] rounded-3xl border border-white/[0.10] p-4 lg:p-6 shadow-[0_40px_100px_rgba(0,0,0,0.35)]">
          <div className="relative w-full mx-auto" style={{ aspectRatio: '16 / 9', minHeight: '420px' }}>
            <svg viewBox="0 0 800 450" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
              <defs>
                <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4A843" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#D4A843" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#D4A843" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#C8102E" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="lineGrad2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#4A7AB5" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#4A7AB5" stopOpacity="0.15" />
                </linearGradient>
              </defs>

              {/* 经纬线网格 - 纯装饰，不涉及任何国界 */}
              {[100, 200, 300, 400, 500, 600, 700].map((x) => (
                <line key={`v${x}`} x1={x} y1="20" x2={x} y2="430" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
              ))}
              {[80, 160, 240, 320, 400].map((y) => (
                <line key={`h${y}`} x1="30" y1={y} x2="770" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
              ))}

              {/* 中国枢纽光晕 */}
              <circle cx={hub.x} cy={hub.y} r="80" fill="url(#hubGlow)" />
              <circle cx={hub.x} cy={hub.y} r="50" fill="url(#hubGlow)" />

              {/* 从中国出发的辐射连线 */}
              {connections.map(([from, to], i) => {
                const isPrimary = from === 0; // 从中国出发的是主连线
                const c1 = countries[from];
                const c2 = countries[to];
                if (!c1 || !c2) return null;
                return (
                  <line
                    key={`conn${i}`}
                    x1={c1.x} y1={c1.y} x2={c2.x} y2={c2.y}
                    stroke={isPrimary ? 'url(#lineGrad)' : 'url(#lineGrad2)'}
                    strokeWidth={isPrimary ? 1.8 : 1.0}
                    strokeDasharray={isPrimary ? '5,4' : '3,5'}
                    opacity={isPrimary ? 0.8 : 0.5}
                  />
                );
              })}

              {/* 国家节点 */}
              {countries.map((c, i) => (
                <g key={c.code || i}>
                  {c.hub ? (
                    <>
                      {/* 中国枢纽 - 更大更醒目 */}
                      <circle cx={c.x} cy={c.y} r="16" fill="rgba(212,168,67,0.12)" />
                      <circle cx={c.x} cy={c.y} r="9" fill="#C8102E" opacity="0.9" />
                      <circle cx={c.x} cy={c.y} r="4" fill="#D4A843" />
                      <circle cx={c.x} cy={c.y} r="26" fill="none" stroke="#D4A843" strokeWidth="1.2" opacity="0.3">
                        <animate attributeName="r" values="9;26;9" dur="3s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" repeatCount="indefinite" />
                      </circle>
                      <circle cx={c.x} cy={c.y} r="38" fill="none" stroke="#D4A843" strokeWidth="0.7" opacity="0.15">
                        <animate attributeName="r" values="14;38;14" dur="3s" repeatCount="indefinite" begin="0.5s" />
                        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" begin="0.5s" />
                      </circle>
                      <text x={c.x} y={c.y + 32} textAnchor="middle" fontSize="12" fill="#D4A843" fontFamily="Arial, sans-serif" fontWeight="700">{c.name}</text>
                    </>
                  ) : (
                    <>
                      <circle cx={c.x} cy={c.y} r="6" fill="rgba(200,16,46,0.12)" />
                      <circle cx={c.x} cy={c.y} r="4" fill="#C8102E" opacity="0.8" />
                      <circle cx={c.x} cy={c.y} r="1.8" fill="#D4A843" />
                      <circle cx={c.x} cy={c.y} r="9" fill="none" stroke="#C8102E" strokeWidth="0.6" opacity="0.25">
                        <animate attributeName="r" values="4;9;4" dur="2.8s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="2.8s" repeatCount="indefinite" begin={`${i * 0.15}s`} />
                      </circle>
                      <text x={c.x} y={c.y + 18} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.65)" fontFamily="Arial, sans-serif" fontWeight="500">{c.name}</text>
                    </>
                  )}
                </g>
              ))}
            </svg>
          </div>
          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap justify-center gap-3 lg:gap-4 text-[12px] text-white/60">
            {['CE', 'IEC 61439', 'ISO 9001:2015', 'ISO 14001', 'ISO 45001', 'UL Listed', 'State Grid Certified'].map((c, i) => (
              <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg font-semibold tracking-wide">✓ {c}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   PROJECTS - 标杆项目
   ============================================================ */
const FeaturedProjects = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';
  const [filter, setFilter] = useState('all');

  const allProjects = projects;
  const filtered = filter === 'all' ? allProjects : allProjects.filter((p) => p.category === filter);

  const projectColors = [
    { main: '#0F2340', accent: '#D4A843' },
    { main: '#C8102E', accent: '#F5D78A' },
    { main: '#1A365D', accent: '#D4A843' },
    { main: '#0F2340', accent: '#C8102E' },
    { main: '#2A4A73', accent: '#D4A843' },
    { main: '#C8102E', accent: '#F5D78A' },
  ];

  return (
    <section className="bg-white py-20 lg:py-28 xl:py-36">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-10 xl:px-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 lg:mb-18">
          <div className="max-w-[720px] xl:max-w-[800px]">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-full text-[12px] font-bold text-[#C8102E] tracking-wider uppercase mb-5">
              {isZh ? '标杆项目' : 'Featured Projects'}
            </div>
            <h2 className="text-[32px] lg:text-[44px] xl:text-[52px] font-extrabold text-[#0F2340] leading-tight tracking-tight">
              {t('home.featuredProjects')}
            </h2>
            <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-gray-500 leading-[1.7] mt-5">
              {isZh
                ? '我们的设备与系统已应用于全球重大电力和轨道交通项目，建立长期可信赖的合作关系。'
                : 'Our equipment and systems power major energy and rail projects across the globe.'}
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            {[
              { key: 'all', label: isZh ? '全部项目' : 'All Projects' },
              { key: 'domestic', label: isZh ? '国内项目' : 'Domestic' },
              { key: 'overseas', label: isZh ? '海外项目' : 'Overseas' },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-5 py-2.5 text-[13px] font-bold rounded-xl border transition-all no-underline ${
                  filter === f.key
                    ? 'bg-[#0F2340] text-white border-[#0F2340] shadow-[0_6px_20px_rgba(15,35,64,0.25)]'
                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#0F2340] hover:text-[#0F2340]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filtered.map((p, idx) => {
            const c = projectColors[idx % projectColors.length];
            return (
              <Link
                key={p.id}
                to="/projects"
                className="group relative block bg-white rounded-2xl overflow-hidden border border-gray-200/60 hover:border-transparent transition-all duration-500 hover:shadow-[0_32px_72px_rgba(15,35,64,0.15)] hover:-translate-y-2 no-underline"
              >
                <div className="relative aspect-[16/10] overflow-hidden" style={{ background: `linear-gradient(135deg, ${c.main} 0%, ${c.accent}40 100%)` }}>
                  <div className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`,
                      backgroundSize: '24px 24px'
                    }}
                  ></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="80%" height="75%" viewBox="0 0 300 180" preserveAspectRatio="xMidYMid meet" style={{ filter: 'drop-shadow(0 15px 40px rgba(0,0,0,0.25))' }} className="transition-transform duration-500 group-hover:scale-105">
                      {p.category === 'domestic' ? (
                        <>
                          {idx % 3 === 0 && (
                            <>
                              <rect x="40" y="75" width="180" height="40" rx="8" fill="white" opacity="0.95" />
                              <rect x="55" y="85" width="150" height="20" rx="3" fill={c.main} opacity="0.85" />
                              <rect x="60" y="65" width="30" height="15" rx="3" fill="white" opacity="0.95" />
                              <circle cx="65" cy="125" r="8" fill={c.accent} />
                              <circle cx="200" cy="125" r="8" fill={c.accent} />
                              <line x1="20" y1="135" x2="280" y2="135" stroke="white" strokeWidth="2" opacity="0.5" />
                              <line x1="20" y1="140" x2="280" y2="140" stroke="white" strokeWidth="1" opacity="0.3" />
                            </>
                          )}
                          {idx % 3 === 1 && (
                            <>
                              <rect x="30" y="60" width="40" height="80" fill="white" opacity="0.9" />
                              <rect x="80" y="40" width="35" height="100" fill="white" opacity="0.95" />
                              <rect x="125" y="55" width="40" height="85" fill="white" opacity="0.9" />
                              <rect x="175" y="35" width="30" height="105" fill="white" opacity="0.95" />
                              <rect x="215" y="60" width="45" height="80" fill="white" opacity="0.9" />
                              {[70, 95, 120].map((y) => (
                                <g key={y}>
                                  <rect x="38" y={y} width="6" height="10" fill={c.main} opacity="0.7" />
                                  <rect x="90" y={y - 5} width="6" height="10" fill={c.main} opacity="0.7" />
                                  <rect x="140" y={y} width="6" height="10" fill={c.main} opacity="0.7" />
                                  <rect x="185" y={y - 8} width="6" height="10" fill={c.main} opacity="0.7" />
                                  <rect x="230" y={y} width="6" height="10" fill={c.main} opacity="0.7" />
                                </g>
                              ))}
                            </>
                          )}
                          {idx % 3 === 2 && (
                            <>
                              <rect x="60" y="50" width="60" height="90" rx="4" fill="white" opacity="0.95" />
                              <rect x="135" y="35" width="100" height="105" rx="4" fill="white" opacity="0.93" />
                              <rect x="70" y="60" width="10" height="70" rx="2" fill={c.main} opacity="0.85" />
                              <rect x="90" y="60" width="10" height="70" rx="2" fill={c.main} opacity="0.85" />
                              <circle cx="155" cy="75" r="18" fill={c.main} opacity="0.85" />
                              <circle cx="155" cy="75" r="10" fill={c.accent} />
                              <circle cx="200" cy="95" r="14" fill={c.main} opacity="0.85" />
                              <circle cx="200" cy="95" r="7" fill={c.accent} />
                              <line x1="50" y1="150" x2="260" y2="150" stroke={c.main} strokeWidth="2" opacity="0.5" />
                            </>
                          )}
                        </>
                      ) : (
                        <>
                          {idx % 2 === 0 && (
                            <>
                              <line x1="20" y1="140" x2="280" y2="140" stroke="white" strokeWidth="3" opacity="0.6" />
                              <line x1="20" y1="148" x2="280" y2="148" stroke="white" strokeWidth="2" opacity="0.5" />
                              {[30, 55, 80, 105, 130, 155, 180, 205, 230, 255].map((x) => (
                                <rect key={x} x={x} y="135" width="12" height="18" rx="2" fill={c.accent} opacity="0.85" />
                              ))}
                              <rect x="90" y="70" width="130" height="55" rx="6" fill="white" opacity="0.95" />
                              <rect x="100" y="80" width="110" height="22" rx="2" fill={c.main} opacity="0.85" />
                              <circle cx="115" cy="125" r="7" fill={c.accent} />
                              <circle cx="195" cy="125" r="7" fill={c.accent} />
                              <line x1="85" y1="50" x2="220" y2="50" stroke={c.accent} strokeWidth="1.5" opacity="0.6" strokeDasharray="5,3" />
                            </>
                          )}
                          {idx % 2 === 1 && (
                            <>
                              <line x1="30" y1="130" x2="270" y2="130" stroke="white" strokeWidth="1.5" opacity="0.7" />
                              <line x1="30" y1="150" x2="270" y2="150" stroke="white" strokeWidth="1" opacity="0.5" />
                              {[60, 150, 240].map((x) => (
                                <g key={x}>
                                  <path d={`M${x} 40 L${x - 18} 160 L${x + 18} 160 Z`} fill="white" opacity="0.93" />
                                  <line x1={x - 15} y1="90" x2={x + 15} y2="90" stroke={c.main} strokeWidth="1.5" opacity="0.7" />
                                  <line x1={x - 12} y1="120" x2={x + 12} y2="120" stroke={c.main} strokeWidth="1.5" opacity="0.7" />
                                  <circle cx={x} cy="40" r="4" fill={c.accent} />
                                </g>
                              ))}
                              <rect x="100" y="100" width="100" height="50" rx="3" fill="white" opacity="0.95" />
                              <rect x="110" y="110" width="15" height="30" rx="2" fill={c.main} opacity="0.7" />
                              <rect x="135" y="110" width="15" height="30" rx="2" fill={c.main} opacity="0.7" />
                              <rect x="160" y="110" width="15" height="30" rx="2" fill={c.main} opacity="0.7" />
                            </>
                          )}
                        </>
                      )}
                    </svg>
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className={`px-3.5 py-1.5 text-[11px] font-bold rounded-full shadow-sm tracking-wider ${p.category === 'domestic' ? 'bg-white/95 text-[#0F2340]' : 'bg-[#C8102E] text-white'}`}>
                      {p.category === 'domestic' ? (isZh ? '国内项目' : 'DOMESTIC') : (isZh ? '海外项目' : 'OVERSEAS')}
                    </div>
                    <div className="px-3.5 py-1.5 bg-black/30 text-white text-[11px] font-bold rounded-full backdrop-blur-sm tracking-wider">
                      {isZh ? p.industryZh : p.industry}
                    </div>
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-3 text-white text-[12px] font-bold backdrop-blur-sm">
                    <span className="px-3 py-1.5 bg-black/30 rounded-lg">{p.scale}</span>
                    <span className="px-3 py-1.5 bg-black/30 rounded-lg">{p.year}</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2340]/0 via-transparent to-[#0F2340]/0 group-hover:from-[#0F2340]/60 group-hover:via-[#0F2340]/20 group-hover:to-[#0F2340]/50 transition-all duration-500"></div>
                  <div className="absolute inset-0 flex items-end justify-center pb-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#0F2340] text-[13px] font-bold rounded-lg shadow-lg">
                      {isZh ? '查看项目详情' : 'View Project'}
                      <ArrowRightOutlined style={{ fontSize: 12 }} />
                    </span>
                  </div>
                </div>
                <div className="p-6 lg:p-7">
                  <h3 className="text-[18px] lg:text-[19px] font-extrabold text-[#0F2340] mb-3 leading-snug">{isZh ? p.titleZh : p.title}</h3>
                  <p className="text-[13.5px] lg:text-[14px] text-gray-600 leading-[1.7] mb-5">{isZh ? p.summaryZh : p.summary}</p>
                  <div className="flex items-center gap-2 pt-5 border-t border-gray-100">
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-gray-500">
                      <EnvironmentOutlined style={{ fontSize: 12, color: c.main }} />
                      {p.imageLabel}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   TESTIMONIALS - 客户评价
   ============================================================ */
const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const items = [
    {
      quote: isZh ? '中铁电气为我们交付的 230kV 变电站设备质量出色，项目团队响应迅速、技术专业，是值得长期合作的伙伴。' : 'The 230kV substation equipment delivered by China Xuzhou Zhongtie Power Group is excellent. Their technical team is responsive and professional. A long-term partner we trust.',
      author: isZh ? '工程总监' : 'Project Director',
      company: isZh ? '某中东电力公司' : 'Middle East Power Utility',
      initials: 'ME'
    },
    {
      quote: isZh ? '我们的高铁电气化项目对设备可靠性要求极高。中铁电气的产品在严苛工况下表现稳定，供应周期同样令人满意。' : 'Our HSR electrification project required the highest reliability. Zhongtie Power equipment performed consistently under severe conditions and delivery was on schedule.',
      author: isZh ? '首席工程师' : 'Chief Engineer',
      company: isZh ? '东南亚高速铁路公司' : 'Southeast Asian HSR Company',
      initials: 'SE'
    },
    {
      quote: isZh ? '从设计阶段到现场调试，工程师团队的支持非常到位。我们已将其作为多个海外项目的设备供应商。' : 'From design to on-site commissioning, the engineering team was outstanding. We have selected Zhongtie Power as our equipment supplier for multiple overseas projects.',
      author: isZh ? '采购与供应链总监' : 'Procurement Director',
      company: isZh ? '非洲国家铁路公司' : 'African National Railway',
      initials: 'AF'
    },
  ];

  return (
    <section className="bg-[#F8F9FA] py-20 lg:py-28 xl:py-36">
      <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
        <div className="text-center max-w-[720px] xl:max-w-[800px] mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-white border border-gray-200 rounded-full text-[12px] font-bold text-[#C8102E] tracking-wider uppercase mb-5">
            <TeamOutlined style={{ fontSize: 14 }} />
            {isZh ? '客户之声' : 'Client Voices'}
          </div>
          <h2 className="text-[32px] lg:text-[44px] xl:text-[52px] font-extrabold text-[#0F2340] leading-tight tracking-tight mb-5">
            {t('home.testimonials')}
          </h2>
          <p className="text-[15px] lg:text-[16px] xl:text-[17px] text-gray-500 leading-[1.7]">
            {isZh ? '来自全球合作伙伴的真实反馈。' : 'Real feedback from our global partners.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="group relative bg-white rounded-2xl p-8 lg:p-9 border border-gray-200/60 hover:border-transparent transition-all duration-500 hover:shadow-[0_24px_64px_rgba(15,35,64,0.12)] hover:-translate-y-1.5">
              <div className="flex gap-1.5 mb-6 text-[#D4A843] text-lg">
                {[...Array(5)].map((_, i) => <StarFilled key={i} />)}
              </div>
              <div className="text-[15px] lg:text-[16px] text-gray-700 leading-[1.85] italic mb-10 relative">
                <span className="absolute top-0 left-0 text-[#C8102E] text-4xl font-serif leading-none opacity-20 -mt-2 -ml-1">&ldquo;</span>
                <span className="relative pl-6">{item.quote}</span>
              </div>
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold text-white text-sm shadow-sm"
                  style={{ background: `linear-gradient(135deg, #0F2340, #1A365D)` }}>
                  {item.initials}
                </div>
                <div>
                  <div className="text-[15px] font-bold text-[#0F2340]">{item.author}</div>
                  <div className="text-[13px] text-gray-500 mt-1">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   CTA - 询价行动号召
   ============================================================ */
const CTA = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A33] via-[#0F2340] to-[#1A365D] text-white py-20 lg:py-28 xl:py-36">
      <div className="absolute top-0 right-0 w-[520px] h-[520px] bg-[#D4A843] rounded-full opacity-[0.08] blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[480px] h-[480px] bg-[#C8102E] rounded-full opacity-[0.08] blur-[160px] pointer-events-none"></div>

      <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16 text-center">
        <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-white/10 border border-white/15 rounded-full text-[13px] font-bold text-[#D4A843] tracking-wider uppercase mb-6">
          {isZh ? '立即行动' : 'Get Started'}
        </div>
        <h2 className="text-[34px] lg:text-[52px] font-extrabold text-white leading-tight tracking-tight mb-6 max-w-[840px] mx-auto">
          {t('home.readyToPower')}
        </h2>
        <p className="text-[15px] lg:text-[18px] text-white/75 leading-[1.8] mb-10 max-w-[720px] xl:max-w-[800px] mx-auto">
          {t('home.readyDesc')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-5 mb-12">
          <Link to="/contact" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[16px] font-bold rounded-xl no-underline shadow-[0_14px_48px_rgba(200,16,46,0.5)] hover:shadow-[0_20px_60px_rgba(200,16,46,0.7)] transition-all hover:translate-y-[-2px]">
            {t('home.getFreeQuote')}
            <ArrowRightOutlined style={{ fontSize: 16 }} />
          </Link>
          <a href="mailto:jyun20974@gmail.com" className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/35 text-white text-[16px] font-bold rounded-xl no-underline backdrop-blur-sm transition-all hover:translate-y-[-2px]">
            {isZh ? '发送邮件至 jyun20974@gmail.com' : 'Email: jyun20974@gmail.com'}
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[13px] lg:text-[14px] xl:text-[15px] font-semibold text-white/70 tracking-wide">
          <span className="inline-flex items-center gap-2.5">
            <CheckCircleFilled style={{ color: '#D4A843', fontSize: 16 }} />
            {isZh ? '24 小时内响应' : 'Response within 24 Hours'}
          </span>
          <span className="inline-flex items-center gap-2.5">
            <CheckCircleFilled style={{ color: '#D4A843', fontSize: 16 }} />
            {isZh ? '免费技术咨询' : 'Free Technical Consultation'}
          </span>
          <span className="inline-flex items-center gap-2.5">
            <CheckCircleFilled style={{ color: '#D4A843', fontSize: 16 }} />
            {isZh ? '定制化解决方案' : 'Custom Solutions'}
          </span>
          <span className="inline-flex items-center gap-2.5">
            <CheckCircleFilled style={{ color: '#D4A843', fontSize: 16 }} />
            {isZh ? '全英文沟通支持' : 'English Communication'}
          </span>
        </div>
      </div>
    </section>
  );
};


/* ============================================================
   HOME PAGE - 组合所有板块
   ============================================================ */
const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <VideoSection />
      <Advantages />
      <FeaturedProducts />
      <GlobalNetwork />
      <FeaturedProjects />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default HomePage;
