import { useReveal } from "../../hooks/useReveal.ts";

export function CTA() {
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <section className="relative isolate py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div
          ref={ref}
          className={`reveal ${inView ? "in-view" : ""} relative overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60 p-10 text-center sm:p-16`}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[44rem] -translate-x-1/2 rounded-full bg-neon-gradient-soft blur-3xl"
          />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              The future of intelligence,{" "}
              <span className="neon-text-static">one API away.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Start free, scale seamlessly. No credit card, no commitments —
              just pure intelligence.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#start"
                className="btn-neon inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink-900 ring-1 ring-white/20 shadow-neon-purple"
              >
                Get your API key
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a
                href="#docs"
                className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md hover:bg-white/[0.06]"
              >
                Read the docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
