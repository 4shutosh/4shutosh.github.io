import { error } from "console";
import { g as getWritings } from "../../../chunks/utils.js";
async function load({ params }) {
  const { slug } = params;
  const writing = getWritings().find((post) => post.path === slug);
  if (!writing) {
    throw error(404, "Blog not found!");
  }
  return {
    post: writing
  };
}
export {
  load
};
