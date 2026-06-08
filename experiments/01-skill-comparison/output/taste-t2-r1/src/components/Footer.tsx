export default function Footer() {
  return (
    <footer className="border-t border-white/[0.04] px-6 py-12">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent text-zinc-950 font-bold text-xs font-mono">
            AD
          </span>
          <span className="text-sm font-semibold text-zinc-100">ADE</span>
        </div>

        <p className="text-xs text-zinc-600">
          Agent Development Editor. Built for developers who ship.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Docs
          </a>
          <a
            href="#"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Status
          </a>
        </div>
      </div>
    </footer>
  );
}
