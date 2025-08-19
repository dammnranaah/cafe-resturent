import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: { '2xl': '1280px' },
    },
    extend: {
      colors: {
        background: '#faf6f1',
        foreground: '#1f1b16',
        coffee: {
          50: '#f7f3ef',
          100: '#efe6de',
          200: '#e0ccbd',
          300: '#d0b29b',
          400: '#c1987a',
          500: '#b27e58',
          600: '#8e6546',
          700: '#6b4c35',
          800: '#483323',
          900: '#241a12',
        },
        cream: '#fff7eb',
        gold: '#c8a96a',
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.15)'
      },
      borderRadius: {
        xl: '1rem',
      },
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui'],
      }
    },
  },
  plugins: [],
}
export default config
