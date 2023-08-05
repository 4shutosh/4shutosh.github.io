import adapter from "@sveltejs/adapter-netlify";
import { vitePreprocess } from "@sveltejs/kit/vite";
import preprocess from "svelte-preprocess";
import { mdsvex } from "mdsvex";

const dev = "production" === "development";

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: [".md"],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".html", ".svx", ".md"],
	kit: {
		adapter: adapter(),
	},
	preprocess: [
		vitePreprocess(),
		mdsvex(mdsvexOptions),
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
