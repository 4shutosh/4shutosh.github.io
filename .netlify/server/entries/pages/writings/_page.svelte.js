import { c as create_ssr_component, s as subscribe, a as add_attribute, e as escape, b as each, v as validate_component } from "../../../chunks/ssr.js";
import { S as SITE_URL, a as SITE_TITLE, b as SITE_DESCRIPTION, D as DEFAULT_OG_IMAGE, M as MY_TWITTER_HANDLE } from "../../../chunks/siteConfig.js";
import { p as page } from "../../../chunks/stores.js";
import { a as formatDateNumbers } from "../../../chunks/formatDate.js";
const BlogLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  isActive = $page.url.pathname === $$props.href;
  $$unsubscribe_page();
  return `<a class="${[
    "hidden sm:px-3 md:inline-block text-colorOnSurface dark:text-colorOnSurfaceDark hover:text-cyan-700 dark:hover:text-cyan-700",
    isActive ? "font-regular" : ""
  ].join(" ").trim()}"${add_attribute("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const posts = data.posts;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${$$result.head += `<!-- HEAD_svelte-1w1ybsz_START -->${$$result.title = `<title>Writings - ${escape(SITE_TITLE)}</title>`, ""}<link rel="canonical"${add_attribute("href", SITE_URL, 0)}><link rel="alternate" type="application/rss+xml"${add_attribute("href", SITE_URL + "/api/rss.xml", 0)}><meta property="og:url"${add_attribute("content", SITE_URL, 0)}><meta property="og:type" content="article"><meta property="og:title"${add_attribute("content", SITE_TITLE, 0)}><meta name="Description"${add_attribute("content", SITE_DESCRIPTION, 0)}><meta property="og:description"${add_attribute("content", SITE_DESCRIPTION, 0)}><meta property="og:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><meta name="twitter:card" content="summary"><meta name="twitter:creator"${add_attribute("content", "@" + MY_TWITTER_HANDLE, 0)}><meta name="twitter:titl\`e"${add_attribute("content", SITE_TITLE, 0)}><meta name="twitter:description"${add_attribute("content", SITE_DESCRIPTION, 0)}><meta name="twitter:image"${add_attribute("content", DEFAULT_OG_IMAGE, 0)}><!-- HEAD_svelte-1w1ybsz_END -->`, ""} <h1 class="text-4xl font-catamaran text-semibold mt-16 text-colorOnSurface dark:text-colorOnSurfaceDark mb-10" data-svelte-h="svelte-1gsf17p">Writings</h1> <section class="w-full font-catamaran text-textBody dark:text-textBodyDark text-start text-xl"><p data-svelte-h="svelte-ssaj6q">I try to write my learnings, thoughts and experiences regularly.</p>  <br> ${!data ? `<p data-svelte-h="svelte-5uzwb8">Nothing found :( Please check back in some time.</p>` : `<div><ul>${each(posts, (post) => {
    return `<li><span class="text-textBody dark:text-textBodyDark">${escape(formatDateNumbers(post.date))}</span> <span class="text-colorOnSurface dark:text-colorOnSurfaceDark underline underline-offset-2">${validate_component(BlogLink, "BlogLink").$$render($$result, { href: post.path }, {}, {
      default: () => {
        return `${escape(post.title)}`;
      }
    })}</span> </li>`;
  })}</ul></div>`}</section>`;
});
export {
  Page as default
};
