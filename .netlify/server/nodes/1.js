

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.75a7f7e7.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.eed0e94f.js","_app/immutable/chunks/stores.354827e7.js","_app/immutable/chunks/singletons.736a64b7.js","_app/immutable/chunks/paths.02855f8b.js"];
export const stylesheets = [];
export const fonts = [];
