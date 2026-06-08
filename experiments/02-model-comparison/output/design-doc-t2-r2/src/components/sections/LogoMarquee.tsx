const logos = [
  "Vercel",
  "Linear",
  "Stripe",
  "Notion",
  "Loom",
  "Raycast",
  "Figma",
  "Replit",
  "Cursor",
  "Perplexity",
];

export function LogoMarquee() {
  const row = [...logos, ...logos];
  return (
    <section className="relative isolate py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-center font-mono text-[10px] uppercase tracking-[0.3em] text-white/40">
          Trusted by teams shipping at scale
        </p>
        <div className="marquee-mask mt-6 overflow-hidden">
          <div className="flex w-max gap-12 animate-marquee">
            {row.map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-7 items-center font-display text-lg font-semibold tracking-tight text-white/40 transition-colors hover:text-white/80"
              >
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white/30" />
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
