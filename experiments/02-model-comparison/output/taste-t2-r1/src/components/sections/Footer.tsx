export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-6 px-5 py-10 text-[12.5px] text-ink-700 sm:flex-row sm:items-center sm:px-8">
        <div className="flex items-center gap-2">
          <span className="grid h-5 w-5 place-items-center">
            <span className="h-2.5 w-2.5 rounded-[3px] bg-gradient-to-br from-volt-400 to-glacier-400" />
          </span>
          <span className="text-ink-900">Synapse</span>
          <span className="text-ink-700">·</span>
          <span>Operating system for thinking machines</span>
        </div>
        <div className="flex items-center gap-5 font-mono">
          <a href="#privacy" className="transition-colors hover:text-ink-950">Privacy</a>
          <a href="#terms" className="transition-colors hover:text-ink-950">Terms</a>
          <a href="#status" className="transition-colors hover:text-ink-950">Status</a>
          <span className="text-ink-700">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
