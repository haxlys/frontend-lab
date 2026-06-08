import type { ReactNode } from 'react'

interface BentoCardProps {
  children: ReactNode
  className?: string
  delay?: number
  glow?: 'purple' | 'blue' | 'green' | 'none'
}

const glowMap = {
  purple: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]',
  blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]',
  green: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]',
  none: '',
}

export default function BentoCard({ children, className = '', delay = 0, glow = 'none' }: BentoCardProps) {
  return (
    <div
      className={`scroll-reveal glass rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:bg-white/[0.06] hover:-translate-y-1 ${glowMap[glow]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
