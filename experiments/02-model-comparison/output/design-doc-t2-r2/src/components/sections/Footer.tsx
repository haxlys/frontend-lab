export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-neon-gradient">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
              >
                <path d="M4 18 12 4l8 14" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 14h8" strokeLinecap="round" />
              </svg>
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              NEXUS
            </span>
            <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-white/40">
              © 2026
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/55">
            <a className="hover:text-white" href="#docs">Docs</a>
            <a className="hover:text-white" href="#changelog">Changelog</a>
            <a className="hover:text-white" href="#status">Status</a>
            <a className="hover:text-white" href="#security">Security</a>
            <a className="hover:text-white" href="#privacy">Privacy</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-white/30">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping-slow rounded-full bg-neon-emerald/70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-neon-emerald" />
          </span>
          All systems operational
        </div>
      </div>
    </footer>
  );
}
