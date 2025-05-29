/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#8B0000',
          light: '#A52A2A',
          dark: '#660000',
        },
        amber: {
          DEFAULT: '#FFBF00',
          light: '#FFD700',
          dark: '#CC9900',
        },
        success: {
          DEFAULT: '#2E8B57',
          light: '#3CB371',
          dark: '#1E5631',
        },
        warning: {
          DEFAULT: '#FF8C00',
          light: '#FFA500',
          dark: '#CC7000',
        },
        error: {
          DEFAULT: '#B22222',
          light: '#CD5C5C',
          dark: '#8B0000',
        },
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideUp: 'slideUp 0.5s ease-in-out',
        slideDown: 'slideDown 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};