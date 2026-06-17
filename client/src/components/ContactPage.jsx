import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  EnvironmentOutlined, PhoneOutlined, MailOutlined, MessageFilled,
  ClockCircleOutlined, SafetyOutlined, GlobalOutlined, TeamOutlined,
  SendOutlined, CheckCircleFilled
} from '@ant-design/icons';

const ContactPage = () => {
  const { t, i18n } = useTranslation();
  const isZh = i18n.language === 'zh';

  const [form, setForm] = useState({
    name: '', company: '', email: '', country: '', phone: '',
    category: isZh ? '产品报价 / Product Quotation' : 'Product Quotation',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 演示环境：此处仅本地显示提交成功。实际部署时应对接后端 API 或邮件服务。
    setSubmitted(true);
  };

  const infoCards = [
    {
      icon: PhoneOutlined, title: isZh ? '电话' : 'Phone',
      content: '+86 15751736649', sub: isZh ? '工作日 8:30 - 18:00 (北京时间)' : 'Weekdays 8:30am - 6:00pm (GMT+8)',
      color: '#0F2340'
    },
    {
      icon: MailOutlined, title: isZh ? '邮箱' : 'Email',
      content: 'jyun20974@gmail.com', sub: isZh ? '24 小时内回复' : 'Response within 24 hours',
      color: '#C8102E'
    },
    {
      icon: MessageFilled, title: 'WhatsApp',
      content: '+86 15751736649', sub: isZh ? '实时沟通，快速响应' : 'Real-time chat, quick response',
      color: '#25D366'
    },
    {
      icon: EnvironmentOutlined, title: isZh ? '总部地址' : 'Headquarters',
      content: isZh ? '中国江苏省徐州市贾汪区超越大道' : 'Chaoyue Avenue, Jiawang District, Xuzhou, Jiangsu, China',
      sub: isZh ? '欢迎预约参观工厂' : 'Factory visits by appointment',
      color: '#1A365D'
    },
  ];

  const categories = isZh
    ? ['产品报价 / Product Quotation', '技术咨询 / Technical Consultation', '项目合作 / Project Cooperation', '资料索取 / Document Request', '海外代理 / Overseas Partnership', '其他 / Other']
    : ['Product Quotation', 'Technical Consultation', 'Project Cooperation', 'Document Request', 'Overseas Partnership', 'Other'];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-14 lg:pt-40 lg:pb-20 text-white"
        style={{ background: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 50%, #1A365D 100%)' }}>
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#D4A843] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-[#C8102E] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"></div>

        <div className="relative z-10 max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 border border-white/15 rounded-full text-[11.5px] font-bold text-[#D4A843] tracking-wider uppercase mb-5">
            <SafetyOutlined style={{ fontSize: 12 }} />
            {isZh ? '联系我们' : 'Contact Us'}
          </div>
          <h1 className="text-[34px] lg:text-[52px] font-extrabold leading-[1.15] tracking-tight mb-5 max-w-[820px] mx-auto">
            {isZh ? '联系我们 · 开启专业合作' : 'Get in Touch · Start a Professional Collaboration'}
          </h1>
          <p className="text-[14.5px] lg:text-[16.5px] text-white/80 leading-[1.85] mb-8 max-w-[720px] mx-auto">
            {isZh
              ? '无论您身在哪个国家，我们的销售与工程团队都将在 24 小时内用您的母语为您提供专业回应。'
              : 'Wherever you are in the world, our sales and engineering team will respond professionally in your language within 24 hours.'}
          </p>
        </div>
      </section>

      {/* 联系方式卡片 */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {infoCards.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={i} className="group bg-[#F8F9FA] hover:bg-white rounded-2xl p-6 lg:p-7 border border-gray-200/60 hover:border-transparent transition-all duration-400 hover:shadow-[0_25px_70px_rgba(15,35,64,0.15)] hover:-translate-y-1">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-4 border"
                    style={{ background: `${c.color}10`, color: c.color, borderColor: `${c.color}20` }}>
                    <Icon style={{ fontSize: 20 }} />
                  </div>
                  <div className="text-[12px] font-bold tracking-wider text-gray-500 uppercase mb-2">{c.title}</div>
                  <div className="text-[15px] lg:text-[16px] font-bold text-[#0F2340] mb-2 leading-snug break-words">{c.content}</div>
                  <div className="text-[12.5px] text-gray-500 leading-[1.6]">{c.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 询价表单 + 地图 */}
      <section className="pb-16 lg:pb-24 bg-[#F8F9FA]">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* 表单 */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-7 lg:p-10 border border-gray-200/60 shadow-sm">
                {!submitted ? (
                  <>
                    <div className="mb-8">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F8F9FA] border border-gray-200 rounded-full text-[11.5px] font-bold text-[#C8102E] tracking-wider uppercase mb-4">
                        <SendOutlined style={{ fontSize: 12 }} />
                        {isZh ? '快速询价' : 'Quick Inquiry'}
                      </div>
                      <h2 className="text-[24px] lg:text-[30px] font-extrabold text-[#0F2340] leading-tight tracking-tight mb-3">
                        {isZh ? '发送您的项目需求' : 'Send Us Your Project Requirements'}
                      </h2>
                      <p className="text-[13.5px] lg:text-[14.5px] text-gray-500 leading-[1.75] max-w-[560px]">
                        {isZh
                          ? '请填写以下表单，我们的工程团队将在 24 小时内用您的语言与您联系，提供专业报价与技术方案。'
                          : 'Fill in the form below and our engineering team will respond in your language within 24 hours with a professional quotation and technical proposal.'}
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[12.5px] font-bold text-[#0F2340] mb-2 tracking-wide uppercase">{isZh ? '姓名 *' : 'Full Name *'}</label>
                          <input
                            type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3.5 bg-[#F8F9FA] hover:bg-white border border-gray-200 focus:border-[#0F2340] focus:ring-2 focus:ring-[#0F2340]/15 rounded-xl text-[14px] text-gray-800 font-medium outline-none transition-all placeholder-gray-400"
                            placeholder={isZh ? '您的姓名' : 'Your name'}
                          />
                        </div>
                        <div>
                          <label className="block text-[12.5px] font-bold text-[#0F2340] mb-2 tracking-wide uppercase">{isZh ? '公司/机构 *' : 'Company *'}</label>
                          <input
                            type="text" required value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })}
                            className="w-full px-4 py-3.5 bg-[#F8F9FA] hover:bg-white border border-gray-200 focus:border-[#0F2340] focus:ring-2 focus:ring-[#0F2340]/15 rounded-xl text-[14px] text-gray-800 font-medium outline-none transition-all placeholder-gray-400"
                            placeholder={isZh ? '您的公司名称' : 'Your company name'}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[12.5px] font-bold text-[#0F2340] mb-2 tracking-wide uppercase">{isZh ? '邮箱 *' : 'Email *'}</label>
                          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3.5 bg-[#F8F9FA] hover:bg-white border border-gray-200 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/15 rounded-xl text-[14px] text-gray-800 font-medium outline-none transition-all placeholder-gray-400"
                            placeholder={isZh ? 'your@email.com' : 'your@email.com'}
                          />
                        </div>
                        <div>
                          <label className="block text-[12.5px] font-bold text-[#0F2340] mb-2 tracking-wide uppercase">{isZh ? '电话' : 'Phone'}</label>
                          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-3.5 bg-[#F8F9FA] hover:bg-white border border-gray-200 focus:border-[#0F2340] focus:ring-2 focus:ring-[#0F2340]/15 rounded-xl text-[14px] text-gray-800 font-medium outline-none transition-all placeholder-gray-400"
                            placeholder={isZh ? '如 +86 138-xxxx-xxxx' : 'e.g. +86 138-xxxx-xxxx'}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-[12.5px] font-bold text-[#0F2340] mb-2 tracking-wide uppercase">{isZh ? '国家/地区 *' : 'Country / Region *'}</label>
                          <input type="text" required value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })}
                            className="w-full px-4 py-3.5 bg-[#F8F9FA] hover:bg-white border border-gray-200 focus:border-[#0F2340] focus:ring-2 focus:ring-[#0F2340]/15 rounded-xl text-[14px] text-gray-800 font-medium outline-none transition-all placeholder-gray-400"
                            placeholder={isZh ? '如：俄罗斯、印尼、阿联酋…' : 'e.g. Russia, Indonesia, UAE...'}
                          />
                        </div>
                        <div>
                          <label className="block text-[12.5px] font-bold text-[#0F2340] mb-2 tracking-wide uppercase">{isZh ? '需求类别 *' : 'Category *'}</label>
                          <select required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
                            className="w-full px-4 py-3.5 bg-[#F8F9FA] hover:bg-white border border-gray-200 focus:border-[#0F2340] focus:ring-2 focus:ring-[#0F2340]/15 rounded-xl text-[14px] text-gray-800 font-medium outline-none transition-all">
                            {categories.map((c, i) => <option key={i} value={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[12.5px] font-bold text-[#0F2340] mb-2 tracking-wide uppercase">{isZh ? '项目说明 *' : 'Your Message *'}</label>
                        <textarea required rows={6} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full px-4 py-3.5 bg-[#F8F9FA] hover:bg-white border border-gray-200 focus:border-[#C8102E] focus:ring-2 focus:ring-[#C8102E]/15 rounded-xl text-[14px] text-gray-800 font-medium outline-none transition-all placeholder-gray-400 resize-y"
                          placeholder={isZh
                            ? '请简要说明您的项目：电压等级、设备类型、数量、交付时间等……'
                            : 'Briefly describe your project: voltage level, equipment type, quantity, delivery timeline...'}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3">
                        <div className="text-[12.5px] text-gray-500 flex items-start gap-2 max-w-md">
                          <CheckCircleFilled style={{ color: '#0F2340', fontSize: 14, marginTop: 2, flexShrink: 0 }} />
                          <span className="leading-[1.55]">{isZh
                            ? '我们承诺在 24 小时内回复您的询价。所有信息仅用于项目沟通，我们严格保护客户隐私。'
                            : 'We promise to respond within 24 hours. All information is used only for project communication and kept strictly confidential.'}
                          </span>
                        </div>
                        <button type="submit"
                          className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[14.5px] font-bold rounded-xl shadow-[0_10px_35px_rgba(200,16,46,0.35)] hover:shadow-[0_14px_45px_rgba(200,16,46,0.5)] transition-all hover:translate-y-[-1px] whitespace-nowrap">
                          {isZh ? '发送询价' : 'Send Inquiry'} <SendOutlined style={{ fontSize: 14 }} />
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center shadow-sm">
                      <CheckCircleFilled style={{ fontSize: 34 }} />
                    </div>
                    <h2 className="text-[24px] lg:text-[30px] font-extrabold text-[#0F2340] leading-tight tracking-tight mb-3">
                      {isZh ? '询价已发送！' : 'Inquiry Sent!'}
                    </h2>
                    <p className="text-[14px] lg:text-[15px] text-gray-500 leading-[1.75] mb-8 max-w-[520px] mx-auto">
                      {isZh
                        ? '感谢您的信任！我们已收到您的询价。销售与工程团队将在 24 小时内用您的语言回复您的邮箱（请检查垃圾邮件文件夹）。'
                        : 'Thank you for your interest! We have received your inquiry. Our sales and engineering team will reply to your email in your language within 24 hours (please check spam folder).'}
                    </p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', country: '', phone: '', category: isZh ? '产品报价 / Product Quotation' : 'Product Quotation', message: '' }); }}
                      className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#0F2340] hover:bg-[#1A365D] text-white text-[14px] font-bold rounded-xl shadow-[0_10px_35px_rgba(15,35,64,0.3)] transition-all hover:translate-y-[-1px]">
                      {isZh ? '← 发送新的询价' : '← Send Another Inquiry'}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* 右侧信息 */}
            <div className="lg:col-span-2 space-y-5">
              {/* 全球服务 */}
              <div className="bg-white rounded-2xl p-7 lg:p-8 border border-gray-200/60 shadow-sm">
                <div className="flex items-center gap-2 text-[11.5px] font-bold text-[#C8102E] tracking-wider uppercase mb-4">
                  <GlobalOutlined style={{ fontSize: 13 }} /> {isZh ? '全球服务支持' : 'Global Support'}
                </div>
                <h3 className="text-[20px] lg:text-[22px] font-extrabold text-[#0F2340] leading-tight tracking-tight mb-5">
                  {isZh ? '30+ 国家 · 5 大区域服务中心' : '30+ Countries · 5 Regional Service Centers'}
                </h3>
                <div className="space-y-3.5 text-[13.5px] text-gray-600 leading-[1.7]">
                  <div className="flex items-start gap-2.5">
                    <ClockCircleOutlined style={{ fontSize: 14, color: '#D4A843', marginTop: 3, flexShrink: 0 }} />
                    <span>{isZh ? '24/7 技术支持热线' : '24/7 Technical Support Hotline'}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <TeamOutlined style={{ fontSize: 14, color: '#D4A843', marginTop: 3, flexShrink: 0 }} />
                    <span>{isZh ? '多语言工程团队 (中 / 英 / 俄 / 阿 / 西)' : 'Multi-language engineering team (CN/EN/RU/AR/ES)'}</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <SafetyOutlined style={{ fontSize: 14, color: '#D4A843', marginTop: 3, flexShrink: 0 }} />
                    <span>{isZh ? '技术支持、设计指导、现场服务、调试培训' : 'Technical support, design guidance, on-site service, commissioning & training'}</span>
                  </div>
                </div>
              </div>

              {/* 快速联系 */}
              <div className="rounded-2xl p-7 lg:p-8 text-white shadow-[0_20px_60px_rgba(15,35,64,0.2)]"
                style={{ background: 'linear-gradient(135deg, #0F2340 0%, #1A365D 70%, #2A4A73 100%)' }}>
                <div className="flex items-center gap-2 text-[11.5px] font-bold text-[#D4A843] tracking-wider uppercase mb-3">
                  <MessageFilled style={{ fontSize: 13 }} /> {isZh ? '即时联系' : 'Reach Us Instantly'}
                </div>
                <h3 className="text-[22px] lg:text-[24px] font-extrabold leading-tight tracking-tight mb-6">
                  {isZh ? '希望立即沟通？' : 'Prefer to Chat Now?'}
                </h3>

                <div className="space-y-3">
                  <a href="https://wa.me/8618352225109" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[#25D366] hover:bg-[#20BA5A] rounded-xl text-white font-bold transition-all hover:translate-y-[-1px] shadow-sm">
                    <MessageFilled style={{ fontSize: 22 }} />
                    <div>
                      <div className="text-[13.5px]">{isZh ? 'WhatsApp 即时沟通' : 'WhatsApp Live Chat'}</div>
                      <div className="text-[11.5px] font-medium opacity-85">+86 18352225109</div>
                    </div>
                  </a>
                  <a href="mailto:jyun20974@gmail.com"
                    className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl text-white font-bold transition-all hover:translate-y-[-1px]">
                    <MailOutlined style={{ fontSize: 22 }} />
                    <div>
                      <div className="text-[13.5px]">{isZh ? '发送邮件' : 'Email Us'}</div>
                      <div className="text-[11.5px] font-medium opacity-80">jyun20974@gmail.com</div>
                    </div>
                  </a>
                  <a href="tel:+8618352225109"
                    className="flex items-center gap-3 p-4 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl text-white font-bold transition-all hover:translate-y-[-1px]">
                    <PhoneOutlined style={{ fontSize: 22 }} />
                    <div>
                      <div className="text-[13.5px]">{isZh ? '致电我们' : 'Call Us'}</div>
                      <div className="text-[11.5px] font-medium opacity-80">+86 18352225109</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
