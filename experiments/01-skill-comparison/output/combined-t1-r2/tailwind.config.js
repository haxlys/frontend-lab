/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        card: '16px',
        pill: '9999px',
      },
      boxShadow: {
        card: '0 1px 2px rgba(0,0,0,0.06), 0 4px 6px -1px rgba(0,0,0,0.06)',
        elevated: '0 10px 15px -3px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.04)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.4s ease-out',
      },
      colors: {
        brand: {
          primary: '#6366f1',
          secondary: '#ec4899',
          bg: '#f8fafc',
          surface: '#ffffff',
          'text-primary': '#1e293b',
          'text-secondary': '#64748b',
        },
      },
    },
  },
  plugins: [],
}
