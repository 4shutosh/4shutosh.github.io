import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const post = data.post;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1uty71u_START -->${$$result.title = `<title>${escape(post.title)}</title>`, ""}<!-- HEAD_svelte-1uty71u_END -->`, ""} <h1 class="flex flex-col text-4xl font-catamaran text-semibold mt-16 text-gray-800 dark:text-gray-200 mb-10">${escape(post.title)}  <p><i class="italic text-gray-500 text-xl" data-svelte-h="svelte-1tc8e0q">Ashutosh Singh • </i><date class="text-gray-500 text-xl">${escape(post.date)}</date></p></h1> <section class="text-left font-catamaran font-normal text-gray-700 dark:text-gray-300 text-xl"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></section>`;
});
export {
  Page as default
};
