import { c as create_ssr_component, s as subscribe, a as add_attribute, v as validate_component } from "../../chunks/ssr.js";
/* empty css                                                     */import { p as page } from "../../chunks/stores.js";
const tailwind = "";
const css = {
  code: ".burger.svelte-h7dobd.svelte-h7dobd.svelte-h7dobd{transition:opacity 300ms ease;border:0;background:transparent;width:40px;height:40px;position:relative}.burger.svelte-h7dobd svg.svelte-h7dobd.svelte-h7dobd{transform:translate(-50%, -50%) scale(1);top:50%;left:50%;opacity:1;transition:opacity 300ms ease, transform 300ms ease}.menu.svelte-h7dobd.svelte-h7dobd.svelte-h7dobd{padding:0 28px 0 4px;margin:0;padding-top:24px;width:100%;height:100vh;z-index:1000;opacity:0;left:0;transition:opacity 300ms ease, transform 300ms ease}.menu.svelte-h7dobd li.svelte-h7dobd.svelte-h7dobd{transform:translateX(-16px);opacity:0;transition:opacity 300ms ease, transform 300ms ease, width 300ms ease, border-color 300ms ease;width:0px;white-space:nowrap}.menuRendered.svelte-h7dobd.svelte-h7dobd.svelte-h7dobd{opacity:1}.menuRendered.svelte-h7dobd li.svelte-h7dobd.svelte-h7dobd{width:100%;--tw-border-opacity:1;border-color:rgb(229 231 235 / var(--tw-border-opacity))}.svelte-h7dobd.svelte-h7dobd.svelte-h7dobd:is(.dark .menuRendered li){--tw-border-opacity:1;border-color:rgb(75 85 99 / var(--tw-border-opacity))}.menuRendered.svelte-h7dobd li.svelte-h7dobd.svelte-h7dobd{transform:translateX(0);opacity:1}.menu.svelte-h7dobd>.svelte-h7dobd+.svelte-h7dobd{margin-top:24px}@keyframes svelte-h7dobd-grow{0%{height:0px}}",
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
  return `<div class="ml-[-0.60rem] md:hidden svelte-h7dobd"><button class="burger visible svelte-h7dobd" aria-label="Toggle menu" type="button">${`<svg class="absolute h-5 w-5 text-gray-900 dark:text-gray-100 svelte-h7dobd" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 7.5H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svelte-h7dobd"></path><path d="M2.5 12.5H17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="svelte-h7dobd"></path></svg>`}</button> ${``} </div>`;
});
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
    "hidden rounded-lg p-1 transition-all sm:px-3 md:inline-block text-colorOnSurface dark:text-textBodyDark hover:text-colorSurface dark:hover:text-colorSurfaceDark hover:bg-colorOnSurface dark:hover:bg-colorOnSurfaceDark",
    isActive ? "font-regular" : ""
  ].join(" ").trim()}"${add_attribute("href", href, 0)}><span class="capsize">${slots.default ? slots.default({}) : ``}</span></a>`;
});
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let isDark = typeof localStorage !== "undefined" && localStorage.getItem("theme") === "dark";
  return `${$$result.head += `<!-- HEAD_svelte-1no56uq_START --><script data-svelte-h="svelte-1bluw7m">if (typeof localStorage !== "undefined") {
			if (localStorage.getItem("theme") === "dark") {
				document.documentElement.classList.add("dark");
			}
		}<\/script><!-- HEAD_svelte-1no56uq_END -->`, ""} <nav class="relative flex w-full items-end justify-end border-gray-200 mx-4 bg-colorSurface bg-opacity-60 py-1 sm:py-2 text-colorOnSurface font-catamaran dark:bg-colorSurfaceDark"> <div class="flex flex-col w-full items-start ml-1">${validate_component(MobileMenu, "MobileMenu").$$render($$result, {}, {}, {})}</div> <ul class="flex items-center space-x-9"><li>${validate_component(NavLink, "NavLink").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `home`;
    }
  })}</li> <li>${validate_component(NavLink, "NavLink").$$render($$result, { href: "/about" }, {}, {
    default: () => {
      return `about`;
    }
  })}</li> <li>${validate_component(NavLink, "NavLink").$$render($$result, { href: "/writings" }, {}, {
    default: () => {
      return `writings`;
    }
  })}</li></ul> <div class="flex items-center space-x-4">    <button aria-label="Toggle Dark Mode" class="sm:ml-12 flex h-9 w-9 items-center justify-center rounded-lg bg-colorSurface ring-colorOnSurface transition-all hover:ring-2 dark:bg-colorSurfaceDark dark:ring-colorOnSurfaceDark">${isDark ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="h-5 w-5 text-gray-100 dark:text-yellow-100"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728
						0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>` : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" class="w-5 h-5 text-gray-800 dark:text-gray-200"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`}</button></div></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col w-screen min-h-screen bg-colorSurface dark:bg-colorSurfaceDark p-0 m-0 items-center"><div class="flex flex-row w-full sm:w-full md:w-4/5 lg:w-3/5">${validate_component(Nav, "Nav").$$render($$result, {}, {}, {})}</div> <main class="flex flex-grow w-full sm:w-full md:w-4/5 lg:w-3/5">${slots.default ? slots.default({}) : ``}</main></div>`;
});
export {
  Layout as default
};
