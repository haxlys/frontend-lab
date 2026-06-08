import { type ButtonHTMLAttributes } from 'react'

interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

export default function NeonButton({ children, variant = 'primary', className = '', ...props }: NeonButtonProps) {
  if (variant === 'secondary') {
    return (
      <button
        className={`relative px-7 py-3 text-[15px] font-semibold rounded-xl transition-all duration-300 glass border-white/[0.08] hover:border-white/[0.15] hover:bg-white/[0.06] text-white ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }

  return (
    <button
      className={`relative group inline-flex items-center gap-2 px-8 py-3.5 text-[15px] font-semibold text-white rounded-xl overflow-visible transition-all duration-300 ${className}`}
      {...props}
    >
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-neon-purple via-neon-blue to-neon-emerald opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-neon-purple via-neon-blue to-neon-emerald opacity-0 group-hover:opacity-60 blur-lg transition-all duration-500 -z-10" />
      <span className="absolute -inset-[12px] rounded-xl bg-gradient-to-r from-neon-purple/30 via-neon-blue/20 to-neon-emerald/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 -z-10" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </button>
  )
}
