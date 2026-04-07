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
        'glow-lg': '0 0 80px -15px rgba(124, 92, 255, 0.6)',
        glass: 'inset 0 1px 0 0 rgba(255,255,255,0.06), 0 8px 32px -8px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'grid-line': "linear-gradient(rgba(124,92,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.08) 1px, transparent 1px)",
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
        'float-slow': {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(40px,-30px)' },
        },
        'float-slower': {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(-50px,40px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'blink': 'blink 1s step-end infinite',
        'float-slow': 'float-slow 18s ease-in-out infinite',
        'float-slower': 'float-slower 26s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
      },
    },
  },
  plugins: [],
};
