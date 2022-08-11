import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

const dev = "production" === "development";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter({
      pages: "docs",
      assets: "docs",
      fallback: "foo.html",
    }),
    paths: {
      // change below to your repo name
      // base: dev ? "" : "/",
    },
  },
};

export default config;
