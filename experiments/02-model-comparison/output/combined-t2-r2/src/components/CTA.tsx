import { motion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { MagneticButton } from "./MagneticButton";
import { Reveal } from "./Reveal";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative border-t border-white/[0.05] py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-900/60 px-8 py-16 text-center md:px-16 md:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0"
              style={{
                background:
                  "radial-gradient(60% 80% at 50% 0%, rgba(16,185,129,0.18), transparent 60%), radial-gradient(50% 60% at 80% 100%, rgba(139,92,246,0.18), transparent 60%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-0 opacity-30"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                backgroundSize: "48px 48px",
                maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <span className="font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-300">
                Free to start · $0.002 / 1k tokens after
              </span>
              <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.025em] text-ink-0 sm:text-5xl md:text-6xl">
                Build the thing <span className="font-serif italic font-light text-gradient-neon">you keep describing.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-[15.5px] leading-relaxed text-ink-300">
                Three lines of code and an API key. No sales call, no procurement,
                no contract for the first 1M tokens.
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <MagneticButton variant="primary" href="#cta">
                  Get your API key
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </MagneticButton>
                <a
                  href="#"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 font-sans text-[13.5px] font-medium text-ink-100 transition-colors hover:bg-white/[0.08]"
                >
                  Read the docs
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mx-auto mt-10 flex max-w-md items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon-400" />
                12,481 developers shipped with AXIOM this week
              </motion.div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
