interface GlowButtonProps {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'outline'
  className?: string
}

export default function GlowButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: GlowButtonProps) {
  const baseClasses =
    'relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full transition-all duration-500 cursor-pointer overflow-hidden group'

  const variants = {
    primary: 'text-white',
    secondary: 'text-white/80',
    outline: 'text-white',
  }

  const backgrounds = {
    primary: 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-600 before:to-blue-600 before:rounded-full before:transition-opacity before:duration-500',
    secondary: 'before:absolute before:inset-0 before:bg-white/10 before:rounded-full before:transition-all before:duration-500',
    outline: 'before:absolute before:inset-0 before:bg-transparent before:rounded-full before:border before:border-white/20 before:transition-all before:duration-500',
  }

  const glowEffects = {
    primary: 'after:absolute after:inset-[-4px] after:rounded-full after:bg-gradient-to-r after:from-purple-600/40 after:via-blue-600/30 after:to-purple-600/40 after:blur-xl after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100',
    secondary: 'after:absolute after:inset-[-4px] after:rounded-full after:bg-gradient-to-r after:from-purple-600/20 after:to-blue-600/20 after:blur-xl after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100',
    outline: 'after:absolute after:inset-[-4px] after:rounded-full after:bg-gradient-to-r after:from-purple-600/20 after:to-blue-600/20 after:blur-xl after:opacity-0 after:transition-opacity after:duration-500 hover:after:opacity-100',
  }

  const hoverEffects = {
    primary: 'hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.4)]',
    secondary: 'hover:bg-white/15 hover:scale-105',
    outline: 'hover:border-white/40 hover:scale-105',
  }

  const Comp = href ? 'a' : 'button'

  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${backgrounds[variant]} ${glowEffects[variant]} ${hoverEffects[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {variant === 'primary' && (
          <svg
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        )}
      </span>
    </Comp>
  )
}
