export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","css/main.ff01dd03.chunk.css","css/main.ff01dd03.chunk.css.map","favicon.png","js/2.6dd9234e.chunk.js","js/2.6dd9234e.chunk.js.LICENSE.txt","js/2.6dd9234e.chunk.js.map","js/3.7c16fd6c.chunk.js","js/3.7c16fd6c.chunk.js.map","js/main.3f926045.chunk.js","js/main.3f926045.chunk.js.map","js/runtime-main.20de2b5f.js","js/runtime-main.20de2b5f.js.map"]),
	mimeTypes: {".css":"text/css",".map":"application/json",".png":"image/png",".js":"application/javascript",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-cd9cd160.js","imports":["_app/immutable/start-cd9cd160.js","_app/immutable/chunks/index-24eae789.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "blog",
				pattern: /^\/blog\/?$/,
				names: [],
				types: [],
				path: "/blog",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
