import { error } from "console";
import { getWritings } from "../../utils/utils.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const { slug } = params;
	const writing = getWritings().find((post) => post.path === slug);

	if (!writing) {
		throw error(404, "Blog not found!");
	}

	return {
		post: writing,
	};
}
