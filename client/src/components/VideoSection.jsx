import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CheckCircleOutlined, PlayCircleOutlined, CloseOutlined, EnvironmentOutlined } from '@ant-design/icons';

const VideoSection = () => {
  const { t, i18n } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const isZh = i18n.language === 'zh';

  const highlights = [
    { icon: EnvironmentOutlined, text: t('home.highlight1'), color: '#0F2340' },
    { icon: EnvironmentOutlined, text: t('home.highlight2'), color: '#C8102E' },
    { icon: CheckCircleOutlined, text: t('home.highlight3'), color: '#1A365D' },
    { icon: EnvironmentOutlined, text: t('home.highlight4'), color: '#D4A843' },
  ];

  return (
    <>
      <section className="bg-[#F8F9FA] py-12 lg:py-20">
        <div className="max-w-[1440px] xl:max-w-[1600px] mx-auto px-5 lg:px-10 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 xl:gap-20 items-center">
            {/* LEFT - 文案区 */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white rounded-full border border-gray-200 text-[11px] xl:text-[12px] font-semibold text-[#C8102E] tracking-wider uppercase mb-5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E]"></span>
                {isZh ? '关于企业' : 'About China Xuzhou Zhongtie Power Group'}
              </div>

              <h2 className="text-[28px] lg:text-[36px] xl:text-[44px] font-bold text-[#0F2340] leading-[1.2] tracking-tight mb-5">
                {t('home.companyOverviewTitle')}
              </h2>

              <p className="text-[15px] lg:text-[16px] xl:text-[18px] text-gray-600 leading-[1.7] mb-8 xl:mb-10 max-w-[540px] xl:max-w-[620px]">
                {t('home.companyOverviewSubtitle')}
              </p>

              <div className="flex flex-col gap-4 xl:gap-5 mb-8 xl:mb-10">
                {highlights.map((h, idx) => {
                  const Icon = h.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3.5 xl:gap-4">
                      <div
                        className="flex-shrink-0 w-9 h-9 xl:w-10 xl:h-10 rounded-xl flex items-center justify-center shadow-sm transition-transform hover:scale-110"
                        style={{ background: h.color + '12', color: h.color }}
                      >
                        <CheckCircleOutlined style={{ fontSize: 18 }} />
                      </div>
                      <div className="text-[14.5px] lg:text-[15px] xl:text-[16px] font-medium text-gray-800 leading-[1.55] pt-1.5">
                        {h.text}
                      </div>
                    </div>
                  );
                })}
              </div>

              <Link to="/about" className="inline-flex items-center gap-2.5 px-7 py-3.5 xl:px-8 xl:py-4 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[14px] xl:text-[15px] font-semibold rounded-xl no-underline shadow-[0_6px_20px_rgba(200,16,46,0.28)] transition-all hover:translate-y-[-1px] hover:shadow-[0_10px_30px_rgba(200,16,46,0.4)]">
                {t('home.learnMoreAboutUs')}
                <PlayCircleOutlined style={{ fontSize: 16 }} />
              </Link>
            </div>

            {/* RIGHT - 视频区 */}
            <div className="order-1 lg:order-2">
              <div
                className="relative rounded-[18px] overflow-hidden shadow-[0_20px_60px_rgba(15,35,64,0.25)] border border-white/40 cursor-pointer group bg-[#0F2340]"
                onClick={() => setShowModal(true)}
                style={{ aspectRatio: '16 / 10' }}
              >
                {/* 封面图占位：使用渐变 + SVG 工厂剪影 */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, #0F2340 0%, #1A365D 50%, #2A4A73 100%)',
                  }}
                >
                  {/* 发光点效果 */}
                  <div className="absolute top-8 right-10 w-20 h-20 bg-[#D4A843] rounded-full opacity-15 blur-2xl"></div>
                  <div className="absolute bottom-12 left-16 w-24 h-24 bg-[#C8102E] rounded-full opacity-15 blur-2xl"></div>

                  {/* 简化工厂 SVG 剪影 */}
                  <svg
                    className="absolute bottom-0 left-0 w-full"
                    viewBox="0 0 600 240"
                    preserveAspectRatio="xMidYMax meet"
                    fill="none"
                    style={{ opacity: 0.45 }}
                  >
                    <path
                      d="M0 240 L0 180 L40 180 L40 140 L80 140 L80 100 L120 100 L120 140 L180 140 L180 80 L240 80 L240 120 L280 120 L280 60 L320 60 L320 100 L380 100 L380 140 L420 140 L420 90 L460 90 L460 130 L520 130 L520 170 L600 170 L600 240 Z"
                      fill="#0A1A33"
                    />
                    {/* 窗户发光 */}
                    <rect x="55" y="155" width="8" height="8" fill="#D4A843" opacity="0.8" />
                    <rect x="75" y="155" width="8" height="8" fill="#D4A843" opacity="0.8" />
                    <rect x="95" y="115" width="8" height="8" fill="#D4A843" opacity="0.6" />
                    <rect x="115" y="115" width="8" height="8" fill="#D4A843" opacity="0.6" />
                    <rect x="195" y="95" width="8" height="8" fill="#D4A843" opacity="0.8" />
                    <rect x="215" y="95" width="8" height="8" fill="#D4A843" opacity="0.7" />
                    <rect x="235" y="95" width="8" height="8" fill="#D4A843" opacity="0.6" />
                    <rect x="295" y="75" width="8" height="8" fill="#D4A843" opacity="0.8" />
                    <rect x="315" y="75" width="8" height="8" fill="#D4A843" opacity="0.7" />
                    <rect x="390" y="115" width="8" height="8" fill="#D4A843" opacity="0.5" />
                    <rect x="435" y="105" width="8" height="8" fill="#D4A843" opacity="0.7" />
                    <rect x="455" y="105" width="8" height="8" fill="#D4A843" opacity="0.6" />
                    {/* 输电塔 */}
                    <path d="M255 80 L260 50 L262 80 M250 65 L270 65 M248 55 L272 55" stroke="#D4A843" strokeWidth="1.2" opacity="0.5" />
                    <path d="M440 75 L445 45 L447 75 M435 60 L455 60" stroke="#D4A843" strokeWidth="1.2" opacity="0.4" />
                  </svg>
                </div>

                {/* 悬停渐变遮罩 */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2340]/75 via-transparent to-[#0F2340]/25 transition-opacity duration-500"></div>

                {/* 时长标签 */}
                <div className="absolute top-5 right-5 px-3 py-1.5 bg-white/15 backdrop-blur-md text-white text-[11.5px] font-semibold rounded-full border border-white/25">
                  {t('home.videoDuration')}
                </div>

                {/* 品牌标签 */}
                <div className="absolute top-5 left-5 px-3 py-1.5 bg-white/95 text-[#0F2340] text-[11.5px] font-bold rounded-full shadow-sm tracking-wider">
                  {isZh ? '企业宣传片' : 'COMPANY PROFILE'}
                </div>

                {/* 播放按钮 */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#C8102E] rounded-full opacity-30 blur-xl scale-150"></div>
                      <button
                        className="relative w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white flex items-center justify-center shadow-[0_15px_50px_rgba(15,35,64,0.45)] transition-all duration-300 hover:scale-110 group-hover:shadow-[0_20px_70px_rgba(200,16,46,0.5)]"
                        style={{ marginLeft: '8px' }}
                      >
                        <PlayCircleOutlined style={{ fontSize: 52, color: '#C8102E' }} />
                      </button>
                    </div>
                    <div className="text-white text-sm lg:text-base font-medium bg-black/25 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/20 transition-all group-hover:bg-white/95 group-hover:text-[#0F2340]">
                      {isZh ? '▶ 点击观看视频' : '▶ Click to Play'}
                    </div>
                  </div>
                </div>

                {/* 底部文字 */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="text-white">
                    <div className="text-[13px] font-medium text-white/80 mb-1">{isZh ? '中国制造 · 全球服务' : 'Made in China · Global Service'}</div>
                    <div className="text-[20px] lg:text-[22px] font-bold tracking-tight">{isZh ? '30 年品质传承' : '30 Years of Excellence'}</div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setShowModal(true); }}
                    className="hidden lg:inline-flex items-center gap-2 px-4 py-2.5 bg-[#C8102E] hover:bg-[#A00D25] text-white text-[12.5px] font-semibold rounded-lg transition-all shadow-lg border border-white/20"
                  >
                    {t('home.watchFullVersion')}
                    <PlayCircleOutlined style={{ fontSize: 14 }} />
                  </button>
                </div>
              </div>

              {/* 视频下方数据 */}
              <div className="grid grid-cols-3 gap-3 mt-5">
                <div className="bg-white rounded-xl p-3.5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="text-[22px] lg:text-[26px] font-bold text-[#0F2340] leading-tight">30<span className="text-[#C8102E]">+</span></div>
                  <div className="text-[11.5px] lg:text-[12px] text-gray-500 font-medium mt-1">{isZh ? '年制造经验' : 'Years Mfg.'}</div>
                </div>
                <div className="bg-white rounded-xl p-3.5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="text-[22px] lg:text-[26px] font-bold text-[#0F2340] leading-tight">30<span className="text-[#C8102E]">+</span></div>
                  <div className="text-[11.5px] lg:text-[12px] text-gray-500 font-medium mt-1">{isZh ? '服务国家' : 'Countries'}</div>
                </div>
                <div className="bg-white rounded-xl p-3.5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all">
                  <div className="text-[22px] lg:text-[26px] font-bold text-[#0F2340] leading-tight">8<span className="text-[#C8102E]">万㎡</span></div>
                  <div className="text-[11.5px] lg:text-[12px] text-gray-500 font-medium mt-1">{isZh ? '生产基地' : 'Mfg. Base'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 全屏弹窗 - 完整版视频 */}
      {showModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-[1000px] bg-[#0F2340] rounded-[20px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white text-lg transition-all"
                aria-label="Close"
              >
                <CloseOutlined style={{ fontSize: 16 }} />
              </button>
            </div>

            <div className="aspect-video bg-black flex items-center justify-center relative">
              {/* 视频占位图（更深色） */}
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, #0A1A33 0%, #0F2340 50%, #1A365D 100%)',
                }}
              >
                <div className="absolute top-12 right-16 w-32 h-32 bg-[#D4A843] rounded-full opacity-15 blur-3xl"></div>
                <div className="absolute bottom-16 left-20 w-40 h-40 bg-[#C8102E] rounded-full opacity-15 blur-3xl"></div>
              </div>

              <div className="relative z-10 flex flex-col items-center gap-6 text-center px-6">
                <button className="relative">
                  <div className="absolute inset-0 bg-[#C8102E] rounded-full opacity-40 blur-2xl scale-150"></div>
                  <div className="relative w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-2xl">
                    <PlayCircleOutlined style={{ fontSize: 64, color: '#C8102E' }} />
                  </div>
                </button>
                <div>
                  <div className="text-white text-[22px] lg:text-[28px] font-bold mb-2">{isZh ? '企业宣传片 · 完整版' : 'Company Profile · Full Version'}</div>
                  <div className="text-white/70 text-[13px] lg:text-[14px]">{isZh ? '约 3 分钟 · 了解中铁电气的全球实力' : 'About 3 minutes · Discover the global capabilities of China Xuzhou Zhongtie Power Group'}</div>
                </div>
                <div className="text-[13px] text-white/50 pt-3 border-t border-white/15">
                  {isZh ? '（此处将嵌入实际视频文件 / 您的宣传视频 URL）' : '(Your promotional video file will play here)'}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;
