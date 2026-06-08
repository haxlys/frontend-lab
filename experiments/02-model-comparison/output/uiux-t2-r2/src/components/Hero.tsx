import { Reveal } from "./Reveal";
import { NeuralCanvas } from "./NeuralCanvas";

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-center overflow-hidden pt-28 sm:pt-32"
    >
      {/* Grid backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-faint bg-grid-32 opacity-[0.35] [mask-image:radial-gradient(80%_60%_at_50%_30%,#000,transparent_75%)]"
      />
      {/* Top radial glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -z-10 h-[600px] w-[1100px] -translate-x-1/2 rounded-full opacity-90"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.18) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 text-center">
        {/* Eyebrow badge */}
        <Reveal>
          <a
            href="#changelog"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] text-zinc-300 backdrop-blur-md transition-colors hover:border-white/20 hover:bg-white/[0.07]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-green/70 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon-green" />
            </span>
            <span>Now in public beta — v0.9 “Halcyon”</span>
            <ChevronRight className="h-3.5 w-3.5 text-zinc-500 transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>

        {/* Display headline */}
        <Reveal delay={80}>
          <h1 className="mt-7 font-display text-[44px] font-semibold leading-[0.95] tracking-ultratight text-white sm:text-[72px] md:text-[96px] lg:text-[120px]">
            <span className="block">AI that</span>
            <span className="block">
              <span className="text-gradient-neon">thinks</span>
              <span className="text-zinc-500"> · </span>
              <span>with you.</span>
            </span>
          </h1>
        </Reveal>

        {/* Subcopy with typewriter-like vibe */}
        <Reveal delay={160}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-zinc-400 sm:text-lg">
            Nebula is an ambient intelligence layer for product teams.
            <br className="hidden sm:block" />
            A single workspace for{" "}
            <span className="font-mono text-zinc-200">
              <RotatingPhrase />
            </span>{" "}
            — at the speed of thought.
          </p>
        </Reveal>

        {/* CTA cluster */}
        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <PrimaryCta />
            <SecondaryCta />
          </div>
        </Reveal>

        {/* Trust strip */}
        <Reveal delay={320}>
          <p className="mt-10 text-xs uppercase tracking-[0.18em] text-zinc-500">
            Trusted by builders at
          </p>
          <div className="mask-fade-x mt-5 flex w-full overflow-hidden">
            <div className="flex shrink-0 animate-[marquee_28s_linear_infinite] gap-12 px-6 text-zinc-400/80">
              {[
                "Linear",
                "Vercel",
                "Stripe",
                "OpenAI",
                "Anthropic",
                "Figma",
                "Notion",
                "Cursor",
              ].map((b) => (
                <span
                  key={b}
                  className="font-display text-lg font-semibold tracking-[-0.02em] opacity-70"
                >
                  {b}
                </span>
              ))}
            </div>
            <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
          </div>
        </Reveal>
      </div>

      {/* Interactive canvas — the "AI working" visual */}
      <Reveal delay={120} className="relative mt-16 w-full">
        <div className="relative mx-auto h-[420px] w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 sm:h-[520px]">
          <NeuralCanvas />
          {/* Floating glass panel — represents a "model in motion" */}
          <div className="pointer-events-none absolute inset-0 flex items-end justify-center p-4 sm:p-6">
            <div className="glass-strong glow-border pointer-events-auto w-full max-w-md rounded-2xl p-4 text-left">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-purple/70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-purple" />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400">
                    reasoning · live
                  </span>
                </div>
                <span className="font-mono text-[11px] text-zinc-500">
                  step 04 / 06
                </span>
              </div>
              <div className="mt-3 space-y-2">
                {[
                  { w: "92%", c: "from-neon-purple to-neon-blue" },
                  { w: "78%", c: "from-neon-blue to-neon-green" },
                  { w: "44%", c: "from-neon-green to-neon-purple" },
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-12 font-mono text-[10px] text-zinc-500">
                      ctx-{i + 1}
                    </span>
                    <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
                      <div
                        className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r ${bar.c} animate-pulse-glow`}
                        style={{ width: bar.w }}
                      />
                    </div>
                    <span className="w-10 text-right font-mono text-[10px] text-zinc-400">
                      {bar.w}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3">
                <div className="flex -space-x-2">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-6 w-6 rounded-full border border-white/10 bg-gradient-to-br from-neon-purple/60 to-neon-blue/60"
                      style={{
                        background: `conic-gradient(from ${i * 120}deg, #8B5CF6, #3B82F6, #10B981, #8B5CF6)`,
                      }}
                    />
                  ))}
                </div>
                <span className="font-mono text-[11px] text-zinc-400">
                  3 agents · 4 tools
                </span>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Scroll cue */}
      <div className="relative z-10 mt-10 flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <span className="h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent" />
      </div>
    </section>
  );
}

function PrimaryCta() {
  return (
    <a
      href="#start"
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold text-white"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
      }}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-90"
        style={{
          padding: "1px",
          background:
            "linear-gradient(135deg, rgba(139,92,246,0.9), rgba(59,130,246,0.9) 50%, rgba(16,185,129,0.9))",
          WebkitMask:
            "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <span
        aria-hidden
        className="pointer-events-none absolute -inset-2 -z-20 rounded-2xl opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-80"
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, rgba(139,92,246,0.7), rgba(59,130,246,0.4) 50%, transparent 75%)",
        }}
      />
      <span className="relative z-10">Start building free</span>
      <svg
        className="relative z-10 h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </a>
  );
}

function SecondaryCta() {
  return (
    <a
      href="#demo"
      className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-zinc-200 backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <svg
        className="h-4 w-4 text-zinc-300"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" />
      </svg>
      <span>Watch the demo</span>
      <span className="text-xs text-zinc-500">2 min</span>
    </a>
  );
}

function RotatingPhrase() {
  return (
    <span
      className="inline-block max-w-[16ch] overflow-hidden align-bottom text-zinc-100"
      style={{ animation: "typewriter 3.6s steps(28, end) infinite" }}
    >
      shipping code
    </span>
  );
}
