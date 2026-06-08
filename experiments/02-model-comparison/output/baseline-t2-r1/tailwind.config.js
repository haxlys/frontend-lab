/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#000000',
          900: '#0B0B0F',
          800: '#111118',
          700: '#1A1A24',
        },
        neon: {
          purple: '#8B5CF6',
          blue: '#3B82F6',
          green: '#10B981',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'neon-gradient':
          'linear-gradient(135deg, #8B5CF6 0%, #3B82F6 50%, #10B981 100%)',
        'neon-radial':
          'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.35), rgba(59,130,246,0.15) 40%, transparent 70%)',
        'grid-fade':
          'linear-gradient(to bottom, rgba(11,11,15,0) 0%, #0B0B0F 90%)',
      },
      boxShadow: {
        'neon-purple': '0 0 40px rgba(139,92,246,0.45), 0 0 80px rgba(139,92,246,0.25)',
        'neon-blue': '0 0 40px rgba(59,130,246,0.45), 0 0 80px rgba(59,130,246,0.25)',
        'neon-green': '0 0 40px rgba(16,185,129,0.45), 0 0 80px rgba(16,185,129,0.25)',
        'inner-glass': 'inset 0 1px 0 0 rgba(255,255,255,0.05)',
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
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'grid-move': {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
        'typing-cursor': {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'grid-move': 'grid-move 8s linear infinite',
        'typing-cursor': 'typing-cursor 1s step-end infinite',
        'scan-line': 'scan-line 4s linear infinite',
      },
    },
  },
  plugins: [],
}
