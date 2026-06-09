import ScrollReveal from './ScrollReveal';

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay: 1 | 2 | 3 | 4 | 5;
  gradient?: string;
}

function BentoCard({
  title,
  description,
  icon,
  className = '',
  delay,
  gradient,
}: BentoCardProps) {
  return (
    <ScrollReveal delay={delay} className={className}>
      <div className="glow-border group relative h-full overflow-hidden rounded-2xl bg-[rgba(255,255,255,0.02)] p-8 transition-all duration-500 hover:bg-[rgba(255,255,255,0.04)]">
        {gradient && (
          <div
            className="absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-30"
            style={{ background: gradient }}
          />
        )}
        <div className="relative z-10">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] ring-1 ring-white/[0.06]">
            {icon}
          </div>
          <h3 className="font-display text-xl font-semibold text-text-primary">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function BentoGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-32">
      <ScrollReveal>
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-neon-blue/20 bg-neon-blue/5 px-4 py-1.5 text-sm font-medium text-neon-blue">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
          Core Capabilities
        </div>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <h2 className="font-display text-4xl font-bold tracking-[-0.02em] text-text-primary sm:text-5xl lg:text-6xl">
          Engineered for
          <span className="text-gradient"> intelligence</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-text-secondary">
          Every detail of Neural is crafted to deliver a seamless, powerful AI
          experience — from real-time inference to enterprise-grade security.
        </p>
      </ScrollReveal>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-6">
        {/* Large card - Speed */}
        <BentoCard
          delay={1}
          className="md:col-span-4"
          gradient="radial-gradient(circle, rgba(139,92,246,0.8), transparent)"
          title="Blazing fast inference"
          description="Powered by our custom CUDA-optimized runtime, Neural delivers sub-100ms response times even on the most complex reasoning chains. Your users will never wait."
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          }
        />

        {/* Small card - Accuracy */}
        <BentoCard
          delay={2}
          className="md:col-span-2"
          gradient="radial-gradient(circle, rgba(59,130,246,0.6), transparent)"
          title="99.9% accuracy"
          description="State-of-the-art models with continuous RLHF fine-tuning ensure your outputs are always reliable."
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 20V10" />
              <path d="M18 20V4" />
              <path d="M6 20v-4" />
            </svg>
          }
        />

        {/* Medium card - Context */}
        <BentoCard
          delay={2}
          className="md:col-span-3"
          gradient="radial-gradient(circle, rgba(16,185,129,0.5), transparent)"
          title="Deep context awareness"
          description="1M token context window means Neural remembers everything — entire codebases, full documents, and multi-turn conversations without losing track."
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10B981"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          }
        />

        {/* Medium card - Security */}
        <BentoCard
          delay={3}
          className="md:col-span-3"
          gradient="radial-gradient(circle, rgba(139,92,246,0.5), transparent)"
          title="Enterprise-grade security"
          description="SOC 2 Type II certified, with end-to-end encryption, zero data retention, and on-premise deployment options."
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#8B5CF6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          }
        />

        {/* Full width card - Automation */}
        <BentoCard
          delay={3}
          className="md:col-span-6"
          gradient="radial-gradient(ellipse at 30% 50%, rgba(59,130,246,0.4), transparent)"
          title="End-to-end automation"
          description="Chain multiple AI agents together: research, draft, review, and deploy — all orchestrated through a simple declarative API. Build pipelines that think for themselves."
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
