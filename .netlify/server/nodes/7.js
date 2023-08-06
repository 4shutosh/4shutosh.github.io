

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.a208f62d.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js","_app/immutable/chunks/siteConfig.c6077b82.js"];
export const stylesheets = [];
export const fonts = [];
