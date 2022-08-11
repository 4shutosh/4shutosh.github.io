/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts,tsx}"],
  darkMode: "class",
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        catamaran: "'Catamaran', sans-serif",
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
  plugins: [],
};
