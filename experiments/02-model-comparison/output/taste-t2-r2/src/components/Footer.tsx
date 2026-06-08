const cols = [
  {
    title: "Product",
    links: ["Agent runtime", "Workflow library", "Connectors", "Security", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Documentation", "Changelog", "Status", "Engineering blog", "Open source"],
  },
  {
    title: "Company",
    links: ["About", "Customers", "Careers", "Press", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4 sm:gap-12">
          <div className="col-span-2 sm:col-span-1">
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md border border-emerald-glow/40 bg-ink-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow live-dot" />
              </span>
              <span className="text-[15px] font-medium tracking-tight">Aperture</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-zinc-500">
              Intelligence that runs itself. Built in Berlin and San Francisco.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {["github", "x", "linkedin"].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={s}
                  className="grid h-8 w-8 place-items-center rounded-full border border-white/[0.08] text-zinc-400 transition-colors hover:border-white/20 hover:text-white"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${s === "x" ? "x" : s}/ffffff`}
                    alt=""
                    className="h-3.5 w-3.5 opacity-80"
                    style={{ filter: "invert(1)" }}
                  />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-zinc-500">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-zinc-300 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <span>© 2026 Aperture Labs, Inc. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-zinc-300">Privacy</a>
            <a href="#" className="hover:text-zinc-300">Terms</a>
            <a href="#" className="hover:text-zinc-300">Security</a>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-glow live-dot" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
