

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.66e7293a.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.7f8a6d06.js","_app/immutable/chunks/stores.6143992d.js","_app/immutable/chunks/singletons.e4e0acb7.js","_app/immutable/chunks/paths.2ca0f4f7.js"];
export const stylesheets = [];
export const fonts = [];
