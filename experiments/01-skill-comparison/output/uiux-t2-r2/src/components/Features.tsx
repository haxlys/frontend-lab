import { useScrollReveal } from "../hooks/useScrollReveal";

const features = [
  {
    size: "lg",
    title: "Real-time Reasoning",
    desc: "Processes complex queries with chain-of-thought logic at sub-second latency. No more waiting — answers arrive as you think.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    accent: "#8B5CF6",
    delay: 1,
  },
  {
    size: "md",
    title: "Adaptive Memory",
    desc: "Learns context across sessions. Every interaction makes Nexus smarter and more tuned to your workflow.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 12a9 9 0 01-9 9M21 3v5h-5M3 12a9 9 0 019-9M3 21v-5h5" />
      </svg>
    ),
    accent: "#3B82F6",
    delay: 2,
  },
  {
    size: "md",
    title: "Agentic Workflows",
    desc: "Autonomous agents that plan, execute, and self-correct. Deploy multi-step tasks with a single prompt.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        <circle cx="9" cy="7" r="4" />
      </svg>
    ),
    accent: "#10B981",
    delay: 3,
  },
  {
    size: "sm",
    title: "Zero Latency",
    desc: "Edge-optimized inference engine processes tokens in under 20ms. Feels instantaneous.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    accent: "#8B5CF6",
    delay: 4,
  },
  {
    size: "sm",
    title: "Privacy Core",
    desc: "End-to-end encrypted context. Your data never leaves your control — zero trust by design.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    accent: "#3B82F6",
    delay: 5,
  },
  {
    size: "sm",
    title: "Multi-modal",
    desc: "Understands text, images, voice, and code. One interface, every modality.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
        <line x1="17" y1="17" x2="22" y2="17" />
      </svg>
    ),
    accent: "#10B981",
    delay: 6,
  },
];

const sizeClasses: Record<string, string> = {
  lg: "col-span-2 row-span-2 md:row-span-2",
  md: "col-span-1 row-span-1 md:col-span-1",
  sm: "col-span-1 row-span-1",
};

export default function Features() {
  const refs = features.map(() => useScrollReveal());

  return (
    <section
      id="features"
      className="grid-bg relative px-6 py-24 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="reveal mb-16 text-center">
          <p className="mb-3 font-inter text-sm font-medium tracking-widest text-neon-purple-glow uppercase">
            Platform
          </p>
          <h2 className="font-geist text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Beyond generation.
            <br />
            <span className="text-neon">Autonomous intelligence.</span>
          </h2>
          <p className="mt-4 font-inter text-lg text-gray-400">
            Nexus is not a chatbot — it&apos;s an intelligence layer for your entire stack.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              ref={refs[i]}
              className={`reveal glass-card glow-border relative flex flex-col rounded-2xl p-6 md:p-8 ${
                sizeClasses[f.size]
              } reveal-delay-${f.delay}`}
              style={{
                minHeight: f.size === "lg" ? "340px" : f.size === "md" ? "240px" : "180px",
              }}
            >
              <div className="bento-glow-inner absolute inset-0 rounded-2xl pointer-events-none" />
              <div
                className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-500"
                style={{
                  background: `${f.accent}15`,
                  color: f.accent,
                  boxShadow: `0 0 20px ${f.accent}15`,
                }}
              >
                {f.icon}
              </div>
              <h3 className="font-geist text-lg font-semibold text-white sm:text-xl">
                {f.title}
              </h3>
              <p className="mt-2 font-inter text-sm leading-relaxed text-gray-400">
                {f.desc}
              </p>

              {/* Decorative corner accent */}
              <div
                className="absolute top-3 right-3 h-2 w-2 rounded-full opacity-30"
                style={{ background: f.accent, boxShadow: `0 0 8px ${f.accent}` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
