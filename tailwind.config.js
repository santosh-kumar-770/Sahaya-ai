/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#fedd88',
          300: '#fec34a',
          400: '#fca11a',
          500: '#f57f07',
          600: '#d95e03',
          700: '#b44105',
          800: '#90330b',
          900: '#752b0d',
        },
        civic: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        deepslate: {
          850: '#151f32',
          900: '#0f172a',
          950: '#090d16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'sound-wave-1': 'soundWave 1.2s ease-in-out infinite alternate',
        'sound-wave-2': 'soundWave 0.9s ease-in-out infinite alternate 0.2s',
        'sound-wave-3': 'soundWave 1.4s ease-in-out infinite alternate 0.4s',
        'sound-wave-4': 'soundWave 1.1s ease-in-out infinite alternate 0.1s',
      },
      keyframes: {
        soundWave: {
          '0%': { height: '20%' },
          '100%': { height: '100%' },
        }
      }
    },
  },
  plugins: [],
}
