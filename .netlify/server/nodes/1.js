

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0e086b74.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.eed0e94f.js","_app/immutable/chunks/stores.6e0fc1f2.js","_app/immutable/chunks/singletons.e130ee74.js","_app/immutable/chunks/paths.6b0db41f.js"];
export const stylesheets = [];
export const fonts = [];
