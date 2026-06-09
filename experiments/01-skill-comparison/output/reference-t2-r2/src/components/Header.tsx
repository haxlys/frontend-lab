export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(13,13,16,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6c5ce7] to-[#00cec9] flex items-center justify-center shadow-lg shadow-[rgba(108,92,231,0.3)]">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-[#f0f0f5] text-lg tracking-tight font-semibold">
            Synthi<span className="text-[#a29bfe]">.ai</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {["Explore", "Trending", "Create", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-[#9a9aae] hover:text-[#f0f0f5] text-sm font-medium transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#6c5ce7] after:transition-all after:duration-300 hover:after:w-full"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#f0f0f5] bg-[rgba(255,255,255,0.04)] hover:bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)] rounded-lg transition-colors duration-200">
            Sign In
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-[#6c5ce7] hover:bg-[#5a4bd1] rounded-lg transition-colors duration-200 shadow-lg shadow-[rgba(108,92,231,0.25)]">
            Start Creating
          </button>
        </div>
      </div>
    </header>
  );
}
