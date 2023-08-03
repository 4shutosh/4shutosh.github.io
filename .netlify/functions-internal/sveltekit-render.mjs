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
		client: {"start":"_app/immutable/entry/start.98ffc4df.js","app":"_app/immutable/entry/app.ebaf0793.js","imports":["_app/immutable/entry/start.98ffc4df.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/singletons.e4e0acb7.js","_app/immutable/chunks/paths.2ca0f4f7.js","_app/immutable/entry/app.ebaf0793.js","_app/immutable/chunks/scheduler.4eff0beb.js","_app/immutable/chunks/index.7f8a6d06.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/6.js'))
		],
		routes: [
			{
				id: "/[slug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
