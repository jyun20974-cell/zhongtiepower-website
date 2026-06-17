import React from 'react';
import { MessageFilled, PhoneOutlined } from '@ant-design/icons';

const FloatingActions = () => {
  return (
    <div className="fixed right-5 bottom-5 lg:right-7 lg:bottom-7 z-[90] flex flex-col gap-3">
      {/* WhatsApp 按钮 — 绿色 */}
      <a
        href="https://wa.me/8618352225109"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(37,211,102,0.4)] transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(37,211,102,0.5)] border border-white/20"
        aria-label="WhatsApp"
      >
        <MessageFilled style={{ fontSize: 22 }} />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0F2340] text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          WhatsApp Live
        </span>
      </a>

      {/* 询价按钮 — 红色 */}
      <a
        href="/contact"
        className="group relative w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#C8102E] hover:bg-[#A00D25] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(200,16,46,0.4)] transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(200,16,46,0.55)] border border-white/20"
        aria-label="Request Quote"
      >
        <MessageFilled style={{ fontSize: 20 }} />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0F2340] text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Request a Quote
        </span>
      </a>

      {/* 电话按钮 — 深色 */}
      <a
        href="tel:+8618352225109"
        className="group relative w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-[#0F2340] hover:bg-[#1A365D] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(15,35,64,0.35)] transition-all hover:translate-y-[-2px] hover:shadow-[0_10px_30px_rgba(15,35,64,0.5)] border border-white/20"
        aria-label="Call Us"
      >
        <PhoneOutlined style={{ fontSize: 20 }} />
        <span className="absolute right-full mr-3 px-3 py-1.5 bg-[#0F2340] text-white text-xs font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call +86 18352225109
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
