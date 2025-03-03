/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'gold': '#FFD700',
        'mint': {
          100: '#e6fff2',
          200: '#ccffe6',
          300: '#b3ffd9',
          400: '#99ffcc',
          500: '#80ffc0',
          600: '#66ffb3',
          700: '#4dffa6',
          800: '#33ff99',
          900: '#1aff8c',
        }
      }
    },
  },
  plugins: [],
}