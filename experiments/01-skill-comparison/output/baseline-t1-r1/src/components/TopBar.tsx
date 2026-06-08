interface TopBarProps {
  sidebarCollapsed: boolean;
}

export function TopBar({ sidebarCollapsed }: TopBarProps) {
  const sidebarWidth = sidebarCollapsed ? "68px" : "240px";

  return (
    <header
      className="fixed top-0 right-0 h-16 bg-white border-b border-slate-200 z-30 flex items-center justify-between px-6"
      style={{
        left: sidebarWidth,
        transition: "left 200ms",
      }}
    >
      <div className="relative w-full max-w-[420px]">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search contacts, deals, tasks..."
          className="w-full h-9 pl-9 pr-3 text-sm bg-slate-50 border border-slate-200
                     rounded-default placeholder-slate-400 text-navy-900
                     focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent
                     transition-all duration-150"
        />
        <kbd className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:inline-flex
                        items-center gap-0.5 text-[10px] font-medium text-slate-400
                        bg-white border border-slate-200 rounded px-1.5 py-0.5">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative w-9 h-9 flex items-center justify-center rounded-default
                           text-slate-400 hover:text-navy-700 hover:bg-slate-100
                           transition-colors duration-150">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute top-2 right-2 w-2 h-2 bg-danger rounded-full border-2 border-white" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-accent-subtle text-accent font-semibold text-sm flex items-center justify-center">
            JD
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-navy-900 leading-none">Jane Doe</p>
            <p className="text-xs text-slate-400 mt-0.5">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
