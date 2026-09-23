/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: '#2c67ed',
          'blue-light': '#5589ff',
          'blue-glow': 'rgba(44, 103, 237, 0.45)',
          cyan: '#00f0ff',
          pink: '#ff007f',
          purple: '#a855f7',
          yellow: '#fcee0a',
          green: '#00ff66',
          dark: '#06070a',
          darker: '#030406',
          card: '#0a0e1a',
          card2: '#0e1424',
          border: '#1b253d',
          'border-glow': '#2c67ed',
          muted: '#8e9bbb',
        }
      },
      fontFamily: {
        heading: ['Orbitron', 'sans-serif'],
        subheading: ['Rajdhani', 'sans-serif'],
        code: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-blue': '0 0 25px rgba(44, 103, 237, 0.5), 0 0 10px rgba(44, 103, 237, 0.3)',
        'glow-cyan': '0 0 25px rgba(0, 240, 255, 0.5), 0 0 10px rgba(0, 240, 255, 0.3)',
        'glow-pink': '0 0 25px rgba(255, 0, 127, 0.5), 0 0 10px rgba(255, 0, 127, 0.3)',
        'glow-purple': '0 0 25px rgba(168, 85, 247, 0.5), 0 0 10px rgba(168, 85, 247, 0.3)',
        'cyber-card': '0 8px 32px 0 rgba(0, 0, 0, 0.7), inset 0 0 0 1px rgba(44, 103, 237, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'glitch': 'glitch 1s linear infinite',
      },
      keyframes: {
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
