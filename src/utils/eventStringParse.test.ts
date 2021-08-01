import { eventStringParse } from './eventStringParse';

describe('eventStringParse', () => {
  it('parses a basic object', () => {
    const event = '{a: 1, b: "2"}';
    const expected: Array<Record<string, string | number>> = [{ a: 1, b: '2' }];

    const result = eventStringParse(event);
    expect(result).toEqual(expected);
  });

  it('parses a start event', () => {
    const event =
      "{type: 'start', timestamp: 1519780251293, select: ['min_response_time','max_response_time'], group: ['os','browser']}";

    const expected = {
      type: 'start',
      timestamp: 1519780251293,
      select: ['min_response_time', 'max_response_time'],
      group: ['os', 'browser'],
    };

    const result = eventStringParse(event);

    expect(result).toEqual([expected]);
  });
});
