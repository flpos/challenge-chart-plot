import { DataEvent, SpanEvent, StartEvent } from '../event/Event';
import { ChartData, ChartLimits, getChartData, processSpan } from './chartData';

describe('chartData functions', () => {
  describe('handling start event', () => {
    it('gets the min and max values', () => {
      const input: SpanEvent = {
        type: 'span',
        begin: 123,
        end: 456,
        timestamp: 789,
      };
      const expected: ChartLimits = {
        type: 'linear',
        min: 123,
        max: 456,
      };

      const result = processSpan(input);
      expect(result.type).toBe(expected.type);
      expect(result.min).toBe(expected.min);
      expect(result.max).toBe(expected.max);
    });

    it('generates the series', () => {
      const startEvent: StartEvent = {
        type: 'start',
        timestamp: 1519780251293,
        select: ['min_response_time', 'max_response_time'],
        group: ['os', 'browser'],
      };

      const dataEvents: Array<DataEvent> = [
        {
          type: 'data',
          timestamp: 1519780251000,
          os: 'linux',
          browser: 'chrome',
          min_response_time: 0.1,
          max_response_time: 1.3,
        },
      ];

      const expected: Array<ChartData> = [
        {
          id: 'Linux Chrome Min Response Time',
          data: [{ x: 1519780251000, y: 0.1 }],
        },
        {
          id: 'Linux Chrome Max Response Time',
          data: [{ x: 1519780251000, y: 1.3 }],
        },
      ];

      const result = getChartData(startEvent, dataEvents);
      expectArrayEquivalence<ChartData>(result, expected);
    });
  });
});

const expectArrayEquivalence = <T>(actual: T[], expected: T[]) => {
  expect(actual).toEqual(expect.arrayContaining(expected));
  expect(expected).toEqual(expect.arrayContaining(actual));
};

export {};
