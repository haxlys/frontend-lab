import { Lightning, Brain, Cube, ShieldCheck, Gauge, Globe } from "@phosphor-icons/react";
import BentoGrid, { BentoBox } from "./BentoGrid";
import ScrollReveal from "./ScrollReveal";
import { motion } from "motion/react";

const features = [
  { icon: Lightning, title: "Sub-100ms inference", desc: "Blazing-fast responses powered by our distributed GPU mesh. No cold starts, no queue time.", size: "lg:col-span-2 lg:row-span-2", glow: true, stat: "<100ms", statLabel: "avg latency" },
  { icon: Brain, title: "Multi-agent reasoning", desc: "Specialized agents collaborate in parallel, cross-validating outputs for unmatched accuracy.", size: "lg:col-span-2", glow: false, stat: "99.7%", statLabel: "benchmark" },
  { icon: Cube, title: "Tool integration", desc: "Native APIs for Slack, GitHub, Notion, and 200+ services. Deploy workflows in seconds.", size: "lg:col-span-2", glow: false },
  { icon: ShieldCheck, title: "Enterprise security", desc: "SOC 2 Type II certified. Your data never trains our models. Zero-retention by default.", size: "", glow: false },
  { icon: Gauge, title: "Auto-scaling", desc: "From 10 to 10M requests. Our infrastructure scales with you, not your bill.", size: "", glow: false },
  { icon: Globe, title: "18 regions worldwide", desc: "Deploy inference endpoints in any major cloud region. Data never leaves your jurisdiction.", size: "", glow: false },
];

export default function FeatureShowcase() {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-white mb-4">
              Designed for <span className="text-glow">scale</span>
            </h2>
            <p className="text-zinc-400 text-base sm:text-lg max-w-[560px] mx-auto">
              Every component engineered for production workloads from day one.
            </p>
          </div>
        </ScrollReveal>

        <BentoGrid>
          {features.map((f, i) => (
            <ScrollReveal key={f.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="h-full">
                <BentoBox className={`h-full ${f.size}`} glow={f.glow}>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mb-4 text-neon-purple">
                    <f.icon size={20} weight="fill" />
                  </div>
                  <h3 className="font-['Space_Grotesk'] font-semibold text-white text-lg mb-2">{f.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed max-w-[360px]">{f.desc}</p>
                  {f.stat && (
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-3xl font-['Space_Grotesk'] font-bold text-white tracking-tight">{f.stat}</span>
                      <span className="text-xs text-zinc-500 uppercase tracking-widest">{f.statLabel}</span>
                    </div>
                  )}
                </BentoBox>
              </motion.div>
            </ScrollReveal>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
