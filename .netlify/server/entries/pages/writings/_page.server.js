import "console";
import { g as getWritings } from "../../../chunks/utils.js";
async function load({ params }) {
  const writings = getWritings();
  return {
    posts: writings
  };
}
export {
  load
};
