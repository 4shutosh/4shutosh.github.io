import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import { f as formatDateText } from "../../../chunks/formatDate.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const post = data.post;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1uty71u_START -->${$$result.title = `<title>${escape(post.title)}</title>`, ""}<!-- HEAD_svelte-1uty71u_END -->`, ""} <h1 class="flex flex-col text-4xl font-catamaran text-semibold mt-16 text-colorOnSurface dark:text-colorOnSurfaceDark mb-10"><p class="font-bold">${escape(post.title)}</p>  <p><date class="text-xl text-textBody dark:text-textBodyDark">Ashutosh Singh • ${escape(formatDateText(post.date))}</date></p></h1> <section class="font-catamaran"><div class="prose dark:prose-dark max-w-none sm:prose-xl tracking-normal leading-tight"><!-- HTML_TAG_START -->${post.content}<!-- HTML_TAG_END --></div></section>`;
});
export {
  Page as default
};
