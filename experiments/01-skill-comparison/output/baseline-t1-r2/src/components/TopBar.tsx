interface TopBarProps {
  onMenuToggle: () => void;
}

export default function TopBar({ onMenuToggle }: TopBarProps) {
  return (
    <header className="h-16 bg-white border-b border-navy-200 flex items-center justify-between px-4 lg:px-6 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-navy-100 transition-colors lg:hidden"
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5 text-navy-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
        <div className="hidden sm:flex items-center gap-2 bg-navy-50 border border-navy-200 rounded-md px-3 py-2 w-72 lg:w-80">
          <svg className="w-4 h-4 text-navy-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="고객명, 회사명으로 검색..."
            className="bg-transparent border-none outline-none text-sm text-navy-800 placeholder-navy-400 w-full"
          />
          <kbd className="hidden lg:inline-flex items-center gap-0.5 text-[10px] text-navy-400 bg-white border border-navy-200 rounded px-1.5 py-0.5 font-sans">
            <span>⌘</span>K
          </kbd>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative w-9 h-9 flex items-center justify-center rounded-md hover:bg-navy-100 transition-colors">
          <svg className="w-5 h-5 text-navy-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 01-3.46 0" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-white" />
        </button>

        <div className="h-6 w-px bg-navy-200 mx-1 hidden sm:block" />

        <div className="flex items-center gap-2.5 cursor-pointer hover:bg-navy-50 rounded-md px-2 py-1.5 transition-colors">
          <div className="w-7 h-7 rounded-full bg-accent-600 flex items-center justify-center text-[11px] font-semibold text-white flex-shrink-0">
            KS
          </div>
          <span className="text-sm font-medium text-navy-700 hidden sm:block">김수현</span>
          <svg className="w-4 h-4 text-navy-400 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </header>
  );
}
