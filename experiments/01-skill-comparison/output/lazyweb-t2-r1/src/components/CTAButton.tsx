interface CTAButtonProps {
  children: string
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
}

export default function CTAButton({ children, href = '#', variant = 'primary', className = '' }: CTAButtonProps) {
  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-center px-8 py-3.5 font-display font-semibold text-base rounded-xl overflow-hidden transition-all duration-500 group ${className}`}
    >
      {variant === 'primary' && (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-neon-purple via-electric-blue to-emerald opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.3) 0%, transparent 60%)',
            }}
          />
          <div className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500"
            style={{
              background: 'linear-gradient(135deg, rgba(139,92,246,0.4), rgba(59,130,246,0.4), rgba(16,185,129,0.4))',
              zIndex: -1,
            }}
          />
        </>
      )}

      {variant === 'secondary' && (
        <>
          <div className="absolute inset-0 glass-panel-light rounded-xl" />
          <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: 'radial-gradient(circle at center, rgba(139,92,246,0.15) 0%, transparent 60%)',
            }}
          />
        </>
      )}

      <span className={`relative z-10 flex items-center gap-2 ${
        variant === 'primary' ? 'text-white' : 'text-white/80 group-hover:text-white transition-colors duration-300'
      }`}>
        {children}
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </span>
    </a>
  )
}
