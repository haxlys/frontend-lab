export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-3 flex-1 max-w-md">
        <div className="relative w-full">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <circle cx="7" cy="7" r="4.5" />
            <path d="M10.5 10.5L14 14" />
          </svg>
          <input
            type="text"
            placeholder="Search customers, deals..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-slate-50 border border-slate-200 rounded-btn text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div className="hidden lg:block text-xs text-slate-400 font-medium ml-4">
        Updated Jun 09, 2026
      </div>

      <div className="flex items-center gap-2 ml-auto">
        <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-btn transition-colors">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 2v2M9 14v2M2 9h2M14 9h2M4.5 4.5l1.5 1.5M12 12l1.5 1.5M4.5 13.5l1.5-1.5M12 6l1.5-1.5" />
            <circle cx="9" cy="9" r="0.5" fill="currentColor" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full" />
        </button>

        <button className="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-btn transition-colors">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 1.5A6.5 6.5 0 0 1 9 14.5M9 1.5A6.5 6.5 0 0 0 9 14.5M1.5 9A6.5 6.5 0 0 1 14.5 9M1.5 9A6.5 6.5 0 0 0 14.5 9M7 15.5h4" />
            <path d="M7 15l1 1.5L9 15" />
          </svg>
          <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
        </button>

        <div className="ml-2 w-8 h-8 rounded-full bg-navy-800 flex items-center justify-center text-xs font-semibold text-white">
          JD
        </div>
      </div>
    </header>
  )
}
