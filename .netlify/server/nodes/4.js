

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.bd17e20a.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.eed0e94f.js","_app/immutable/chunks/paths.02855f8b.js"];
export const stylesheets = ["_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
