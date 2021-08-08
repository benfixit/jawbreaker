/**
 * Filter function
 * @param input
 * @param predicate
 * @returns
 */
const filter = <Input, Output extends Input>(
  input: Input[],
  predicate: (value: Input, index?: number, input?: Input[]) => value is Output
): Output[] => {
  let result: Output[] = [];

  for (let i = 0; i < input.length; i++) {
    if (predicate(input[i], i, input)) {
      result.push(input[i] as Output);
    }
  }

  return result;
};

export default filter;
