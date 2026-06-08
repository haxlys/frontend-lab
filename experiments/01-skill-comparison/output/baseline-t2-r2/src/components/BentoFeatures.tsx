import { useRef, useState, useCallback } from 'react';
import ScrollReveal from './ScrollReveal';

interface BentoCardProps {
  title: string;
  description: string;
  gradient: string;
  icon: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  delay: number;
}

function BentoCard({ title, description, gradient, icon, size, delay }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  }, []);

  const sizeClasses: Record<string, string> = {
    sm: 'col-span-1 row-span-1',
    md: 'col-span-1 row-span-1 md:col-span-2 md:row-span-1',
    lg: 'col-span-1 row-span-1 md:col-span-1 md:row-span-2',
    xl: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
  };

  return (
    <ScrollReveal delay={delay}>
      <div
        ref={cardRef}
        className={`${sizeClasses[size]} glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group cursor-default`}
        onMouseEnter={() => setHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHovered(false)}
        style={{
          ['--mouse-x' as string]: `${mousePos.x * 100}%`,
          ['--mouse-y' as string]: `${mousePos.y * 100}%`,
        } as React.CSSProperties}
      >
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none"
          style={{
            opacity: hovered ? 1 : 0,
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${gradient}, transparent 40%)`,
          }}
        />

        <div className="relative z-10 h-full flex flex-col">
          <div className="mb-4 md:mb-6">
            <span className="text-3xl md:text-4xl filter drop-shadow-lg">{icon}</span>
          </div>
          <div className="mt-auto">
            <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-2 tracking-tight whitespace-pre-line">
              {title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {description}
            </p>
          </div>
          <div
            className="mt-4 h-px bg-gradient-to-r from-purple-500 to-transparent transition-all duration-500"
            style={{ width: hovered ? '100%' : '32px' }}
          />
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function BentoFeatures() {
  const features: BentoCardProps[] = [
    {
      title: 'Real-Time\nInference',
      description: 'Sub-10ms response times powered by our distributed GPU mesh. Handle millions of requests simultaneously.',
      gradient: 'rgba(139,92,246,0.15)',
      icon: '⚡',
      size: 'xl',
      delay: 0,
    },
    {
      title: 'Multi-Modal',
      description: 'Process text, images, audio, and video in a single unified pipeline with native context awareness.',
      gradient: 'rgba(59,130,246,0.15)',
      icon: '🔮',
      size: 'sm',
      delay: 100,
    },
    {
      title: 'Enterprise\nSecurity',
      description: 'SOC 2 Type II certified. End-to-end encryption with zero-retention data processing and custom VPC deployment.',
      gradient: 'rgba(16,185,129,0.15)',
      icon: '🛡️',
      size: 'lg',
      delay: 200,
    },
    {
      title: 'Agentic Workflows',
      description: 'Autonomous AI agents that reason, use tools, and execute multi-step tasks without human intervention.',
      gradient: 'rgba(139,92,246,0.15)',
      icon: '🤖',
      size: 'md',
      delay: 150,
    },
    {
      title: 'Fine-Tuning API',
      description: 'Train custom models on your data in minutes. No ML expertise required. One-click deployment to production.',
      gradient: 'rgba(59,130,246,0.15)',
      icon: '🎯',
      size: 'sm',
      delay: 250,
    },
    {
      title: 'Global Edge',
      description: 'Deploy across 35+ regions with automatic failover and intelligent traffic routing for 99.99% SLA.',
      gradient: 'rgba(16,185,129,0.15)',
      icon: '🌐',
      size: 'sm',
      delay: 300,
    },
  ];

  return (
    <section id="features" className="relative py-24 md:py-32 px-6">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.06)_0%,transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-sm text-blue-300 backdrop-blur-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse-glow" />
              Platform Capabilities
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight mb-4">
              Built for the{' '}
              <span className="text-gradient">next era</span>
            </h2>
            <p className="max-w-xl mx-auto text-gray-400 text-base md:text-lg leading-relaxed">
              Every component engineered for performance, security, and scale.
              No compromises, no legacy — just pure innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] gap-4 md:gap-5">
          {features.map((feature, i) => (
            <BentoCard key={i} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
