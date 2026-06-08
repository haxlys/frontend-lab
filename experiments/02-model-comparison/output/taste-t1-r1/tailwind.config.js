/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Brand surfaces
        surface: {
          base: '#F8FAFC',      // slate-50, app background
          raised: '#FFFFFF',     // cards / panels
          sunken: '#F1F5F9',     // slate-100, subtle wells
        },
        // Borders / lines
        line: {
          DEFAULT: '#E2E8F0',   // slate-200
          strong: '#CBD5E1',    // slate-300
        },
        // Text
        ink: {
          primary: '#0F172A',   // slate-900
          secondary: '#334155', // slate-700
          tertiary: '#64748B',  // slate-500
          muted: '#94A3B8',     // slate-400
        },
        // Accent
        accent: {
          DEFAULT: '#2563EB',   // royal blue
          hover: '#1D4ED8',
          subtle: '#EFF6FF',    // blue-50
        },
        // Pipeline stage accents (muted, professional)
        stage: {
          lead: '#94A3B8',      // slate-400
          qualified: '#38BDF8', // sky-400
          proposal: '#6366F1',  // indigo-500
          negotiation: '#F59E0B', // amber-500
          won: '#10B981',       // emerald-500
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace',
        ],
      },
      fontSize: {
        // Tighter, professional scale
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],   // 11px
        'xs': ['0.75rem', { lineHeight: '1.125rem' }],   // 12px
        'sm': ['0.8125rem', { lineHeight: '1.25rem' }],  // 13px
        'base': ['0.875rem', { lineHeight: '1.375rem' }],// 14px (body default)
        'md': ['0.9375rem', { lineHeight: '1.4375rem' }],// 15px
        'lg': ['1.0625rem', { lineHeight: '1.625rem' }], // 17px
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        DEFAULT: '6px',
        'md': '8px',
        'lg': '10px',
        'xl': '12px',
      },
      boxShadow: {
        'card': '0 1px 2px 0 rgba(15, 23, 42, 0.04), 0 1px 1px 0 rgba(15, 23, 42, 0.02)',
        'card-hover': '0 2px 4px 0 rgba(15, 23, 42, 0.05), 0 2px 2px 0 rgba(15, 23, 42, 0.02)',
        'popover': '0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 2px 4px -2px rgba(15, 23, 42, 0.04)',
      },
      spacing: {
        'sidebar': '240px',
        'sidebar-collapsed': '64px',
        'topbar': '60px',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
