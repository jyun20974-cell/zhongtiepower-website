import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { DownloadOutlined, FileTextOutlined, SafetyCertificateOutlined, ToolOutlined, BulbFilled, ArrowRightOutlined } from '@ant-design/icons';

const DownloadsPage = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const categories = [
    {
      title: isZh ? '产品技术手册' : 'Product Catalogs & Brochures',
      icon: FileTextOutlined,
      color: '#0F2340',
      items: [
        { name: isZh ? '油浸式电力变压器完整手册' : 'Oil-Immersed Power Transformer — Complete Catalog', size: isZh ? 'PDF · 8.2 MB' : 'PDF · 8.2 MB' },
        { name: isZh ? '干式变压器技术规格手册' : 'Dry-Type Transformer Technical Specification', size: isZh ? 'PDF · 5.6 MB' : 'PDF · 5.6 MB' },
        { name: isZh ? 'SF6 气体绝缘开关柜产品手册' : 'SF6 Gas-Insulated Switchgear Product Catalog', size: isZh ? 'PDF · 10.1 MB' : 'PDF · 10.1 MB' },
        { name: isZh ? '真空断路器选型指南' : 'Vacuum Circuit Breaker Selection Guide', size: isZh ? 'PDF · 3.8 MB' : 'PDF · 3.8 MB' },
        { name: isZh ? '预装式 & 移动变电站综合手册' : 'Prefabricated & Mobile Substation Catalog', size: isZh ? 'PDF · 12.4 MB' : 'PDF · 12.4 MB' },
        { name: isZh ? '铁路电气化设备解决方案' : 'Railway Electrification Equipment Solutions', size: isZh ? 'PDF · 9.3 MB' : 'PDF · 9.3 MB' },
      ]
    },
    {
      title: isZh ? '认证与资质证书' : 'Certifications & Qualifications',
      icon: SafetyCertificateOutlined,
      color: '#C8102E',
      items: [
        { name: isZh ? 'ISO 9001: 2015 质量管理体系认证' : 'ISO 9001:2015 Quality Management System Certificate', size: isZh ? 'PDF · 0.8 MB' : 'PDF · 0.8 MB' },
        { name: isZh ? 'ISO 14001 环境管理体系认证' : 'ISO 14001 Environmental Management Certificate', size: isZh ? 'PDF · 0.7 MB' : 'PDF · 0.7 MB' },
        { name: isZh ? 'ISO 45001 职业健康安全认证' : 'ISO 45001 Occupational Health & Safety Certificate', size: isZh ? 'PDF · 0.8 MB' : 'PDF · 0.8 MB' },
        { name: isZh ? 'CE 符合性声明 (LVD/EMC)' : 'CE Declaration of Conformity (LVD/EMC)', size: isZh ? 'PDF · 1.2 MB' : 'PDF · 1.2 MB' },
        { name: isZh ? 'IEC 61439 / IEC 60076 标准测试报告' : 'IEC 61439 & IEC 60076 Test Reports', size: isZh ? 'PDF · 2.4 MB' : 'PDF · 2.4 MB' },
        { name: isZh ? '国家电网合格供应商证书' : 'State Grid Qualified Supplier Certificate', size: isZh ? 'PDF · 0.6 MB' : 'PDF · 0.6 MB' },
      ]
    },
    {
      title: isZh ? '工程与技术资源' : 'Engineering & Technical Resources',
      icon: ToolOutlined,
      color: '#1A365D',
      items: [
        { name: isZh ? '变电站设计指南 (35kV - 500kV)' : 'Substation Design Guide (35kV to 500kV)', size: isZh ? 'PDF · 18.5 MB' : 'PDF · 18.5 MB' },
        { name: isZh ? '铁路牵引供电系统选型手册' : 'Railway Traction Power Supply Selection Guide', size: isZh ? 'PDF · 12.8 MB' : 'PDF · 12.8 MB' },
        { name: isZh ? '智能配电自动化解决方案白皮书' : 'Smart Distribution Automation Solution Whitepaper', size: isZh ? 'PDF · 6.2 MB' : 'PDF · 6.2 MB' },
        { name: isZh ? '电力设备海外运输与交付流程' : 'Overseas Logistics & Delivery Process Guide', size: isZh ? 'PDF · 3.1 MB' : 'PDF · 3.1 MB' },
        { name: isZh ? '调试与安装指导手册' : 'Commissioning & Installation Guide', size: isZh ? 'PDF · 8.7 MB' : 'PDF · 8.7 MB' },
        { name: isZh ? '产品常见问题 FAQ' : 'Product FAQ Document', size: isZh ? 'PDF · 2.2 MB' : 'PDF · 2.2 MB' },
      ]
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-14 lg:pt-40 lg:pb-20 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 50%, #1A365D 100%)' }}>
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#D4A843] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#C8102E] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-[11.5px] font-bold text-[#D4A843] tracking-wider uppercase mb-5">
            <DownloadOutlined style={{ fontSize: 12 }} />
            {isZh ? '资料下载中心' : 'Download Center'}
          </div>
          <h1 className="text-[34px] lg:text-[52px] font-extrabold leading-[1.15] tracking-tight mb-5 max-w-[820px] mx-auto">
            {isZh ? '产品资料、技术文档与认证证书' : 'Product Catalogs, Technical Documents & Certifications'}
          </h1>
          <p className="text-[14.5px] lg:text-[16.5px] text-white/80 leading-[1.85] mb-8 max-w-[720px] mx-auto">
            {isZh
              ? '浏览并下载我们的产品手册、技术规格、认证证书与工程白皮书。如需特定资料或定制文档，请联系我们的团队。'
              : 'Browse and download our catalogs, technical specifications, certification documents and engineering whitepapers. For specific or tailored documents, please contact our team.'}
          </p>
        </div>
      </section>

      {/* 资料下载区 */}
      <section className="py-16 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <div key={ci} className="mb-12 lg:mb-16 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm border"
                    style={{ background: `${cat.color}10`, color: cat.color, borderColor: `${cat.color}20` }}>
                    <Icon style={{ fontSize: 20 }} />
                  </div>
                  <h2 className="text-[22px] lg:text-[26px] font-extrabold text-[#0F2340] tracking-tight">{cat.title}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item, ii) => (
                    <div key={ii} className="group bg-white rounded-xl p-5 lg:p-6 border border-gray-200/60 hover:border-transparent transition-all duration-300 hover:shadow-[0_18px_55px_rgba(15,35,64,0.15)] hover:-translate-y-0.5 cursor-pointer"
                      onClick={() => {
                        // 模拟下载提示：实际部署时替换为真实 PDF 路径
                        if (typeof window !== 'undefined') {
                          alert(isZh ? '此演示版不包含实际 PDF 文件。部署时请将 PDF 放入 /public/downloads/ 目录。' : 'Demo mode — no actual PDF. Place PDFs in /public/downloads/ when deploying.');
                        }
                      }}>
                      <div className="flex items-start gap-3 mb-3">
                        <FileTextOutlined style={{ fontSize: 22, color: cat.color }} />
                        <div className="flex-1">
                          <h3 className="text-[14px] lg:text-[15px] font-bold text-[#0F2340] leading-[1.55] mb-1">{item.name}</h3>
                          <div className="text-[11.5px] text-gray-500 font-medium">{item.size}</div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-3 mt-3 border-t border-gray-100">
                        <span className="text-[11.5px] text-gray-400 font-semibold uppercase tracking-wider">{isZh ? '免费下载' : 'Free Download'}</span>
                        <DownloadOutlined className="text-gray-400 group-hover:text-[#C8102E] group-hover:-translate-x-0.5 transition-all" style={{ fontSize: 15 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 找不到需要的资料？ */}
      <section className="relative overflow-hidden py-16 lg:py-20 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 50%, #1A365D 100%)' }}>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4A843] rounded-full opacity-[0.08] blur-[130px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-[#C8102E] rounded-full opacity-[0.08] blur-[130px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-[11.5px] font-bold text-[#D4A843] tracking-wider uppercase mb-4">
            <BulbFilled style={{ fontSize: 12 }} />
            {isZh ? '需要更多资料？' : 'Need More?'}
          </div>
          <h2 className="text-[26px] lg:text-[40px] font-extrabold leading-tight tracking-tight mb-5">
            {isZh ? '没有找到您需要的文档？' : `Can't Find What You're Looking For?`}
          </h2>
          <p className="text-[14px] lg:text-[16px] text-white/75 leading-[1.8] mb-8 max-w-[640px] mx-auto">
            {isZh
              ? '我们的工程团队可以为您定制各类技术文档、方案设计与图纸。留下您的需求，我们将在 24 小时内与您联系。'
              : 'Our engineering team can prepare tailored technical documents, designs and drawings. Share your requirements with us and we will respond within 24 hours.'}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2.5 w-full sm:w-auto justify-center px-8 py-4 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[15px] font-bold rounded-xl no-underline shadow-[0_12px_40px_rgba(200,16,46,0.4)] transition-all hover:translate-y-[-1px]">
              {isZh ? '联系我们获取定制资料' : 'Contact Us for Custom Documents'} <ArrowRightOutlined style={{ fontSize: 14 }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DownloadsPage;
