import { type FC } from "react";

export const TopBar: FC = () => (
  <header className="fixed top-0 right-0 left-[232px] h-[56px] bg-white border-b border-navy-200 flex items-center justify-between px-6 z-20">
    <div className="relative w-full max-w-md">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400"
        width="16"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <circle cx="9" cy="9" r="5" />
        <path d="M13 13l4 4" />
      </svg>
      <input
        type="text"
        placeholder="고객, 거래, 연락처 검색..."
        className="w-full pl-9 pr-4 py-2 bg-navy-50 border border-navy-200 rounded-md text-[13px] text-navy-700 placeholder:text-navy-400 focus:outline-none focus:ring-1.5 focus:ring-accent-500 focus:border-accent-500 transition-[border-color,box-shadow]"
      />
    </div>

    <div className="flex items-center gap-3">
      <button className="relative p-2 rounded-md text-navy-500 hover:bg-navy-50 transition-colors">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M16 7a5 5 0 0 0-10 0c0 5.5-2 7-2 7h14s-2-1.5-2-7z" />
          <path d="M11.73 16a1.5 1.5 0 0 1-2.46 0" />
        </svg>
        <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 ring-1 ring-white" />
      </button>

      <div className="flex items-center gap-2.5 pl-3 border-l border-navy-200">
        <div className="w-8 h-8 rounded-full bg-navy-700 flex items-center justify-center text-xs font-semibold text-white">
          KJ
        </div>
        <div className="hidden sm:block">
          <p className="text-[13px] font-medium text-navy-700 leading-tight">김지원</p>
          <p className="text-[11px] text-navy-400 leading-tight">admin@flowcrm.kr</p>
        </div>
      </div>
    </div>
  </header>
);
