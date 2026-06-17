import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { EnvironmentOutlined, CalendarOutlined, TrophyOutlined, TeamOutlined, GlobalOutlined, SafetyCertificateOutlined, BulbFilled, ArrowRightOutlined, CheckCircleFilled } from '@ant-design/icons';

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const stats = [
    { num: '70+', label: isZh ? '年制造经验' : 'Years of Manufacturing', color: '#0F2340' },
    { num: '30+', label: isZh ? '服务国家和地区' : 'Countries Served', color: '#C8102E' },
    { num: '80,000', label: isZh ? '平方米智造基地' : 'sqm Smart Factory', color: '#1A365D' },
    { num: '1200+', label: isZh ? '专业员工' : 'Professional Staff', color: '#D4A843' },
  ];

  const milestones = [
    { year: '1952', title: isZh ? '公司成立' : 'Company Founded', desc: isZh ? '创立于中国，开始制造电力变压器。' : 'Founded in China, began manufacturing power transformers.' },
    { year: '1985', title: isZh ? '进入开关设备领域' : 'Switchgear Division', desc: isZh ? '设立开关柜事业部，完善中高压产品线。' : 'Established switchgear division for complete MV/HV product line.' },
    { year: '2001', title: isZh ? '首次出口海外' : 'First Overseas Export', desc: isZh ? '产品开始出口亚洲和非洲市场。' : 'Products exported to Asian and African markets.' },
    { year: '2010', title: isZh ? '高铁电气化配套' : 'HSR Electrification', desc: isZh ? '成为中国高铁电气化核心设备供应商。' : 'Became a key supplier for China high-speed rail electrification.' },
    { year: '2018', title: isZh ? '智能制造基地' : 'Smart Manufacturing Base', desc: isZh ? '8 万平方米智能工厂投产，自动化程度大幅提升。' : '80,000 sqm smart factory launched with high automation.' },
    { year: '2024', title: isZh ? '全球 30+ 国市场' : '30+ Countries Worldwide', desc: isZh ? '产品和服务覆盖六大洲 30+ 国家和地区。' : 'Products and services serve 30+ countries across 6 continents.' },
  ];

  const values = [
    { icon: SafetyCertificateOutlined, title: isZh ? '品质优先' : 'Quality First', desc: isZh ? 'IEC、ISO、CE、UL 等国际认证，全流程质量控制。' : 'IEC, ISO, CE and UL certified — end-to-end quality control.', color: '#0F2340' },
    { icon: BulbFilled, title: isZh ? '创新驱动' : 'Innovation Driven', desc: isZh ? '持续研发投入，拥有多项核心专利与技术。' : 'Sustained R&D investment, multiple core patents and technologies.', color: '#C8102E' },
    { icon: GlobalOutlined, title: isZh ? '全球服务' : 'Global Service', desc: isZh ? '5 大区域服务中心，提供 7×24 小时技术支持。' : '5 regional service centers with 24/7 technical support worldwide.', color: '#1A365D' },
    { icon: TeamOutlined, title: isZh ? '长期伙伴' : 'Long-term Partner', desc: isZh ? '与国家电网等核心客户建立长期战略合作关系。' : 'Long-term strategic partnerships with State Grid and key clients.', color: '#D4A843' },
  ];

  return (
    <div className="bg-white">
      {/* 顶部 Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-28 text-white" style={{ background: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 50%, #1A365D 100%)' }}>
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#D4A843] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#C8102E] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
          <div className="max-w-[780px]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-[11.5px] font-bold text-[#D4A843] tracking-wider uppercase mb-5">
              <EnvironmentOutlined style={{ fontSize: 12 }} />
              {isZh ? '关于我们' : 'About Us'}
            </div>
            <h1 className="text-[34px] lg:text-[52px] font-extrabold leading-[1.15] tracking-tight mb-6">
              {isZh ? '全球电力与铁路电气化' : 'Powering the World with'}
              <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #D4A843, #F5D78A)' }}>
                {isZh ? '值得信赖的中国制造商' : 'Reliable Chinese Engineering'}
              </span>
            </h1>
            <p className="text-[14.5px] lg:text-[16.5px] text-white/80 leading-[1.85] mb-8 max-w-[680px]">
              {isZh
                ? '自 1952 年成立以来，我们专注于电力变压器、开关柜及铁路电气化系统的研发与制造。产品和服务已覆盖 30+ 国家和地区。'
                : 'Since 1952, we have focused on the R&D and manufacturing of power transformers, switchgear and railway electrification systems, serving partners in 30+ countries worldwide.'}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[14px] font-bold rounded-xl no-underline shadow-[0_10px_35px_rgba(200,16,46,0.4)] transition-all hover:translate-y-[-1px]">
                {t('nav.getQuote')}
                <ArrowRightOutlined style={{ fontSize: 13 }} />
              </Link>
              <Link to="/products" className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/35 text-white text-[14px] font-bold rounded-xl no-underline transition-all hover:translate-y-[-1px] backdrop-blur-sm">
                {isZh ? '查看产品' : 'View Products'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 关键数据 */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            {stats.map((s, i) => (
              <div key={i} className="bg-[#F8F9FA] hover:bg-white rounded-2xl p-7 text-center border border-gray-200/60 hover:border-transparent transition-all duration-300 hover:shadow-[0_20px_60px_rgba(15,35,64,0.15)] hover:-translate-y-1">
                <div className="text-[38px] lg:text-[48px] font-extrabold leading-none tracking-tight" style={{ color: s.color }}>{s.num}</div>
                <div className="text-[12px] lg:text-[13px] text-gray-600 font-semibold mt-3 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 企业简介 + 核心价值 */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-gray-200 rounded-full text-[11.5px] font-bold text-[#C8102E] tracking-wider uppercase mb-4">
                {isZh ? '公司介绍' : 'Company Profile'}
              </div>
              <h2 className="text-[28px] lg:text-[38px] font-extrabold text-[#0F2340] leading-tight tracking-tight mb-6">
                {isZh ? '七十余年专注电力设备制造' : '70+ Years of Focused Power Equipment Manufacturing'}
              </h2>
              <div className="space-y-5 text-[14.5px] lg:text-[15.5px] text-gray-600 leading-[1.85]">
                <p>
                  {isZh
                    ? '我们是一家拥有 70 余年历史的电力设备制造企业，总部位于中国。经过数十年的深耕与技术积累，我们已发展成为集研发、设计、制造、销售和服务于一体的综合型电力设备解决方案提供商。'
                    : 'We are a power equipment manufacturer with 70+ years of heritage, headquartered in China. Decades of deep technical expertise have shaped us into an integrated solution provider covering R&D, design, manufacturing, sales and service.'}
                </p>
                <p>
                  {isZh
                    ? '我们的核心产品包括 10kV - 500kV 油浸式变压器、干式变压器、SF6 气体绝缘开关柜、真空断路器、预装式变电站、移动式变电站等，覆盖发电、输电、配电及铁路电气化等全链条应用场景。'
                    : 'Our core products include 10kV-500kV oil-immersed transformers, dry-type transformers, SF6 gas-insulated switchgear, vacuum circuit breakers, prefabricated substations and mobile substations — covering generation, transmission, distribution and railway electrification.'}
                </p>
                <p>
                  {isZh
                    ? '作为国家电网等核心客户的长期合格供应商，我们始终将产品质量、可靠性和长期稳定性放在第一位，建立起从原材料入厂到出厂检验的全流程质量管控体系。'
                    : 'As a long-term qualified supplier to State Grid and other key customers, we consistently place product quality, reliability and long-term stability first, with end-to-end quality control from incoming materials to final testing.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
              {values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="bg-white rounded-2xl p-6 lg:p-7 border border-gray-200/60 hover:border-transparent transition-all duration-400 hover:shadow-[0_20px_60px_rgba(15,35,64,0.15)] hover:-translate-y-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 border shadow-sm"
                      style={{ background: `${v.color}12`, color: v.color, borderColor: `${v.color}20` }}
                    >
                      <Icon style={{ fontSize: 20 }} />
                    </div>
                    <h3 className="text-[17px] font-bold text-[#0F2340] mb-3">{v.title}</h3>
                    <p className="text-[13.5px] text-gray-600 leading-[1.75]">{v.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程时间轴 */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="text-center mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F9FA] border border-gray-200 rounded-full text-[11.5px] font-bold text-[#C8102E] tracking-wider uppercase mb-4">
              <CalendarOutlined style={{ fontSize: 12 }} />
              {isZh ? '发展历程' : 'Milestones'}
            </div>
            <h2 className="text-[28px] lg:text-[40px] font-extrabold text-[#0F2340] leading-tight tracking-tight mb-4">
              {isZh ? '从初创到全球' : 'From Startup to Global'}
            </h2>
            <p className="text-[14px] lg:text-[15px] text-gray-500 leading-[1.7] max-w-[620px] mx-auto">
              {isZh ? '七十余年持续创新与积累，每一步都铸就今日的全球影响力。' : 'Over 70 years of continuous innovation, each step building today\'s global reach.'}
            </p>
          </div>

          <div className="relative">
            {/* 时间轴线 */}
            <div className="hidden md:block absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-[#0F2340] via-[#1A365D] to-[#C8102E] opacity-20"></div>

            <div className="space-y-6 lg:space-y-8">
              {milestones.map((m, i) => (
                <div key={i} className="relative md:pl-20">
                  <div className="hidden md:flex absolute left-0 w-12 h-12 rounded-full items-center justify-center text-[11.5px] font-extrabold text-white shadow-lg"
                    style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #0F2340, #1A365D)' : 'linear-gradient(135deg, #C8102E, #A00D25)' }}>
                    {m.year.substring(2)}
                  </div>
                  <div className="bg-[#F8F9FA] hover:bg-white rounded-2xl p-6 lg:p-7 border border-gray-200/60 hover:border-transparent transition-all duration-300 hover:shadow-[0_20px_60px_rgba(15,35,64,0.15)] hover:-translate-y-0.5">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="inline-flex items-center justify-center w-10 h-8 md:w-14 md:h-10 rounded-lg text-[12px] md:text-[14px] font-extrabold text-white"
                        style={{ background: i % 2 === 0 ? 'linear-gradient(135deg, #0F2340, #1A365D)' : 'linear-gradient(135deg, #C8102E, #A00D25)' }}>
                        {m.year}
                      </span>
                      <h3 className="text-[17px] lg:text-[19px] font-bold text-[#0F2340]">{m.title}</h3>
                    </div>
                    <p className="text-[13.5px] lg:text-[14.5px] text-gray-600 leading-[1.8]">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 认证墙 */}
      <section className="py-14 lg:py-16 bg-[#F8F9FA]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="text-center mb-8">
            <h3 className="text-[22px] lg:text-[28px] font-extrabold text-[#0F2340] tracking-tight mb-2">
              {isZh ? '国际认证与合作客户' : 'International Certifications & Partners'}
            </h3>
            <p className="text-[13.5px] text-gray-500">{isZh ? '权威认证与行业合作' : 'Industry certifications and partnerships'}</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-5 lg:gap-8">
            {['ISO 9001', 'ISO 14001', 'ISO 45001', 'IEC 61439', 'IEC 60076', 'CE Mark', 'UL Listed', isZh ? '国家电网认证' : 'State Grid'].map((c, i) => (
              <div key={i} className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200/60 rounded-xl text-[12.5px] lg:text-[13.5px] font-bold text-[#0F2340] shadow-sm hover:shadow-md transition-all">
                <TrophyOutlined style={{ fontSize: 15, color: '#D4A843' }} />
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 lg:py-24 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 50%, #1A365D 100%)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4A843] rounded-full opacity-[0.08] blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#C8102E] rounded-full opacity-[0.08] blur-[130px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16 text-center">
          <h2 className="text-[28px] lg:text-[44px] font-extrabold leading-tight tracking-tight mb-5">
            {isZh ? '准备好开始您的项目了吗？' : 'Ready to Power Your Project?'}
          </h2>
          <p className="text-[14px] lg:text-[16px] text-white/75 leading-[1.8] mb-8 max-w-[620px] mx-auto">
            {isZh ? '让我们的专家为您的电力基础设施项目提供量身定制的解决方案，今天即可获取免费技术咨询与报价。' : 'Let our experts deliver tailored solutions for your power infrastructure project — get a free consultation and quote today.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[15px] font-bold rounded-xl no-underline shadow-[0_12px_40px_rgba(200,16,46,0.4)] transition-all hover:translate-y-[-1px]">
              {t('nav.getQuote')} <ArrowRightOutlined style={{ fontSize: 14 }} />
            </Link>
            <Link to="/projects" className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-[15px] font-bold rounded-xl no-underline transition-all hover:translate-y-[-1px] backdrop-blur-sm">
              {isZh ? '查看标杆项目' : 'View Featured Projects'} <ArrowRightOutlined style={{ fontSize: 14 }} />
            </Link>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8 text-[12.5px] font-semibold text-white/70">
            <span className="inline-flex items-center gap-2"><CheckCircleFilled style={{ color: '#D4A843', fontSize: 14 }} />{isZh ? '24 小时内响应' : 'Response within 24 Hours'}</span>
            <span className="inline-flex items-center gap-2"><CheckCircleFilled style={{ color: '#D4A843', fontSize: 14 }} />{isZh ? '英文沟通支持' : 'English Communication'}</span>
            <span className="inline-flex items-center gap-2"><CheckCircleFilled style={{ color: '#D4A843', fontSize: 14 }} />{isZh ? '定制化方案' : 'Custom Solutions'}</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
