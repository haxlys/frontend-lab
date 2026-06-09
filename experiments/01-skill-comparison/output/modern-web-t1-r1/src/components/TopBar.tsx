export default function TopBar() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b border-slate-200 bg-white px-6">
      <div className="relative flex-1 max-w-md">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" fill="none" viewBox="0 0 18 18" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-4.24-4.24a5.25 5.25 0 10-1.06 1.06l4.24 4.24z"/>
        </svg>
        <input
          type="text"
          placeholder="검색..."
          className="w-full rounded-md border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm text-slate-700 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors"
        />
      </div>

      <div className="ml-auto flex items-center gap-1">
        <button className="relative flex size-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 transition-colors">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5a5.25 5.25 0 015.25 5.25c0 3.5-2.5 6.5-5.25 9.75-2.75-3.25-5.25-6.25-5.25-9.75A5.25 5.25 0 019 1.5z" stroke="currentColor" strokeWidth="1.5"/>
            <circle cx="9" cy="6.75" r="1.75" stroke="currentColor" strokeWidth="1.5"/>
          </svg>
          <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-semibold text-white">3</span>
        </button>

        <button className="relative flex size-9 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100 transition-colors">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.5 13.5h11M3.5 9h11M3.5 4.5h11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="13" cy="4.5" r="1.75" fill="#2563EB" stroke="#fff" strokeWidth="1"/>
          </svg>
        </button>

        <button className="flex size-9 items-center justify-center rounded-full bg-slate-200 text-xs font-semibold text-slate-600 ml-1">
          AD
        </button>
      </div>
    </header>
  )
}
