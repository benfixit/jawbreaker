import isArray from "./isArray";

/**
 * Creates an array with all the falsey values removed. The values false, null, 0, "", undefined, and NaN are
 * falsey.
 * @param array The array to be compact
 * @returns Returns the new array of filtered values
 */
const compact = <T>(
  array: Array<T | 0 | false | "" | undefined> | null | undefined
): T[] => {
  const result: T[] = [];
  if (!isArray(array)) {
    return result;
  }

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i] as T);
    }
  }

  return result;
};

export default compact;
