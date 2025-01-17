/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFD700',
      },
      fontFamily: {
        cursive: ['Pacifico', 'cursive'],
      },
    },
  },
  plugins: [],
};