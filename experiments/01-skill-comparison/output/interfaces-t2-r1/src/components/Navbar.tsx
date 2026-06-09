export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon-purple to-neon-blue">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-text-primary">
            Neural
          </span>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {['Product', 'Features', 'Pricing', 'Docs'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-text-primary"
            >
              {item}
              <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-gradient-to-r from-neon-purple to-neon-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden rounded-lg border border-white/10 px-4 py-2 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-white/20 hover:text-text-primary sm:block">
            Sign in
          </button>
          <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_24px_rgba(139,92,246,0.4)]">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
