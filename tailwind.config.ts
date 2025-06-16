import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'sage': {
          50: '#f7f9f7',
          100: '#e8f0e8',
          200: '#d1e1d1',
          300: '#a8c8a8',
          400: '#7bab7b',
          500: '#5a8f5a',
          600: '#467246',
          700: '#3a5d3a',
          800: '#2f4a2f',
          900: '#283e28',
        },
        'peach': {
          50: '#fef8f3',
          100: '#fdeee6',
          200: '#fbdacc',
          300: '#f7bfa8',
          400: '#f29874',
          500: '#ec7547',
          600: '#dd5a29',
          700: '#b7471f',
          800: '#923a1e',
          900: '#76331c',
        },
        'teal': {
          50: '#effefa',
          100: '#c7fef1',
          200: '#90fce4',
          300: '#51f4d4',
          400: '#1de4c1',
          500: '#05c9a7',
          600: '#00a085',
          700: '#05806b',
          800: '#0a6556',
          900: '#0d5347',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
export default config 