export const eventStringParse = (
  text: string
): Array<Record<string, string | number>> => {
  const lines = text.split('\n');
  return lines.map((line) => {
    // eslint-disable-next-line no-eval
    return eval(`(${line})`);
  });
};
