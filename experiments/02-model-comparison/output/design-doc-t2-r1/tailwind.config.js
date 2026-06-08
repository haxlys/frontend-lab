/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          0: '#000000',
          50: '#0B0B0F',
          100: '#111118',
          200: '#1A1A24',
          300: '#262635',
        },
        neon: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          emerald: '#10B981',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Geist', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.05em',
        mega: '-0.04em',
      },
      fontSize: {
        'mega': ['clamp(3rem, 10vw, 9rem)', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(11,11,15,0) 0%, #0B0B0F 90%), linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'neon-gradient':
          'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #10B981 100%)',
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
      boxShadow: {
        'neon-purple': '0 0 40px rgba(139, 92, 246, 0.45), 0 0 12px rgba(139, 92, 246, 0.5) inset',
        'neon-blue': '0 0 40px rgba(59, 130, 246, 0.45), 0 0 12px rgba(59, 130, 246, 0.5) inset',
        'neon-emerald': '0 0 40px rgba(16, 185, 129, 0.4), 0 0 12px rgba(16, 185, 129, 0.5) inset',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.45)',
      },
      animation: {
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'orbit': 'orbit 18s linear infinite',
        'rise': 'rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        'grid-pan': 'gridPan 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-20px) translateX(10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55', filter: 'blur(40px)' },
          '50%': { opacity: '1', filter: 'blur(56px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(140px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(140px) rotate(-360deg)' },
        },
        rise: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gridPan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '48px 48px' },
        },
      },
    },
  },
  plugins: [],
}
