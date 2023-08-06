import { c as create_ssr_component } from "../../../chunks/ssr.js";
/* empty css                                                        */const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main class="flex flex-col w-screen px-6 sm:px-10 md:px-10 lg:px-10">${slots.default ? slots.default({}) : ``}</main>`;
});
export {
  Layout as default
};
