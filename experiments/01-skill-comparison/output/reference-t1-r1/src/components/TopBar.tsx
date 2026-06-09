export default function TopBar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-[#e2e8f0] bg-white px-4 sm:px-6">
      <div className="relative w-full max-w-md">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8]"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          type="text"
          placeholder="Search customers, deals..."
          className="w-full rounded-md border border-[#e2e8f0] bg-[#f8fafc] py-2 pl-10 pr-4 text-sm text-[#0f172a] placeholder:text-[#94a3b8] outline-none transition-colors focus:border-[#2563eb] focus:bg-white focus:ring-1 focus:ring-[#2563eb]"
        />
      </div>

      <div className="flex items-center gap-1 sm:gap-3">
        <button className="relative rounded-md p-2 text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#334155]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
          <span className="absolute right-1.5 top-1.5 flex h-2 w-2 items-center justify-center rounded-full bg-[#ef4444] ring-2 ring-white" />
        </button>

        <button className="rounded-md p-2 text-[#64748b] transition-colors hover:bg-[#f1f5f9] hover:text-[#334155]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
          </svg>
        </button>

        <div className="flex items-center gap-2.5 pl-2 sm:pl-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563eb] text-xs font-semibold text-white">
            JD
          </div>
          <span className="hidden text-sm font-medium text-[#0f172a] sm:inline">Jane Doe</span>
        </div>
      </div>
    </header>
  );
}
