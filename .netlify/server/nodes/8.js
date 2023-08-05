

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.6d31e366.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.eed0e94f.js","_app/immutable/chunks/siteConfig.c6077b82.js"];
export const stylesheets = [];
export const fonts = [];
