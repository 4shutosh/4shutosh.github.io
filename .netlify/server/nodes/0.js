import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.a9ab0d22.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js","_app/immutable/chunks/stores.24ba9c84.js","_app/immutable/chunks/singletons.e15c63f0.js","_app/immutable/chunks/paths.eddb4e1f.js"];
export const stylesheets = ["_app/immutable/assets/0.1e766ee7.css","_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
