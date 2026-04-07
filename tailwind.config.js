/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0b',
          elev: '#111114',
          card: '#141418',
        },
        ink: {
          DEFAULT: '#ededf0',
          dim: '#a1a1aa',
          mute: '#6b6b73',
        },
        accent: {
          DEFAULT: '#7c5cff',
          glow: '#a78bfa',
        },
        line: '#1f1f25',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(124, 92, 255, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'blink': 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
};
