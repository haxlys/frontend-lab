import ScrollReveal from './ScrollReveal';

const features = [
  {
    title: 'Neural Reasoning',
    description: 'Multi-chain inference engine that thinks recursively, delivering answers with human-like depth.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    size: 'lg',
    accent: 'purple',
  },
  {
    title: 'Real-time Streaming',
    description: 'Instant token-by-token responses with zero buffering. See AI think in real time.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
    size: 'md',
    accent: 'blue',
  },
  {
    title: 'Multi-modal Input',
    description: 'Text, image, audio, code — one model understands it all. No switching between tools.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
      </svg>
    ),
    size: 'sm',
    accent: 'emerald',
  },
  {
    title: 'Enterprise Security',
    description: 'SOC 2 Type II, GDPR compliant, end-to-end encrypted. Your data never leaves your control.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    size: 'md',
    accent: 'purple',
  },
  {
    title: 'Autonomous Agents',
    description: 'Deploy AI agents that research, code, and execute autonomously. 24/7 digital workforce.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
    size: 'sm',
    accent: 'blue',
  },
  {
    title: 'API-first Architecture',
    description: 'Dead-simple REST & WebSocket APIs with SDKs for Python, Node, Go, and Rust.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    size: 'lg',
    accent: 'emerald',
  },
];

const SIZE_MAP = {
  lg: 'md:col-span-2 md:row-span-2',
  md: 'md:col-span-1 md:row-span-2',
  sm: 'md:col-span-1 md:row-span-1',
};

const ACCENT_COLORS = {
  purple: {
    icon: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    glow: 'before:from-purple-500/15 before:to-transparent',
  },
  blue: {
    icon: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
    glow: 'before:from-blue-500/15 before:to-transparent',
  },
  emerald: {
    icon: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    glow: 'before:from-emerald-500/15 before:to-transparent',
  },
};

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(139,92,246,0.06),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-[0.2em] text-purple-400 uppercase mb-4">
              Platform Features
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-white">Engineered for </span>
              <span className="gradient-text">Scale</span>
            </h2>
            <p className="max-w-xl mx-auto text-text-secondary text-lg">
              Every component of NexusAI is designed to handle millions of concurrent requests while maintaining sub-millisecond latency.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {features.map((feature, i) => {
            const size = SIZE_MAP[feature.size as keyof typeof SIZE_MAP];
            const accent = ACCENT_COLORS[feature.accent as keyof typeof ACCENT_COLORS];

            return (
              <ScrollReveal key={feature.title} delay={i * 80}>
                <div
                  className={`relative glass-card rounded-2xl p-6 flex flex-col justify-between overflow-hidden group
                    before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:transition-opacity before:duration-500
                    hover:before:opacity-100 ${accent.glow} ${size}`}
                >
                  <div>
                    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg border ${accent.icon} mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{feature.description}</p>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 glass rounded-full">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-black bg-gradient-to-br from-purple-400 to-blue-400"
                  />
                ))}
              </div>
              <span className="text-sm text-text-secondary">
                Trusted by <span className="text-white font-medium">10,000+</span> developers worldwide
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
