import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.9836eadb.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js","_app/immutable/chunks/stores.f4bc4869.js","_app/immutable/chunks/singletons.40871537.js","_app/immutable/chunks/paths.9d6c7960.js"];
export const stylesheets = ["_app/immutable/assets/0.1e766ee7.css","_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
