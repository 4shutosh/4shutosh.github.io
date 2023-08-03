import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.2a365dd6.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.7f8a6d06.js","_app/immutable/chunks/stores.6143992d.js","_app/immutable/chunks/singletons.e4e0acb7.js","_app/immutable/chunks/paths.2ca0f4f7.js"];
export const stylesheets = ["_app/immutable/assets/0.f2f2ca07.css","_app/immutable/assets/MobileMenu.065fe549.css"];
export const fonts = [];
