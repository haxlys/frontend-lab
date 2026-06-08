import { Zap, Brain, Globe, Shield, BarChart3, Code2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CTAButton from './CTAButton';

interface FeatureCard {
  icon: React.ElementType;
  title: string;
  description: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  accent: 'purple' | 'blue' | 'emerald';
}

const FEATURES: FeatureCard[] = [
  {
    icon: Brain,
    title: 'Neural Reasoning Engine',
    description:
      'Our proprietary architecture chains together thousands of reasoning steps in parallel, producing answers that are not only accurate but explainable.',
    size: 'xl',
    accent: 'purple',
  },
  {
    icon: Zap,
    title: 'Sub-Second Inferencing',
    description: 'Optimized CUDA kernels and speculative decoding deliver responses faster than you can type.',
    size: 'sm',
    accent: 'emerald',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 Type II, HIPAA, and GDPR compliant. Your data never leaves your VPC.',
    size: 'sm',
    accent: 'blue',
  },
  {
    icon: Globe,
    title: 'Multilingual by Default',
    description: '100+ languages with native-level fluency. Zero translation latency across all supported locales.',
    size: 'sm',
    accent: 'purple',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Monitor usage, cost, and performance with millisecond granularity through our purpose-built dashboard.',
    size: 'sm',
    accent: 'blue',
  },
  {
    icon: Code2,
    title: 'Developer-First',
    description: 'REST, GraphQL, and gRPC APIs with SDKs for Python, TypeScript, Go, and Rust. Deploy in one command.',
    size: 'md',
    accent: 'emerald',
  },
];

const accentGradients = {
  purple: 'from-neon-purple/20 via-neon-purple/5 to-transparent',
  blue: 'from-electric-blue/20 via-electric-blue/5 to-transparent',
  emerald: 'from-emerald/20 via-emerald/5 to-transparent',
};

const accentBorders = {
  purple: 'border-neon-purple/20 hover:border-neon-purple/40',
  blue: 'border-electric-blue/20 hover:border-electric-blue/40',
  emerald: 'border-emerald/20 hover:border-emerald/40',
};

const accentGlows = {
  purple: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
  blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  emerald: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
};

export default function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-deep-charcoal to-black" />

      <div className="relative max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-neon-purple mb-4">
              Core Capabilities
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Intelligence that
              <br />
              <span className="text-gradient">Scales</span> with You
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto font-light">
              Every component of NexusAI is designed from the ground up for speed, safety, and scale.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            const sizeClasses = {
              sm: 'lg:col-span-1 lg:row-span-1',
              md: 'lg:col-span-1 lg:row-span-2',
              lg: 'lg:col-span-2 lg:row-span-1',
              xl: 'lg:col-span-2 lg:row-span-2',
            };

            return (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div
                  className={`
                    ${sizeClasses[feature.size]}
                    relative group glass-card rounded-2xl p-6 sm:p-8
                    ${accentBorders[feature.accent]}
                    ${accentGlows[feature.accent]}
                    transition-all duration-500 overflow-hidden
                  `}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${accentGradients[feature.accent]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative h-full flex flex-col">
                    <div
                      className={`
                        w-10 h-10 rounded-xl flex items-center justify-center mb-5
                        ${feature.accent === 'purple' ? 'bg-neon-purple/10 text-neon-purple' : ''}
                        ${feature.accent === 'blue' ? 'bg-electric-blue/10 text-electric-blue' : ''}
                        ${feature.accent === 'emerald' ? 'bg-emerald/10 text-emerald' : ''}
                      `}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-semibold text-white mb-3 leading-tight">
                      {feature.title}
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed flex-1 font-light">
                      {feature.description}
                    </p>

                    <div className="mt-4">
                      <span
                        className={`
                          inline-flex items-center gap-1 text-xs font-medium
                          ${feature.accent === 'purple' ? 'text-neon-purple' : ''}
                          ${feature.accent === 'blue' ? 'text-electric-blue' : ''}
                          ${feature.accent === 'emerald' ? 'text-emerald' : ''}
                        `}
                      >
                        Learn more
                        <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {feature.size === 'xl' && (
                    <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-10">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-neon-purple to-electric-blue blur-3xl" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <div className="mt-16 text-center">
            <CTAButton variant="outline">View All Features</CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
