/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      colors: {
        canvas: "#F8FAFC",
        surface: "#FFFFFF",
        "surface-subtle": "#F1F5F9",
        "surface-hover": "#F8FAFC",
        border: "#E2E8F0",
        "border-strong": "#CBD5E1",
        ink: {
          primary: "#0F172A",
          secondary: "#475569",
          tertiary: "#94A3B8",
        },
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          subtle: "#EFF6FF",
          ring: "#BFDBFE",
        },
        success: {
          DEFAULT: "#10B981",
          subtle: "#ECFDF5",
        },
        warning: {
          DEFAULT: "#F59E0B",
          subtle: "#FFFBEB",
        },
        danger: {
          DEFAULT: "#EF4444",
          subtle: "#FEF2F2",
        },
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04)",
        "card-hover": "0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)",
        focus: "0 0 0 3px rgba(37, 99, 235, 0.15)",
      },
      borderRadius: {
        DEFAULT: "6px",
        lg: "8px",
      },
      transitionTimingFunction: {
        default: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
