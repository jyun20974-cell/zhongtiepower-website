import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRightOutlined, EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
import { projects } from '../data/catalog.js';

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';
  const [filter, setFilter] = useState('all');

  const filtered = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
  const colors = [
    { main: '#0F2340', accent: '#D4A843' },
    { main: '#C8102E', accent: '#F5D78A' },
    { main: '#1A365D', accent: '#D4A843' },
    { main: '#2A4A73', accent: '#D4A843' },
    { main: '#C8102E', accent: '#F5D78A' },
    { main: '#0F2340', accent: '#C8102E' },
  ];

  return (
    <div className="bg-white">
      <section className="relative overflow-hidden pt-28 pb-16 lg:pt-40 lg:pb-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 50%, #1A365D 100%)' }}>
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#D4A843] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#C8102E] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-[11.5px] font-bold text-[#D4A843] tracking-wider uppercase mb-5">
            <EnvironmentOutlined style={{ fontSize: 12 }} />
            {isZh ? '项目案例' : 'Case Studies'}
          </div>
          <h1 className="text-[34px] lg:text-[52px] font-extrabold leading-[1.15] tracking-tight mb-5 max-w-[820px] mx-auto">
            {isZh ? '全球标杆项目案例' : 'Featured Global Projects'}
          </h1>
          <p className="text-[14.5px] lg:text-[16.5px] text-white/80 leading-[1.85] mb-8 max-w-[720px] mx-auto">
            {isZh
              ? '从中国高铁到东南亚铁路，从非洲电气化到中东电网升级，真实落地项目见证我们的技术实力与全球交付能力。'
              : 'From China high-speed rail to Southeast Asian railways, from African electrification to Middle East grid upgrades — real projects demonstrate our capability and global delivery.'}
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { k: 'all', l: isZh ? '全部项目' : 'All Projects' },
              { k: 'domestic', l: isZh ? '国内项目' : 'Domestic' },
              { k: 'overseas', l: isZh ? '海外项目' : 'Overseas' },
            ].map((f) => (
              <button key={f.k} onClick={() => setFilter(f.k)}
                className={`px-5 py-2.5 text-[13px] font-bold rounded-lg border transition-all ${
                  filter === f.k
                    ? 'bg-white text-[#0F2340] border-white'
                    : 'bg-white/5 text-white border-white/20 hover:bg-white/10 hover:border-white/30'
                }`}>
                {f.l}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 项目网格 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-12">
            {filtered.map((p, idx) => {
              const c = colors[idx % colors.length];
              return (
                <Link key={p.id} to="/contact" className="group relative block bg-white rounded-2xl overflow-hidden border border-gray-200/60 hover:border-transparent transition-all duration-400 hover:shadow-[0_35px_80px_rgba(15,35,64,0.18)] hover:-translate-y-1.5 no-underline">
                  <div className="relative aspect-[4/3] overflow-hidden"
                    style={{ background: `linear-gradient(135deg, ${c.main} 0%, ${c.accent}40 100%)` }}>
                    <div className="absolute inset-0 opacity-[0.08]"
                      style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.7) 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="75%" height="75%" viewBox="0 0 300 180" preserveAspectRatio="xMidYMid meet" style={{ filter: 'drop-shadow(0 15px 40px rgba(0,0,0,0.25))' }} className="transition-transform duration-500 group-hover:scale-105">
                        <rect x="40" y="75" width="220" height="45" rx="6" fill="white" opacity="0.95" />
                        <rect x="55" y="88" width="190" height="20" rx="2" fill={c.main} opacity="0.85" />
                        <circle cx="65" cy="128" r="8" fill={c.accent} />
                        <circle cx="235" cy="128" r="8" fill={c.accent} />
                        <circle cx="300" cy="128" r="0" fill={c.accent} />
                        <line x1="20" y1="140" x2="280" y2="140" stroke="white" strokeWidth="2.5" opacity="0.55" />
                        <line x1="20" y1="150" x2="280" y2="150" stroke="white" strokeWidth="1.5" opacity="0.4" />
                        {[40, 75, 110, 145, 180, 215, 250].map((x) => (
                          <rect key={x} x={x} y="138" width="10" height="15" rx="1.5" fill={c.accent} opacity="0.8" />
                        ))}
                        <line x1="60" y1="55" x2="240" y2="55" stroke={c.accent} strokeWidth="1.5" opacity="0.55" strokeDasharray="6,4" />
                      </svg>
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <div className={`px-3 py-1.5 text-[10.5px] font-bold rounded-full shadow-sm tracking-wider ${
                        p.category === 'domestic' ? 'bg-white/95 text-[#0F2340]' : 'bg-[#C8102E] text-white'
                      }`}>
                        {p.category === 'domestic' ? (isZh ? '国内' : 'DOMESTIC') : (isZh ? '海外' : 'OVERSEAS')}
                      </div>
                      <div className="px-3 py-1.5 bg-black/25 text-white text-[10.5px] font-bold rounded-full backdrop-blur-sm tracking-wider">
                        {isZh ? p.industryZh : p.industry}
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 flex items-center gap-2 text-white text-[11.5px] font-bold">
                      <span className="px-2.5 py-1 bg-black/35 rounded-lg backdrop-blur-sm">{p.scale}</span>
                      <span className="px-2.5 py-1 bg-black/35 rounded-lg backdrop-blur-sm"><CalendarOutlined style={{ fontSize: 11 }} /> {p.year}</span>
                    </div>
                    <div className="absolute inset-0 flex items-end justify-center pb-10 opacity-0 group-hover:opacity-100 transition-all duration-400">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C8102E] text-white text-[12.5px] font-bold rounded-lg shadow-lg">{t('nav.requestQuote')} <ArrowRightOutlined style={{ fontSize: 11 }} /></span>
                    </div>
                  </div>
                  <div className="p-5 lg:p-6">
                    <h3 className="text-[17px] lg:text-[18.5px] font-extrabold text-[#0F2340] mb-3 leading-snug">{isZh ? p.titleZh : p.title}</h3>
                    <p className="text-[13px] lg:text-[13.5px] text-gray-600 leading-[1.78] mb-5">{isZh ? p.summaryZh : p.summary}</p>
                    <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-[12.5px] font-semibold" style={{ color: c.main }}>{p.imageLabel}</span>
                      <span className="inline-flex items-center gap-2 text-[12.5px] font-bold text-gray-700 group-hover:text-[#C8102E] transition-colors">
                        {isZh ? '了解更多' : 'Learn More'} <ArrowRightOutlined style={{ fontSize: 12 }} />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="relative overflow-hidden py-16 lg:py-20 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 50%, #1A365D 100%)' }}>
        <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#D4A843] rounded-full opacity-[0.08] blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C8102E] rounded-full opacity-[0.08] blur-[130px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16 text-center">
          <h2 className="text-[28px] lg:text-[42px] font-extrabold leading-tight tracking-tight mb-5">
            {isZh ? '有类似项目需求？' : 'Have a Similar Project in Mind?'}
          </h2>
          <p className="text-[14px] lg:text-[16px] text-white/75 leading-[1.8] mb-8 max-w-[640px] mx-auto">
            {isZh ? '将您的工程需求告诉我们的团队，我们将在 24 小时内为您提供定制化方案和报价。' : 'Share your engineering requirements with our team and we will deliver a tailored proposal and quote within 24 hours.'}
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[15px] font-bold rounded-xl no-underline shadow-[0_12px_40px_rgba(200,16,46,0.4)] transition-all hover:translate-y-[-1px]">
            {t('nav.getQuote')} <ArrowRightOutlined style={{ fontSize: 14 }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
