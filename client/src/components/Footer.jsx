import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EnvironmentOutlined, PhoneOutlined, MailOutlined, MessageFilled, GlobalOutlined } from '@ant-design/icons';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const isZh = i18n.language === 'zh';
  const bgDark = pathname === '/'; // Hero 区域有深背景，footer 保持独立风格

  const products = i18n.language === 'zh'
    ? ['电力变压器', '开关柜与断路器', '输电线路', '变电站设备', '智能电网解决方案', '预制变电站']
    : ['Power Transformers', 'Switchgear & Circuit Breakers', 'Transmission Lines', 'Substation Equipment', 'Smart Grid Solutions', 'Prefabricated Substations'];

  return (
    <footer className="footer">
      <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">{isZh ? '中国徐州中铁电气集团' : 'Xuzhou CREC Group'}</div>
            <div className="footer-brand-sub">
              {isZh
                ? '铁路电气化与电力系统解决方案服务商，为全球 30+ 国家客户提供高品质电力设备与工程服务。'
                : 'Railway electrification and power system solutions provider serving partners in 30+ countries worldwide.'}
            </div>
            <div className="footer-socials">
              <a href="https://wa.me/8618352225109" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="WhatsApp">
                <MessageFilled />
              </a>
              <a href="mailto:jyun20974@gmail.com" className="social-icon" aria-label="Email">
                <MailOutlined />
              </a>
              <a href="tel:+8618352225109" className="social-icon" aria-label="Phone">
                <PhoneOutlined />
              </a>
              <a href="#" className="social-icon" aria-label="Skype">
                <GlobalOutlined />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('footer.quickLinks')}</h4>
            <Link to="/">{isZh ? '首页' : 'Home'}</Link>
            <Link to="/about">{isZh ? '关于我们' : 'About Us'}</Link>
            <Link to="/products">{isZh ? '产品中心' : 'Products'}</Link>
            <Link to="/projects">{isZh ? '项目案例' : 'Projects'}</Link>
            <Link to="/downloads">{isZh ? '资料下载' : 'Downloads'}</Link>
            <Link to="/contact">{isZh ? '联系我们' : 'Contact'}</Link>
          </div>

          <div className="footer-col">
            <h4>{t('footer.productCategories')}</h4>
            {products.slice(0, 6).map((p, i) => (
              <Link to="/products" key={i}>{p}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>{t('footer.contactInfo')}</h4>
            <div className="footer-contact-item">
              <EnvironmentOutlined className="footer-contact-icon" />
              <span>{isZh ? '中国 · 徐州 · 高新技术产业开发区工业园' : 'Industrial Park, High-Tech Zone, Xuzhou, China'}</span>
            </div>
            <div className="footer-contact-item">
              <PhoneOutlined className="footer-contact-icon" />
              <span>+86 18352225109</span>
            </div>
            <div className="footer-contact-item">
              <MailOutlined className="footer-contact-icon" />
              <span>jyun20974@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <MessageFilled className="footer-contact-icon" />
              <span>+86 18352225109</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{t('footer.copyright')}</span>
          <span>{isZh ? 'ISO 9001 · IEC · CE · UL 认证企业' : 'ISO 9001 · IEC · CE · UL Certified Manufacturer'}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
