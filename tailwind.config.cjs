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
			colors: {
				colorSurface: "#FFF6E0",
				colorOnSurface: "#110f0f",
				colorSurfaceDark: "#110f0f",
				colorOnSurfaceDark: "#FFF6E0",
				textBody: "#3F3F3D",
				textBodyDark: "#B6B6B4",
			},
		},
	},
	variants: {
		fill: ["hover", "focus"],
	},
	plugins: [],
};
