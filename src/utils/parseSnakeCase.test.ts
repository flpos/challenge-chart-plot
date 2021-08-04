import { parseSnakeCase } from './parseSnakeCase';

describe('parseString utility function', () => {
  it('parses snake_case', () => {
    const input = 'snake_case';
    const result = parseSnakeCase(input);
    expect(result).toBe('Snake Case');
  });
});
