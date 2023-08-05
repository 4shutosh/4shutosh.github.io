import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.64c3da3e.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.eed0e94f.js","_app/immutable/chunks/stores.6e0fc1f2.js","_app/immutable/chunks/singletons.e130ee74.js","_app/immutable/chunks/paths.6b0db41f.js"];
export const stylesheets = ["_app/immutable/assets/0.a55ccfda.css","_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
