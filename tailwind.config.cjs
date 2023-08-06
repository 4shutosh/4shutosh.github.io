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
				colorSurface: "#FFF8E5",
				colorOnSurface: "#110f0f",
				colorSurfaceDark: "#110f0f",
				colorOnSurfaceDark: "#FFF6E0",
				textBody: "#3F3F3D",
				textBodyDark: "#B6B6B4",
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						p: {
							color: theme("colors.textBody"),
						},
						a: {
							color: theme("colors.textBody"),
							"&:hover": {
								color: `${theme("colors.cyan.800")} !important`,
							},
							code: { color: theme("colors.primary.400") },
						},
						h1: {
							fontWeight: "800",
							color: theme("colors.colorOnSurface"),
						},
						h2: {
							fontWeight: "800",
							color: theme("colors.colorOnSurface"),
						},
						h3: {
							fontWeight: "800",
							color: theme("colors.colorOnSurface"),
						},
						"h4,h5,h6": {
							color: theme("colors.gray.900"),
						},
						pre: {
							backgroundColor: theme("colors.colorOnSurface"),
							color: theme("colors.colorSurface"),
						},
						code: {
							color: theme("colors.colorSurface"),
							backgroundColor: theme("colors.textBody"),
							paddingLeft: "4px",
							paddingRight: "4px",
							paddingTop: "2px",
							paddingBottom: "2px",
							borderRadius: "0.25rem",
						},
						"code::before": {
							content: "none",
						},
						"code::after": {
							content: "none",
						},
						details: {
							backgroundColor: theme("colors.gray.100"),
							paddingLeft: "4px",
							paddingRight: "4px",
							paddingTop: "2px",
							paddingBottom: "2px",
							borderRadius: "0.25rem",
						},
						hr: { borderColor: theme("colors.gray.200") },
						"ol li::marker": {
							fontWeight: "600",
							color: theme("colors.textBody"),
						},
						"ul li::marker": {
							color: theme("colors.textBody"),
						},
						li: {
							color: theme("colors.textBodyDark"),
						},
						strong: { color: theme("colors.colorOnSurface") },
						blockquote: {
							color: theme("colors.textBody"),
							borderLeftColor: theme("colors.textBodyDark"),
						},
						td: {
							color: theme("colors.textBody"),
						},
						th: {
							color: theme("colors.textBody"),
						},
					},
				},
				dark: {
					css: {
						p: {
							color: theme("colors.textBodyDark"),
						},
						a: {
							color: theme("colors.textBodyDark"),
							"&:hover": {
								color: `${theme("colors.cyan.800")} !important`,
							},
							code: { color: theme("colors.textBodyDark.400") },
						},
						h1: {
							fontWeight: "800",
							color: theme("colors.colorOnSurfaceDark"),
						},
						h2: {
							fontWeight: "800",
							color: theme("colors.colorOnSurfaceDark"),
						},
						h3: {
							fontWeight: "800",
							color: theme("colors.colorOnSurfaceDark"),
						},
						"h4,h5,h6": {
							color: theme("colors.colorOnSurfaceDark"),
						},
						pre: {
							backgroundColor: theme("colors.textBody"),
							color: theme("colors.colorOnSurfaceDark"),
						},
						code: {
							color: theme("colors.colorOnSurfaceDark"),
							backgroundColor: theme("colors.textBody"),
							paddingLeft: "4px",
							paddingRight: "4px",
							paddingTop: "2px",
							paddingBottom: "2px",
							borderRadius: "0.25rem",
						},
						"code::before": {
							content: "none",
						},
						"code::after": {
							content: "none",
						},
						details: {
							backgroundColor: theme("colors.gray.100"),
							paddingLeft: "4px",
							paddingRight: "4px",
							paddingTop: "2px",
							paddingBottom: "2px",
							borderRadius: "0.25rem",
						},
						hr: { borderColor: theme("colors.gray.200") },
						"ol li::marker": {
							fontWeight: "600",
							color: theme("colors.textBodyDark"),
						},
						"ul li::marker": {
							color: theme("colors.textBodyDark"),
						},
						li: {
							color: theme("colors.textBodyDark"),
						},
						strong: { color: theme("colors.colorOnSurfaceDark") },
						blockquote: {
							color: theme("colors.textBodyDark"),
							borderLeftColor: theme("colors.colorSurface"),
						},
						td: {
							color: theme("colors.textBodyDark"),
						},
						th: {
							color: theme("colors.textBodyDark"),
						},
					},
				},
			}),
		},
	},
	variants: {
		fill: ["hover", "focus"],
	},
	plugins: [require("@tailwindcss/typography")],
};
