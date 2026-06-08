import { Reveal } from "./Reveal";

const STATS = [
  { k: "27ms", v: "median p50 latency" },
  { k: "71ms", v: "p99, edge inference" },
  { k: "1.4M", v: "tokens / sec, sustained" },
  { k: "47d", v: "without a cache miss" },
];

export function Proof() {
  return (
    <section
      id="proof"
      className="relative border-t border-white/[0.05] py-24 md:py-32"
      aria-labelledby="proof-title"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <Reveal>
            <h2
              id="proof-title"
              className="font-display text-3xl font-medium leading-[1.05] tracking-[-0.025em] text-ink-0 sm:text-4xl"
            >
              Numbers that <span className="font-serif italic font-light text-gradient-iris">survive production.</span>
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink-300">
              Independently benchmarked across 14 enterprise workloads over 90
              consecutive days. Live data, refreshed every 10 minutes.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <figure className="mt-10 rounded-2xl border border-white/[0.06] bg-ink-900/50 p-7">
              <blockquote className="font-serif text-[20px] italic leading-[1.45] text-ink-100">
                “We replaced four internal services with one AXIOM endpoint. Our
                reasoning team is now two people and a single SDK.”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-300">
                <Avatar />
                <span>
                  <span className="text-ink-100">Mara Okafor</span> · VP Engineering, Helix
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        <div className="md:col-span-7">
          <dl className="grid grid-cols-2 gap-3">
            {STATS.map((s, i) => (
              <Reveal key={s.v} delay={0.05 + i * 0.05}>
                <div className="relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-ink-900/50 p-7">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full"
                    style={{
                      background:
                        "radial-gradient(closest-side, rgba(139,92,246,0.20), transparent 70%)",
                      filter: "blur(20px)",
                    }}
                  />
                  <dt className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-ink-400">
                    {s.v}
                  </dt>
                  <dd className="mt-3 font-display text-5xl font-medium tracking-tight text-ink-0 sm:text-6xl">
                    {s.k}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Avatar() {
  return (
    <span
      aria-hidden
      className="relative inline-flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold text-ink-950"
      style={{ background: "linear-gradient(135deg, #a7f3d0, #8b5cf6)" }}
    >
      MO
    </span>
  );
}
