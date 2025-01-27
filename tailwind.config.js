/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
        canvasans: ['Canva Sans', ...defaultTheme.fontFamily.sans],
        gordita: ['Gordita', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        formBorder: '#e3dddd'
      }
    },
  },
  plugins: [],
}