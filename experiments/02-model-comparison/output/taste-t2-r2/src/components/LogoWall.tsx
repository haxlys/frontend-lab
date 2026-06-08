// Real SVG logos from Simple Icons CDN — used in the trust strip under the hero.
// All logos render in monochrome white, sized to 20x20, opacity 60% on rest.
const logos: { name: string; slug: string }[] = [
  { name: "Vercel", slug: "vercel" },
  { name: "Linear", slug: "linear" },
  { name: "Stripe", slug: "stripe" },
  { name: "Notion", slug: "notion" },
  { name: "Figma", slug: "figma" },
  { name: "Anthropic", slug: "anthropic" },
  { name: "OpenAI", slug: "openai" },
  { name: "Supabase", slug: "supabase" },
];

export default function LogoWall() {
  return (
    <section className="relative border-y border-white/[0.05] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-8">
          <p className="font-mono text-[10.5px] uppercase tracking-[0.28em] text-zinc-500">
            Trusted by operators at
          </p>
          <div className="grid w-full grid-cols-4 items-center gap-x-6 gap-y-8 sm:grid-cols-4 md:grid-cols-8 md:gap-x-10">
            {logos.map((l) => (
              <a
                key={l.slug}
                href="#"
                aria-label={l.name}
                className="group flex items-center justify-center"
              >
                <img
                  src={`https://cdn.simpleicons.org/${l.slug}/ffffff`}
                  alt={l.name}
                  width={22}
                  height={22}
                  loading="lazy"
                  className="h-5 w-5 opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:brightness-110 sm:h-6 sm:w-6"
                  style={{ filter: "invert(1)" }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
