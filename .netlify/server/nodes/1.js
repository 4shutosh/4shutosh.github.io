

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.04a58bc6.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js","_app/immutable/chunks/stores.f4bc4869.js","_app/immutable/chunks/singletons.40871537.js","_app/immutable/chunks/paths.9d6c7960.js"];
export const stylesheets = [];
export const fonts = [];
