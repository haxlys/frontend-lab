import ScrollReveal from './ScrollReveal'

interface FeatureBox {
  title: string
  description: string
  icon: React.ReactNode
  size: 'sm' | 'md' | 'lg'
  accent: 'purple' | 'blue' | 'emerald'
}

const accentMap = {
  purple: 'from-neon-purple/20 to-neon-purple/5 border-neon-purple/20 hover:border-neon-purple/40',
  blue: 'from-electric-blue/20 to-electric-blue/5 border-electric-blue/20 hover:border-electric-blue/40',
  emerald: 'from-emerald/20 to-emerald/5 border-emerald/20 hover:border-emerald/40',
}

const iconBgMap = {
  purple: 'bg-neon-purple/10 text-neon-purple',
  blue: 'bg-electric-blue/10 text-electric-blue',
  emerald: 'bg-emerald/10 text-emerald',
}

const sizeMap = {
  sm: 'col-span-1 row-span-1',
  md: 'col-span-1 row-span-2',
  lg: 'col-span-2 row-span-1 md:col-span-2',
}

function BentoCard({ title, description, icon, size, accent }: FeatureBox) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl glass-card p-6 md:p-8 flex flex-col justify-between ${sizeMap[size]} ${accentMap[accent]}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: accent === 'purple'
            ? 'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(139,92,246,0.08), transparent 60%)'
            : accent === 'blue'
            ? 'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(59,130,246,0.08), transparent 60%)'
            : 'radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(16,185,129,0.08), transparent 60%)',
        }}
        onMouseMove={(e) => {
          const rect = e.currentTarget.parentElement!.getBoundingClientRect()
          const x = ((e.clientX - rect.left) / rect.width) * 100
          const y = ((e.clientY - rect.top) / rect.height) * 100
          e.currentTarget.parentElement!.style.setProperty('--mx', `${x}%`)
          e.currentTarget.parentElement!.style.setProperty('--my', `${y}%`)
        }}
      />
      <div className="relative z-10">
        <div className={`w-10 h-10 rounded-xl ${iconBgMap[accent]} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
          {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
        <p className="text-sm text-white/50 leading-relaxed">{description}</p>
      </div>
      <div className="relative z-10 mt-4">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-current to-transparent opacity-10 group-hover:opacity-30 transition-opacity duration-500" />
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="relative py-32 px-6">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-deep-charcoal/50 to-black pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neon-purple mb-4 block">
              Platform
            </span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] mb-4">
              <span className="text-white">Engineered for </span>
              <span className="neon-gradient-text">the impossible</span>
            </h2>
            <p className="max-w-lg mx-auto text-white/40 text-lg font-light">
              Every feature built from the ground up to think, reason, and create alongside you.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[180px] gap-4">
          <ScrollReveal delay={100}>
            <BentoCard
              size="lg"
              accent="purple"
              title="Lightning Inference"
              description="Sub-50ms token generation with our custom CUDA kernels. Process entire documents in the time it takes to blink."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <BentoCard
              size="sm"
              accent="blue"
              title="Multi-Modal Reasoning"
              description="Text, image, audio, code — one model understands them all."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <BentoCard
              size="sm"
              accent="emerald"
              title="Enterprise Security"
              description="SOC 2 Type II certified. Your data never leaves your VPC."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <BentoCard
              size="sm"
              accent="purple"
              title="Context Windows"
              description="1M token windows. Ingest entire codebases and books effortlessly."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal delay={500}>
            <BentoCard
              size="md"
              accent="blue"
              title="Agentic Workflows"
              description="Deploy AI agents that reason, plan, and execute autonomously. Chain tools, browse the web, and run code in a sandboxed environment — all orchestrated by Nexus."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal delay={600}>
            <BentoCard
              size="sm"
              accent="emerald"
              title="Fine-Tuning API"
              description="Customize models with your data. Zero infrastructure required."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              }
            />
          </ScrollReveal>
          <ScrollReveal delay={700}>
            <BentoCard
              size="sm"
              accent="purple"
              title="Real-Time Streaming"
              description="Server-Sent Events with zero buffering. See every token as it's generated."
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              }
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
