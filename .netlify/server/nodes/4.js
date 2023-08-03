

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.ae42cb43.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.7f8a6d06.js","_app/immutable/chunks/paths.2ca0f4f7.js"];
export const stylesheets = ["_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
