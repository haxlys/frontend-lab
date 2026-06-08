/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#000000',
          900: '#06060A',
          800: '#0B0B0F',
          700: '#11111A',
          600: '#171724',
        },
        neon: {
          violet: '#8B5CF6',
          blue: '#3B82F6',
          green: '#10B981',
          pink: '#EC4899',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.04)',
          strong: 'rgba(255, 255, 255, 0.08)',
          border: 'rgba(255, 255, 255, 0.10)',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        'mega': '-0.04em',
        'ultra': '-0.06em',
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(180deg, rgba(11,11,15,0) 0%, rgba(11,11,15,0.6) 60%, rgba(11,11,15,1) 100%)',
        'aurora':
          'radial-gradient(60% 60% at 50% 0%, rgba(139,92,246,0.35) 0%, rgba(59,130,246,0.15) 40%, rgba(0,0,0,0) 70%)',
      },
      boxShadow: {
        'glow-violet': '0 0 40px rgba(139,92,246,0.45), 0 0 80px rgba(139,92,246,0.20)',
        'glow-blue': '0 0 40px rgba(59,130,246,0.45), 0 0 80px rgba(59,130,246,0.20)',
        'glow-green': '0 0 40px rgba(16,185,129,0.45), 0 0 80px rgba(16,185,129,0.20)',
        'inset-glass':
          'inset 0 1px 0 rgba(255,255,255,0.08), inset 0 0 0 1px rgba(255,255,255,0.04)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'scan': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'blink': {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'orbit-slow': 'orbit 24s linear infinite',
        'orbit-medium': 'orbit 16s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 4s ease-in-out infinite',
        'blink': 'blink 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
