const cols: Array<{ title: string; items: { label: string; href: string }[] }> = [
  {
    title: "Product",
    items: [
      { label: "Platform", href: "#platform" },
      { label: "Benchmarks", href: "#proof" },
      { label: "Pricing", href: "#cta" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    title: "Developers",
    items: [
      { label: "Documentation", href: "#" },
      { label: "API reference", href: "#" },
      { label: "SDKs", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Security", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] pb-10 pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2">
              <span className="font-display text-lg font-semibold tracking-tight text-ink-0">
                AXIOM
              </span>
              <span className="font-mono text-[10px] tracking-widest text-ink-400">
                /v3.2
              </span>
            </div>
            <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-ink-300">
              An autonomous reasoning engine for teams who ship. Built in
              Singapore, Berlin, and Brooklyn.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-300">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-400" />
              All systems normal
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-400">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.items.map((i) => (
                  <li key={i.label}>
                    <a
                      href={i.href}
                      className="text-[14px] text-ink-200 transition-colors hover:text-ink-0"
                    >
                      {i.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.05] pt-6 text-[12px] text-ink-400 sm:flex-row sm:items-center">
          <span className="font-mono uppercase tracking-[0.18em]">
            © 2026 AXIOM Labs · Singapore
          </span>
          <span className="font-mono uppercase tracking-[0.18em]">
            Privacy · Terms · DPA
          </span>
        </div>
      </div>
    </footer>
  );
}
