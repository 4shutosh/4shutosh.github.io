import { error } from "console";
import { c as create_ssr_component } from "../../../chunks/ssr.js";
const metadata = {
  "title": "First Test Blog",
  "date": "2023-08-03T00:00:00.000Z",
  "path": "first-test",
  "description": "This is a test blog"
};
const _2023_08_03_first_test_blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<p data-svelte-h="svelte-opagsy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> <br> <p data-svelte-h="svelte-2dwg84">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>`;
});
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _2023_08_03_first_test_blog,
  metadata
}, Symbol.toStringTag, { value: "Module" }));
const getWritingsFiles = () => {
  return Object.entries(
    /* @__PURE__ */ Object.assign({ "/content/writings/2023-08-03-first-test-blog.md": __vite_glob_0_0 })
  );
};
const getWritings = () => {
  let writings = getWritingsFiles();
  return writings.map(([filepath, entry]) => getMetadata(entry)).filter((entry) => !entry.draft).sort((a, b) => a.date < b.date ? 1 : -1);
};
const getMetadata = (entry) => {
  return {
    ...entry.metadata,
    // content: entry.default.render().html,
    content: entry.default.render().html,
    // generate the slug from the file path
    slug: entry.slug
    // twitter: entry.metadata.twitter
    // 	? entry.metadata.twitter.replace(/(http(s)?:\/\/)?((w){3}.)?twitter\.com\/?/, '')
    // 	: null,
    // youtube: entry.metadata.video
    // 	? entry.metadata.video.replace(
    // 			/(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)(\.com)?\/(watch\?v=)?/,
    // 			''
    // 	  )
    // 	: null,
    // tag: entry.metadata.type?.split(' ').shift().toLowerCase() || null,
    // tags: entry.metadata.tags || []
    // whether or not this file is `my-post.md` or `my-post/index.md`
    // (needed to do correct dynamic import in posts/[slug].svelte)
    // isIndexFile: filepath.endsWith('/index.md')
  };
};
async function load({ params }) {
  const { slug } = params;
  const writing = getWritings().find((post) => post.path === slug);
  if (!writing) {
    throw error(404, "Blog not found!");
  }
  return {
    post: writing
  };
}
export {
  load
};
