"use client";
import { motion, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Command, GithubLogo } from "@phosphor-icons/react";

export function ClosingCta() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();

  return (
    <section id="start" className="relative py-28 sm:py-36">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-72 -translate-y-1/2 bg-gradient-to-r from-volt-500/10 via-transparent to-glacier-500/10 blur-3xl" />

      <motion.div
        ref={ref}
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto max-w-[1080px] px-5 sm:px-8"
      >
        <div className="glass-strong relative overflow-hidden rounded-[28px] p-8 sm:p-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-volt-500/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-glacier-500/25 blur-3xl"
          />

          <div className="relative grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-medium leading-[1.02] tracking-[-0.03em] text-ink-950">
                Wire your first agent{" "}
                <span className="text-gradient italic font-light">before lunch</span>
              </h2>
              <p className="mt-5 max-w-md text-[15.5px] leading-relaxed text-ink-700">
                Free for solo builders, 1M monthly steps. No card. Bring your own model, or
                start with ours.
              </p>
            </div>

            <div className="flex flex-col items-stretch gap-3 lg:col-span-5">
              <div className="flex flex-wrap gap-3">
                <a
                  href="#cli"
                  className="group inline-flex flex-1 items-center justify-between gap-2 rounded-2xl border border-white/10 bg-ink-950 px-5 py-4 text-ink-950 transition-all duration-300 hover:border-volt-400/40"
                >
                  <span className="flex items-center gap-3">
                    <Command size={18} weight="fill" className="text-volt-400" />
                    <span className="text-[14px] font-medium text-ink-100">Install CLI</span>
                  </span>
                  <ArrowRight
                    size={16}
                    weight="bold"
                    className="text-ink-700 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-ink-100"
                  />
                </a>
                <a
                  href="#github"
                  className="group inline-flex flex-1 items-center justify-between gap-2 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <span className="flex items-center gap-3">
                    <GithubLogo size={18} weight="fill" className="text-ink-900" />
                    <span className="text-[14px] font-medium text-ink-100">Star on GitHub</span>
                  </span>
                  <span className="font-mono text-[11px] text-ink-700 group-hover:text-ink-900">
                    8.4k
                  </span>
                </a>
              </div>
              <pre className="overflow-x-auto rounded-2xl border border-white/8 bg-ink-0/60 p-4 font-mono text-[12px] leading-relaxed text-ink-800">
{`$ npm i -g @synapse/cli
$ synapse init my-agent
✓ connected to session 0xa14c
$ synapse deploy`}
              </pre>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
