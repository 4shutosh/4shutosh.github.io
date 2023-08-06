

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.9ff95626.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js","_app/immutable/chunks/stores.24ba9c84.js","_app/immutable/chunks/singletons.e15c63f0.js","_app/immutable/chunks/paths.eddb4e1f.js"];
export const stylesheets = [];
export const fonts = [];
