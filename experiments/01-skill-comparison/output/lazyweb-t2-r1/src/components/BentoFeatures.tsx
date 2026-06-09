import ScrollReveal from './ScrollReveal';

interface FeatureCard {
  id: string;
  title: string;
  description: string;
  size: 'sm' | 'md' | 'lg';
  icon: React.ReactNode;
  accent: 'purple' | 'blue' | 'emerald';
}

const accentMap = {
  purple: {
    border: 'hover:border-neon-purple/40',
    glow: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
    bg: 'bg-neon-purple/10',
    icon: 'text-neon-purple',
  },
  blue: {
    border: 'hover:border-electric-blue/40',
    glow: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
    bg: 'bg-electric-blue/10',
    icon: 'text-electric-blue',
  },
  emerald: {
    border: 'hover:border-emerald/40',
    glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
    bg: 'bg-emerald/10',
    icon: 'text-emerald',
  },
};

const IconSpeed = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>
);

const IconPrecision = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const IconAuto = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
  </svg>
);

const IconScale = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
  </svg>
);

const IconSecure = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>
);

const IconRealTime = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25V18a2.25 2.25 0 002.25 2.25h13.5A2.25 2.25 0 0021 18V8.25m-18 0V6a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 6v2.25m-18 0h18M5.25 6h.008v.008H5.25V6zM7.5 6h.008v.008H7.5V6zm2.25 0h.008v.008H9.75V6z" />
  </svg>
);

const FEATURES: FeatureCard[] = [
  {
    id: 'speed',
    title: 'Blazing Inference',
    description: 'Sub-10ms response times powered by our proprietary distributed GPU mesh. Real-time streaming with zero buffering.',
    size: 'md',
    icon: <IconSpeed />,
    accent: 'purple',
  },
  {
    id: 'precision',
    title: '99.97% Accuracy',
    description: 'Industry-leading precision across benchmarks. Your outputs are always reliable, always correct.',
    size: 'sm',
    icon: <IconPrecision />,
    accent: 'blue',
  },
  {
    id: 'automation',
    title: 'Full Automation',
    description: 'Chain complex workflows with a single prompt. Nexus orchestrates multi-step reasoning automatically.',
    size: 'md',
    icon: <IconAuto />,
    accent: 'emerald',
  },
  {
    id: 'scale',
    title: 'Planetary Scale',
    description: 'Deploy globally across 45+ regions. Auto-scaling infrastructure that grows with your traffic.',
    size: 'sm',
    icon: <IconScale />,
    accent: 'purple',
  },
  {
    id: 'secure',
    title: 'Enterprise Security',
    description: 'SOC 2 Type II certified. End-to-end encryption, zero data retention. Your data never leaves your control.',
    size: 'lg',
    icon: <IconSecure />,
    accent: 'blue',
  },
  {
    id: 'realtime',
    title: 'Real-time Collaboration',
    description: 'Multiple users, shared context. Nexus synchronizes reasoning across your entire team in real time.',
    size: 'sm',
    icon: <IconRealTime />,
    accent: 'emerald',
  },
];

function BentoCard({ feature, delay }: { feature: FeatureCard; delay: number }) {
  const a = accentMap[feature.accent];
  const sizeClasses = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-1',
    lg: 'col-span-1 row-span-1 sm:col-span-2 sm:row-span-2',
  };

  return (
    <ScrollReveal delay={delay}>
      <div
        className={`group relative ${sizeClasses[feature.size]} p-[1px] rounded-2xl transition-all duration-500 ${a.border} ${a.glow}`}
      >
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="relative h-full rounded-2xl bg-black/40 backdrop-blur-sm border border-white/[0.04] p-6 sm:p-8 flex flex-col transition-colors duration-500 hover:bg-white/[0.02]">
          <div className={`w-10 h-10 rounded-xl ${a.bg} flex items-center justify-center mb-4 ${a.icon}`}>
            {feature.icon}
          </div>
          <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-2 tracking-tight">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed flex-1">
            {feature.description}
          </p>
          <div className="mt-4 pt-4 border-t border-white/[0.04] flex items-center gap-2 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-500">
            <span>Learn more</span>
            <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function BentoFeatures() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-electric-blue/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] text-xs font-medium text-gray-400 mb-4">
              Capabilities
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tighter mb-4">
              Beyond Human
              <br />
              <span className="text-gray-400">Limits</span>
            </h2>
            <p className="max-w-lg mx-auto text-gray-500 leading-relaxed">
              Every feature engineered for one purpose: to make AI feel indistinguishable from magic.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3">
          {FEATURES.map((feature, i) => (
            <BentoCard key={feature.id} feature={feature} delay={Math.min(i, 5)} />
          ))}
        </div>
      </div>
    </section>
  );
}
