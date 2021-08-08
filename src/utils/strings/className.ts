import { compact } from "../arrays";
import { Nullable } from "../typings";
/**
 * Joins an array of classnames and returns a string
 * @param classes
 * @returns
 */
const className = (classes: Nullable<string>[]): string => {
  return compact(classes).join(" ");
};

export default className;
