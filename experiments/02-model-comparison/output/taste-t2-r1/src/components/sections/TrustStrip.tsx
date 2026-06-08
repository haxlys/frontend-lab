const companies = [
  { name: "Linear", slug: "linear" },
  { name: "Vercel", slug: "vercel" },
  { name: "Stripe", slug: "stripe" },
  { name: "Notion", slug: "notion" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "Replicate", slug: "replicate" },
  { name: "Figma", slug: "figma" },
  { name: "Perplexity", slug: "perplexity" },
];

export function TrustStrip() {
  return (
    <section id="trust" className="relative border-y border-white/5 bg-ink-50/40">
      <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-6 px-5 py-10 sm:px-8 md:flex-row md:justify-between md:gap-12">
        <p className="shrink-0 text-[12px] font-mono uppercase tracking-[0.18em] text-ink-700">
          In production at
        </p>
        <ul className="grid w-full grid-cols-4 items-center gap-x-6 gap-y-5 md:flex md:w-auto md:flex-wrap md:justify-end md:gap-x-10">
          {companies.map((c) => (
            <li key={c.slug} className="group flex items-center justify-center">
              <img
                src={`https://cdn.simpleicons.org/${c.slug}/e6e6ec`}
                alt={c.name}
                width={88}
                height={24}
                loading="lazy"
                className="h-4 w-auto opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.45)] md:h-5"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
