import { error } from "console";
import { getWritings } from "../../utils/utils.js";

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const writings = getWritings();
	return {
		posts: writings,
	};
}
