import * as universal from '../entries/pages/_slug_/_layout.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/[slug]/+layout.ts";
export const imports = ["_app/immutable/nodes/2.f26e032b.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.eed0e94f.js","_app/immutable/chunks/paths.6b0db41f.js"];
export const stylesheets = ["_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
