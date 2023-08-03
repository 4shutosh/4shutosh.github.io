

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.8c9a5d48.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.7f8a6d06.js"];
export const stylesheets = [];
export const fonts = [];
