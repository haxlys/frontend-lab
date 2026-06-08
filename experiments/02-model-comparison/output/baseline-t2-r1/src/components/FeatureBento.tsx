import { useReveal } from '../hooks/useReveal'
import AccuracyPanel from './bento/AccuracyPanel'
import AgentOrbit from './bento/AgentOrbit'
import ChatPreview from './bento/ChatPreview'
import IntegrationBars from './bento/IntegrationBars'
import SpeedMeter from './bento/SpeedMeter'
import WorkflowGraph from './bento/WorkflowGraph'

interface BentoItem {
  className: string
  tag: string
  title: string
  desc: string
  visual: React.ReactNode
  accent: 'purple' | 'blue' | 'green'
}

const ITEMS: BentoItem[] = [
  {
    className:
      'md:col-span-2 md:row-span-2 min-h-[360px] md:min-h-[420px]',
    tag: 'Speed',
    title: 'Sub-second inference at frontier scale.',
    desc: 'A custom-built serving fabric routes every request to the optimal model shard — no cold starts, no queues.',
    visual: <SpeedMeter />,
    accent: 'purple',
  },
  {
    className: 'md:col-span-1 md:row-span-1 min-h-[200px]',
    tag: 'Accuracy',
    title: 'Verified across 2.4M evaluations.',
    desc: 'Every output is scored against a held-out ground truth set before it ever reaches you.',
    visual: <AccuracyPanel />,
    accent: 'blue',
  },
  {
    className: 'md:col-span-1 md:row-span-1 min-h-[200px]',
    tag: 'Workflows',
    title: 'Composable agents, orchestrated.',
    desc: 'Drag-and-drop nodes that route, verify, and ship work — no glue code.',
    visual: <WorkflowGraph />,
    accent: 'green',
  },
  {
    className: 'md:col-span-2 md:row-span-1 min-h-[260px]',
    tag: 'Conversation',
    title: 'A reasoning partner that ships with you.',
    desc: 'Refactor, translate, draft — inline, streaming, and editable in place.',
    visual: <ChatPreview />,
    accent: 'purple',
  },
  {
    className: 'md:col-span-2 md:row-span-1 min-h-[220px]',
    tag: 'Integrations',
    title: 'Already speaks your stack.',
    desc: 'Native connectors for the tools your team already lives in. Deploy in minutes, not weeks.',
    visual: <IntegrationBars />,
    accent: 'blue',
  },
  {
    className: 'md:col-span-2 md:row-span-1 min-h-[260px]',
    tag: 'Agents',
    title: 'Five specialized roles. One shared brain.',
    desc: 'Coder, Reviewer, Planner, Tester, and Deployer work in parallel — supervised by a central orchestrator.',
    visual: <AgentOrbit />,
    accent: 'green',
  },
]

const ACCENT_STYLES: Record<BentoItem['accent'], { glow: string; text: string }> = {
  purple: {
    glow: 'group-hover:shadow-neon-purple',
    text: 'text-neon-purple',
  },
  blue: {
    glow: 'group-hover:shadow-neon-blue',
    text: 'text-neon-blue',
  },
  green: {
    glow: 'group-hover:shadow-neon-green',
    text: 'text-neon-green',
  },
}

export default function FeatureBento() {
  const { ref, isVisible } = useReveal<HTMLDivElement>(0.05)

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-32 sm:py-40 overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-neon-purple/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-neon-blue/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div
          className={`reveal ${isVisible ? 'is-visible' : ''} max-w-2xl mb-16`}
        >
          <span className="text-xs uppercase tracking-[0.2em] text-neon-blue/80 font-mono">
            [ capabilities ]
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-balance leading-[1.05]">
            One platform.{' '}
            <span className="text-gradient-neon">Every dimension</span> of
            intelligence.
          </h2>
          <p className="mt-5 text-white/55 text-lg leading-relaxed">
            Neura is a vertical stack — model, runtime, and surface — designed
            in lockstep so each capability compounds on the next.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-min gap-4">
          {ITEMS.map((item, idx) => {
            const accent = ACCENT_STYLES[item.accent]
            return (
              <div
                key={item.title}
                className={`reveal reveal-delay-${(idx % 4) + 1} ${
                  isVisible ? 'is-visible' : ''
                } group relative ${item.className} glass rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 ${accent.glow}`}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div
                    className="absolute -inset-px rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, transparent, ${
                        item.accent === 'purple'
                          ? 'rgba(139,92,246,0.15)'
                          : item.accent === 'blue'
                            ? 'rgba(59,130,246,0.15)'
                            : 'rgba(16,185,129,0.15)'
                      }, transparent)`,
                    }}
                  />
                </div>

                <div className="relative z-10 flex flex-col h-full gap-5">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-[10px] uppercase tracking-[0.2em] font-mono ${accent.text}`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-white/30 text-[10px] font-mono">
                      0{idx + 1}
                    </span>
                  </div>

                  <div className="flex-1 min-h-[120px]">{item.visual}</div>

                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-medium text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm text-white/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
