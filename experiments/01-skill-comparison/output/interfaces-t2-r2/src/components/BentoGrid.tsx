import { type ReactNode } from "react";

interface BentoBoxProps {
  children: ReactNode;
  className?: string;
  glowBorder?: boolean;
  hoverGlow?: boolean;
  delay?: 100 | 200 | 300 | 400 | 500 | 600;
}

function BentoBox({
  children,
  className = "",
  glowBorder = false,
  hoverGlow = false,
  delay = 200,
}: BentoBoxProps) {
  const base =
    "animate-reveal group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[rgba(255,255,255,0.02)] p-6 transition-all duration-700 sm:p-8 lg:p-10";

  const hoverClass = hoverGlow
    ? "hover:border-neon-purple/20 hover:bg-[rgba(139,92,246,0.03)] hover:shadow-[0_0_40px_rgba(139,92,246,0.08)] hover:-translate-y-1"
    : "hover:border-white/[0.1]";

  return (
    <div
      className={`${base} ${hoverClass} ${
        glowBorder ? "glow-border" : ""
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Top-left corner shine */}
      <div className="absolute -top-20 -left-20 h-40 w-40 rounded-full bg-neon-purple/5 blur-3xl transition-opacity duration-700 group-hover:opacity-100 opacity-0" />

      {/* Shimmer overlay */}
      <div className="absolute inset-0 shimmer opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      {children}
    </div>
  );
}

export default function BentoGrid() {
  const features = [
    {
      title: "Real-time Inference",
      subtitle: "< 50ms latency",
      description:
        "Our custom TPU mesh delivers responses faster than human perception. Zero cold starts, infinite concurrency.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="url(#grad-speed)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      colSpan: "lg:col-span-3 lg:row-span-2",
      glowBorder: true,
      hoverGlow: true,
    },
    {
      title: "99.9% Accuracy",
      subtitle: "Hallucination guard",
      description:
        "Proprietary chain-of-thought verification ensures every response is factual and citeable.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-emerald-green"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
      colSpan: "lg:col-span-3",
      hoverGlow: true,
    },
    {
      title: "Self-Optimizing",
      subtitle: "Auto model routing",
      description:
        "Dynamically selects the optimal model for each query based on complexity, cost, and context.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-electric-blue"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      colSpan: "lg:col-span-3",
      hoverGlow: true,
    },
    {
      title: "Enterprise Security",
      subtitle: "SOC 2 Type II",
      description:
        "Military-grade encryption with zero-data-retention policy. Deploy on-prem or in your VPC.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-neon-purple"
        >
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      ),
      colSpan: "lg:col-span-2",
      hoverGlow: true,
    },
    {
      title: "Agentic Workflows",
      subtitle: "Multi-step reasoning",
      description:
        "Chain together dozens of specialized agents to automate complex business logic.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-emerald-green"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      colSpan: "lg:col-span-2",
      hoverGlow: true,
    },
  ];

  // Additional bento boxes for visual interest
  const secondaryBoxes = [
    {
      colSpan: "lg:col-span-2",
      content: (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
          <span className="font-[family-name:var(--font-display)] text-5xl font-black text-glow-purple">
            50M+
          </span>
          <span className="text-sm text-text-muted">Daily API Calls</span>
        </div>
      ),
    },
    {
      colSpan: "lg:col-span-2",
      content: (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
          <span className="font-[family-name:var(--font-display)] text-5xl font-black text-glow-blue">
            10K+
          </span>
          <span className="text-sm text-text-muted">Active Teams</span>
        </div>
      ),
    },
    {
      colSpan: "lg:col-span-2",
      content: (
        <div className="flex h-full flex-col items-center justify-center gap-2 text-center">
          <span className="font-[family-name:var(--font-display)] text-5xl font-black text-emerald-green">
            99.99%
          </span>
          <span className="text-sm text-text-muted">Uptime SLA</span>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="animate-reveal visible inline-block rounded-full border border-neon-purple/20 bg-neon-purple/5 px-4 py-1 text-xs font-medium text-neon-purple">
            Capabilities
          </span>
          <h2 className="animate-reveal visible delay-100 mt-6 font-[family-name:var(--font-display)] text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Beyond anything
            <br />
            <span className="text-glow-purple">you've experienced</span>
          </h2>
          <p className="animate-reveal visible delay-200 mx-auto mt-5 max-w-xl text-lg text-text-secondary">
            Every feature is designed with one goal — to make AI feel like
            magic, not machinery.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
          {features.map((f, i) => (
            <BentoBox
              key={f.title}
              className={f.colSpan}
              glowBorder={f.glowBorder}
              hoverGlow={f.hoverGlow}
              delay={((i + 3) * 100) as 100 | 200 | 300 | 400 | 500 | 600}
            >
              {/* Highlight box (first item) gets special treatment */}
              {i === 0 ? (
                <div className="flex h-full flex-col justify-between">
                  {/* SVG gradient definition */}
                  <svg width="0" height="0" className="absolute">
                    <defs>
                      <linearGradient
                        id="grad-speed"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                      {f.icon}
                    </div>
                    <span className="text-xs font-medium uppercase tracking-[0.1em] text-neon-purple">
                      {f.subtitle}
                    </span>
                    <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-bold text-white lg:text-3xl">
                      {f.title}
                    </h3>
                    <p className="mt-3 max-w-md text-base leading-relaxed text-text-secondary">
                      {f.description}
                    </p>
                  </div>

                  {/* Latency visualization bar */}
                  <div className="mt-8">
                    <div className="mb-2 flex items-center justify-between text-xs text-text-muted">
                      <span>Response Time</span>
                      <span className="font-mono text-emerald-green">
                        &lt; 50ms
                      </span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-neon-purple to-electric-blue"
                        style={{
                          width: "85%",
                          animation: "pulse-glow 2s infinite",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03]">
                    {f.icon}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-[0.1em] text-neon-purple">
                    {f.subtitle}
                  </span>
                  <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-xl font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                    {f.description}
                  </p>
                </div>
              )}
            </BentoBox>
          ))}

          {/* Stats row */}
          {secondaryBoxes.map((box, i) => (
            <BentoBox
              key={i}
              className={box.colSpan}
              delay={((i + 8) * 100) as 100 | 200 | 300 | 400 | 500 | 600}
              hoverGlow
            >
              {box.content}
            </BentoBox>
          ))}
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-black to-transparent pointer-events-none" />
    </section>
  );
}
