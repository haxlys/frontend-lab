/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#000000',
          deep: '#0B0B0F',
          soft: '#111118',
          line: '#1F1F2A',
        },
        neon: {
          purple: '#8B5CF6',
          violet: '#A78BFA',
          blue: '#3B82F6',
          cyan: '#22D3EE',
          emerald: '#10B981',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        ultratight: '-0.04em',
      },
      backgroundImage: {
        'neon-gradient':
          'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #10B981 100%)',
        'glass-radial':
          'radial-gradient(circle at 50% 0%, rgba(139,92,246,0.15), transparent 60%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(80px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(80px) rotate(-360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'grid-drift': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        'caret-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'shoot': {
          '0%': { transform: 'translateX(-110%)', opacity: '0' },
          '20%': { opacity: '1' },
          '100%': { transform: 'translateX(220%)', opacity: '0' },
        },
        'count-up': {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'reveal': {
          '0%': { transform: 'translateY(32px) scale(0.98)', opacity: '0', filter: 'blur(6px)' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1', filter: 'blur(0px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'orbit-slow': 'orbit 16s linear infinite',
        'orbit-medium': 'orbit 24s linear infinite',
        'orbit-fast': 'orbit 10s linear infinite reverse',
        'shimmer': 'shimmer 3s linear infinite',
        'grid-drift': 'grid-drift 12s linear infinite',
        'caret': 'caret-blink 1s steps(2) infinite',
        'shoot': 'shoot 2.4s ease-in-out infinite',
        'reveal': 'reveal 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
