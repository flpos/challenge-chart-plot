export const parseSnakeCase = (s: string): string => {
  return s
    .split('_')
    .map((s) => {
      const st = `${s[0].toUpperCase()}${s.slice(1)}`;
      return st;
    })
    .join(' ');
};
