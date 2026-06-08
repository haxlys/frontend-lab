export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-12 text-sm text-white/40">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 sm:flex-row sm:px-8">
        <div className="flex items-center gap-2">
          <span className="grid h-6 w-6 place-items-center rounded-md bg-gradient-to-br from-neon-violet to-neon-blue">
            <svg viewBox="0 0 24 24" className="h-3 w-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 19V5l8 8V5" />
              <circle cx="17" cy="17" r="2.5" fill="currentColor" />
            </svg>
          </span>
          <span className="font-display text-white">Aurora</span>
          <span>· © {new Date().getFullYear()}</span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a href="#privacy" className="hover:text-white">Privacy</a>
          <a href="#terms" className="hover:text-white">Terms</a>
          <a href="#security" className="hover:text-white">Security</a>
          <a href="#status" className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-glow" />
            All systems normal
          </a>
        </div>
      </div>
    </footer>
  );
}
