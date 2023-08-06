import * as universal from '../entries/pages/writings/_layout.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/writings/+layout.ts";
export const imports = ["_app/immutable/nodes/4.0360a376.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js","_app/immutable/chunks/paths.eddb4e1f.js"];
export const stylesheets = ["_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
