import * as server from '../entries/pages/_slug_/_page.server.js';

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_slug_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/[slug]/+page.server.js";
export const imports = ["_app/immutable/nodes/6.b6e78118.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.eed0e94f.js"];
export const stylesheets = [];
export const fonts = [];
