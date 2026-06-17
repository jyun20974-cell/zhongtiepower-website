import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MenuOutlined, CloseOutlined, ThunderboltOutlined } from '@ant-design/icons';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h, { passive: true });
    h();
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location.pathname]);

  const links = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/products', label: t('nav.products') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/downloads', label: t('nav.downloads') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const active = (p) => p === '/' ? location.pathname === '/' : location.pathname.startsWith(p);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    if (typeof window !== 'undefined') localStorage.setItem('crec_lang', lng);
  };

  const isZh = i18n.language === 'zh';

  return (
    <>
      {/* 主导航栏 — 始终白色实色背景，确保可见 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(15,35,64,0.08)] border-b border-gray-100'
          : 'bg-white shadow-[0_1px_3px_rgba(15,35,64,0.06)]'
      }`}>
        <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-4 lg:px-10 xl:px-16">
          <div className="flex items-center justify-between h-[64px] lg:h-[72px]">
            {/* Logo — 超窄屏只显示图标 */}
            <Link to="/" className="flex items-center gap-2 shrink-0 no-underline group">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl flex items-center justify-center shadow-sm transition-transform group-hover:scale-105 bg-[#0F2340]">
                <ThunderboltOutlined style={{ fontSize: 16, color: '#D4A843' }} />
              </div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="text-[14px] lg:text-[16px] font-bold tracking-tight text-[#0F2340]">
                  {isZh ? '徐州中铁电气' : 'Xuzhou CREC'}
                </span>
                <span className="hidden lg:block text-[10px] lg:text-[11px] font-medium text-gray-500" style={{ letterSpacing: '0.03em' }}>
                  {isZh ? '铁路电气化与电力系统解决方案服务商' : 'Power Equipment & Railway Electrification'}
                </span>
              </div>
            </Link>

            {/* 导航链接 — 所有屏幕尺寸都显示，超窄屏缩小字体和间距 */}
            <div className="flex items-center gap-0 overflow-hidden">
              {links.map(l => (
                <Link key={l.path} to={l.path} className={`px-0.5 sm:px-1.5 lg:px-4 py-2 text-[9px] sm:text-[11px] lg:text-[15px] rounded-lg sm:rounded-xl font-medium transition-all duration-200 no-underline whitespace-nowrap ${
                  active(l.path)
                    ? 'text-[#C8102E] bg-red-50'
                    : 'text-gray-700 hover:text-[#0F2340] hover:bg-gray-50'
                }`}>{l.label}</Link>
              ))}
            </div>

            {/* 右侧操作区 */}
            <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 shrink-0">
              {/* 语言切换 — 所有屏幕尺寸可见，超窄屏缩小 */}
              <div className="flex items-center bg-gray-100 rounded-lg sm:rounded-xl p-0.5 sm:p-1 border border-gray-200">
                <button
                  onClick={() => changeLang('en')}
                  className={`px-1.5 sm:px-2 lg:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] lg:text-[13px] font-semibold rounded-md sm:rounded-lg transition-all ${
                    i18n.language === 'en' ? 'bg-white text-[#0F2340] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >EN</button>
                <button
                  onClick={() => changeLang('zh')}
                  className={`px-1.5 sm:px-2 lg:px-3 py-1 sm:py-1.5 text-[10px] sm:text-[11px] lg:text-[13px] font-semibold rounded-md sm:rounded-lg transition-all ${
                    i18n.language === 'zh' ? 'bg-white text-[#0F2340] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >中文</button>
              </div>

              {/* CTA 按钮 — sm以上显示 */}
              <Link to="/contact" className="hidden sm:inline-flex items-center justify-center gap-2 px-2 lg:px-5 py-2.5 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[11px] lg:text-[13px] font-bold rounded-xl transition-all no-underline shadow-[0_4px_16px_rgba(200,16,46,0.3)] hover:shadow-[0_6px_24px_rgba(200,16,46,0.4)] hover:-translate-y-0.5 whitespace-nowrap">
                {t('nav.getQuote')}
              </Link>

              {/* 移动端菜单按钮 — sm以下显示 */}
              <button onClick={() => setMobileOpen(!mobileOpen)} className="sm:hidden p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors">
                {mobileOpen ? <CloseOutlined style={{ fontSize: 20 }} /> : <MenuOutlined style={{ fontSize: 20 }} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 移动端抽屉菜单 — sm以下 */}
      <div className={`sm:hidden fixed inset-0 z-40 bg-white transform transition-transform duration-300 ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`} style={{ top: 64 }}>
        <div className="flex flex-col p-6 gap-2">
          {links.map(l => (
            <Link key={l.path} to={l.path} className={`px-5 py-4 rounded-xl text-[16px] font-semibold no-underline transition-colors ${
              active(l.path) ? 'text-[#C8102E] bg-red-50' : 'text-gray-800 hover:bg-gray-50'
            }`}>{l.label}</Link>
          ))}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <Link to="/contact" className="flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C8102E] text-white text-[15px] font-bold rounded-xl no-underline shadow-[0_4px_16px_rgba(200,16,46,0.3)]">
              {t('nav.getQuote')}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
