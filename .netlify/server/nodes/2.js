import * as universal from '../entries/pages/_slug_/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+layout.ts";
export const imports = ["_app/immutable/nodes/2.feae56f3.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js","_app/immutable/chunks/paths.9d6c7960.js"];
export const stylesheets = ["_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
