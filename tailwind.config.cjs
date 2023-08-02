/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts,tsx, vue}", "./index.html"],
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
