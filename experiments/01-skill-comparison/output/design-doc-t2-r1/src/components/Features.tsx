import ScrollReveal from "./ScrollReveal";
import { type ReactNode } from "react";

interface BentoCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
}

function BentoCard({ title, description, icon, className = "", delay, children }: BentoCardProps) {
  return (
    <ScrollReveal delay={delay}>
      <div
        className={`group relative rounded-2xl p-8 bg-[#0a0a12] border border-glass-border glow-border hover:border-neon-purple/30 transition-all duration-500 hover:bg-[#0d0d18] flex flex-col ${className}`}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-neon-purple/5 via-transparent to-electric-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative z-10 flex flex-col h-full">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-purple/20 to-electric-blue/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
          <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
          {children}
        </div>
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-purple/10 via-electric-blue/10 to-emerald/10 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none" />
      </div>
    </ScrollReveal>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-neon-purple/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-medium text-neon-purple tracking-wider uppercase mb-4">
              Platform Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-4">
              Engineered for{" "}
              <span className="animated-gradient-text">Performance</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 text-lg leading-relaxed">
              Every component of NexusAI is designed to push the boundaries of what autonomous intelligence can achieve.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto">
          <BentoCard
            delay={1}
            title="Sub-100ms Inference"
            description="Our custom CUDA kernels and optimized transformer architecture deliver responses faster than human thought — literally."
            className="lg:col-span-2 lg:row-span-2"
            icon={
              <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          >
            <div className="mt-auto pt-6 grid grid-cols-3 gap-4">
              {[
                { metric: "99.7%", label: "Accuracy" },
                { metric: "50ms", label: "Avg Latency" },
                { metric: "1M+", label: "RPS" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-xl bg-white/[0.03]">
                  <div className="text-2xl font-bold text-white">{stat.metric}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </BentoCard>

          <BentoCard
            delay={2}
            title="Multi-Agent Orchestration"
            description="Deploy swarms of specialized agents that collaborate, negotiate, and execute complex workflows autonomously."
            icon={
              <svg className="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.5 12a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM17.5 12a3.5 3.5 0 110-7 3.5 3.5 0 010 7zM12 19a3.5 3.5 0 110-7 3.5 3.5 0 010 7z" />
              </svg>
            }
          />

          <BentoCard
            delay={3}
            title="Zero-Trust Security"
            description="End-to-end encrypted reasoning pipelines with SOC 2 Type II compliance and isolated execution sandboxes."
            icon={
              <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
          />

          <BentoCard
            delay={4}
            title="Real-Time Streaming"
            description="Token-by-token streaming with sub-10ms first-token latency. Your users never wait."
            icon={
              <svg className="w-6 h-6 text-neon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
          />

          <BentoCard
            delay={5}
            title="Adaptive Context"
            description="Dynamically expanding context windows up to 10M tokens with zero degradation in recall accuracy."
            className="lg:col-span-2"
            icon={
              <svg className="w-6 h-6 text-electric-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16" />
              </svg>
            }
          />

          <BentoCard
            delay={6}
            title="API-First Design"
            description="RESTful and gRPC APIs with SDKs in Python, TypeScript, Go, and Rust. Integrate in minutes, not days."
            icon={
              <svg className="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            }
          />
        </div>
      </div>
    </section>
  );
}
