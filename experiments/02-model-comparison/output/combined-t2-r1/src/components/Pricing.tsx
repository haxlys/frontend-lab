import { motion } from 'motion/react'
import { Check, ArrowRight } from '@phosphor-icons/react'

const tiers = [
  {
    name: 'Starter',
    price: 0,
    cadence: 'forever',
    blurb: 'For solo builders kicking the tires.',
    cta: 'Start free',
    href: '#start',
    features: [
      '1 project, 3 agents',
      '100k reasoning tokens / month',
      'Community support',
      'Hosted in us-east',
    ],
  },
  {
    name: 'Team',
    price: 49,
    cadence: 'per seat / month',
    blurb: 'For shipping teams running real workloads.',
    cta: 'Start 14-day trial',
    href: '#trial',
    featured: true,
    features: [
      'Unlimited agents & projects',
      'Token-based pricing, pooled',
      'SOC 2 Type II, SAML SSO',
      'Slack & Linear integrations',
      'Private model fine-tuning',
    ],
  },
  {
    name: 'Enterprise',
    price: null,
    cadence: 'custom',
    blurb: 'For regulated orgs at scale.',
    cta: 'Talk to sales',
    href: '#sales',
    features: [
      'Single-tenant or self-hosted',
      'BYOK, VPC peering, data residency',
      'HIPAA, ISO 27001, FedRAMP-ready',
      'Dedicated solutions architect',
      'Custom SLAs and DPA',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative z-10 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-balance text-[40px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[56px]">
            One credit pool.
            <br />
            <span className="text-zinc-500">Three ways to ship.</span>
          </h2>
          <p className="mt-5 max-w-[55ch] text-[15px] leading-[1.6] text-zinc-400">
            No per-model metered surprise bills. Pool reasoning tokens across
            your org, route to the cheapest viable model for the job.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Tier key={t.name} tier={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Tier({ tier, index }: { tier: typeof tiers[number]; index: number }) {
  const f = tier.featured
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={[
        'group relative flex flex-col rounded-2xl border p-7',
        f
          ? 'border-violet-400/30 bg-gradient-to-b from-violet-500/[0.08] to-transparent'
          : 'border-white/[0.08] bg-white/[0.02]',
      ].join(' ')}
      style={{
        boxShadow: f
          ? '0 30px 80px -30px rgba(139,92,246,0.45), inset 0 1px 0 rgba(255,255,255,0.08)'
          : 'inset 0 1px 0 rgba(255,255,255,0.05)',
      }}
    >
      {f && (
        <span
          className="absolute -top-3 left-7 rounded-full border border-violet-300/30 bg-[#0B0B0F] px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-violet-200"
          style={{ boxShadow: '0 8px 24px -8px rgba(139,92,246,0.6)' }}
        >
          most popular
        </span>
      )}
      <h3 className="text-[15.5px] font-medium tracking-tight text-zinc-100">{tier.name}</h3>
      <p className="mt-1.5 text-[13.5px] leading-[1.5] text-zinc-400">{tier.blurb}</p>

      <div className="mt-7 flex items-baseline gap-1.5">
        {tier.price !== null ? (
          <>
            <span className="text-[44px] font-medium leading-none tracking-[-0.04em] text-zinc-100">${tier.price}</span>
            <span className="text-[13px] text-zinc-500">{tier.cadence}</span>
          </>
        ) : (
          <span className="text-[44px] font-medium leading-none tracking-[-0.04em] text-zinc-100">Let&apos;s talk</span>
        )}
      </div>

      <ul className="mt-7 space-y-2.5">
        {tier.features.map((feat) => (
          <li key={feat} className="flex items-start gap-2.5 text-[13.5px] leading-[1.5] text-zinc-300">
            <Check weight="bold" className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${f ? 'text-violet-300' : 'text-zinc-500'}`} />
            <span>{feat}</span>
          </li>
        ))}
      </ul>

      <a
        href={tier.href}
        className={[
          'mt-9 inline-flex items-center justify-center gap-2 rounded-full px-4 py-2.5 text-[13.5px] font-medium transition-all duration-200',
          f
            ? 'bg-white text-black hover:scale-[1.01] active:scale-[0.99]'
            : 'border border-white/10 bg-white/[0.03] text-zinc-200 hover:border-white/20 hover:bg-white/[0.06]',
        ].join(' ')}
      >
        {tier.cta}
        <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </motion.div>
  )
}
