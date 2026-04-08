/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Host Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Funnel Display"', '"Host Grotesk"', 'sans-serif'],
        mono: ['"Azeret Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Warm near-black canvas, cream ink, hi-vis yellow accent
        bg: {
          DEFAULT: '#0c0c0a',
          elev: '#131310',
          card: '#181815',
        },
        ink: {
          DEFAULT: '#f4f1e6',
          dim: '#a8a59a',
          mute: '#6a675d',
        },
        accent: {
          DEFAULT: '#f7d046', // hi-vis yellow
          hot: '#ff5b2e',     // vermillion (rare pop)
        },
        line: '#2a2925',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        ticker: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1px)' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'marquee-fast': 'marquee 22s linear infinite',
        blink: 'blink 1.1s step-end infinite',
      },
    },
  },
  plugins: [],
};
