import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","admin/config.yml","admin/index.html","favicon.png"]),
	mimeTypes: {".yml":"text/yaml",".html":"text/html",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.c5fc57d2.js","app":"_app/immutable/entry/app.866b40fc.js","imports":["_app/immutable/entry/start.c5fc57d2.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/singletons.40871537.js","_app/immutable/chunks/paths.9d6c7960.js","_app/immutable/entry/app.866b40fc.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.065685ce.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/8.js'))
		],
		routes: [
			{
				id: "/writings",
				pattern: /^\/writings\/?$/,
				params: [],
				page: { layouts: [0,3,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
