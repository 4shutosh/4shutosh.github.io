import { c as create_ssr_component, g as getContext, a as subscribe, b as add_attribute, v as validate_component } from "../../_app/immutable/chunks/index-bbd1eb37.js";
const tailwind = "";
const MobileMenu_svelte_svelte_type_style_lang = "";
const css = {
  code: ".burger.svelte-1ojfx0l.svelte-1ojfx0l.svelte-1ojfx0l{transition:opacity 300ms ease;border:0;background:transparent;width:40px;height:40px;position:relative}.burger.svelte-1ojfx0l svg.svelte-1ojfx0l.svelte-1ojfx0l{transform:translate(-50%, -50%) scale(1);top:50%;left:50%;opacity:1;transition:opacity 300ms ease, transform 300ms ease}.menu.svelte-1ojfx0l.svelte-1ojfx0l.svelte-1ojfx0l{padding:0 28px 0 4px;margin:0;padding-top:24px;width:100%;height:100vh;z-index:1000;opacity:0;left:0;transition:opacity 300ms ease, transform 300ms ease}.menu.svelte-1ojfx0l li.svelte-1ojfx0l.svelte-1ojfx0l{transform:translateX(-16px);opacity:0;transition:opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;width:0px;white-space:nowrap}.menuRendered.svelte-1ojfx0l.svelte-1ojfx0l.svelte-1ojfx0l{opacity:1}.menuRendered.svelte-1ojfx0l li.svelte-1ojfx0l.svelte-1ojfx0l{width:100%;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.dark .menuRendered.svelte-1ojfx0l li.svelte-1ojfx0l.svelte-1ojfx0l{--tw-border-opacity:1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.menuRendered.svelte-1ojfx0l li.svelte-1ojfx0l.svelte-1ojfx0l{transform:translateX(0);opacity:1}.menu.svelte-1ojfx0l>.svelte-1ojfx0l+.svelte-1ojfx0l{margin-top:24px}@-webkit-keyframes svelte-1ojfx0l-grow{0%{height:0px}}@keyframes svelte-1ojfx0l-grow{0%{height:0px}}",
  map: null
};
const MobileMenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  {
    {
      {
        setTimeout(
          () => {
          },
          300
        );
      }
    }
  }
  return `<div class="${"ml-[-0.60rem] md:hidden"}"><button class="${"burger visible svelte-1ojfx0l"}" aria-label="${"Toggle menu"}" type="${"button"}">${`<svg class="${"absolute h-5 w-5 text-gray-900 dark:text-gray-100 svelte-1ojfx0l"}" width="${"20"}" height="${"20"}" viewBox="${"0 0 20 20"}" fill="${"none"}"><path d="${"M2.5 7.5H17.5"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path><path d="${"M2.5 12.5H17.5"}" stroke="${"currentColor"}" stroke-width="${"1.5"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}"></path></svg>`}</button>
	${``}
</div>`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const NavLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isActive;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { href } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  isActive = $page.url.pathname === $$props.href;
  $$unsubscribe_page();
  return `<a class="${[
    "hidden rounded-lg p-1 text-gray-800 transition-all hover:bg-gray-200 sm:px-3 md:inline-block dark:text-gray-200 dark:hover:bg-gray-700",
    isActive ? "font-regular" : ""
  ].join(" ").trim()}"${add_attribute("href", href, 0)}><span class="${"capsize"}">${slots.default ? slots.default({}) : ``}</span></a>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDark = false;
  if (typeof localStorage !== "undefined") {
    if (localStorage.theme === "dark" || !("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      isDark = true;
    }
  }
  return `<nav class="${"relative flex w-full items-end justify-end border-gray-200 mx-4 sm:mx-8 bg-gray-50 bg-opacity-60 py-1 sm:py-2 text-gray-900 font-catamaran dark:bg-gray-900"}">
	<div class="${"flex flex-col w-full items-start ml-1"}">${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})}</div>

	<ul class="${"flex items-center space-x-9"}"><li>${validate_component(NavLink, "NavLink").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `home`;
    }
  })}</li>
		<li>${validate_component(NavLink, "NavLink").$$render($$result, { href: "/about" }, {}, {
    default: () => {
      return `about`;
    }
  })}</li>
		<li>${validate_component(NavLink, "NavLink").$$render($$result, { href: "/blog" }, {}, {
    default: () => {
      return `blog`;
    }
  })}</li></ul>
	<div class="${"flex items-center space-x-4"}">
		
		
		
		<button aria-label="${"Toggle Dark Mode"}" class="${"sm:ml-12 flex h-9 w-9 items-center justify-center rounded-lg bg-gray-200 ring-gray-800 transition-all hover:ring-2 dark:bg-gray-800 dark:ring-yellow-100"}">${isDark ? `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" class="${"h-5 w-5 text-gray-100 dark:text-yellow-100"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728\n						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}"></path></svg>` : `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}" fill="${"none"}" stroke="${"currentColor"}" class="${"w-5 h-5 text-gray-800 dark:text-gray-200"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"}"></path></svg>`}</button></div></nav>`;
});
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex flex-col w-screen min-h-screen bg-gray-50 dark:bg-gray-900"}"><div class="${"flex flex-row"}">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div>
	<main class="${"flex flex-grow w-screen"}">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  _layout as default
};
