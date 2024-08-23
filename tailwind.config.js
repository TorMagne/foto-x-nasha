/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
        Libre: ['Libre', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
