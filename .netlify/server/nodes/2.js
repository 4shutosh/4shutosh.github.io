import * as universal from '../entries/pages/_slug_/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+layout.ts";
export const imports = ["_app/immutable/nodes/2.1a1ad2df.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.7f8a6d06.js","_app/immutable/chunks/paths.2ca0f4f7.js"];
export const stylesheets = ["_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
