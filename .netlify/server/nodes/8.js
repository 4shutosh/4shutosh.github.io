import * as server from '../entries/pages/writings/_page.server.js';

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writings/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/writings/+page.server.js";
export const imports = ["_app/immutable/nodes/8.4a751729.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js","_app/immutable/chunks/siteConfig.c6077b82.js","_app/immutable/chunks/stores.f4bc4869.js","_app/immutable/chunks/singletons.40871537.js","_app/immutable/chunks/paths.9d6c7960.js","_app/immutable/chunks/formatDate.267b7529.js"];
export const stylesheets = [];
export const fonts = [];
