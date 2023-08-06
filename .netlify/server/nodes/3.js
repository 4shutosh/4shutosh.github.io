

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.dee320ba.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js","_app/immutable/chunks/paths.eddb4e1f.js"];
export const stylesheets = ["_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
