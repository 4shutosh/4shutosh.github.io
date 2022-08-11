/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        catamaran: "'Catamaran', sans-serif"
      }
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
}
