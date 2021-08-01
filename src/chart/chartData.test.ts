import { DataValidationError } from '../errors/DataValidationError';
import { SerieValidationError } from '../errors/SerieValidationError';
import {
  DataEvent,
  Event,
  SpanEvent,
  StartEvent,
  StopEvent,
} from '../event/Event';
import {
  ChartData,
  ChartLimits,
  getChartData,
  processEvents,
  processSpan,
} from './chartData';

describe('chartData functions', () => {
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
    const noSpanExpected: ChartLimits = {
      type: 'linear',
      min: 'auto',
      max: 'auto',
    };

    const result = processSpan(input);
    expect(result).toEqual(expected);

    const noSpanResult = processSpan();
    expect(noSpanResult).toEqual(noSpanExpected);
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
    expect(result).toEqual(expected);
  });

  describe('data generation', () => {
    it('must have start and stop events', () => {
      const startEvent: Event = {
        type: 'start',
        timestamp: 1,
      };
      const stopEvent: Event = {
        type: 'stop',
        timestamp: 4,
      };
      expect(() => processEvents([startEvent])).toThrow(SerieValidationError);
      expect(() => processEvents([stopEvent])).toThrow(SerieValidationError);
    });

    it('expects that start comes before stop (timestamp based)', () => {
      const startEvent: Event = {
        type: 'start',
        timestamp: 5,
      };
      const stopEvent: Event = {
        type: 'stop',
        timestamp: 4,
      };
      expect(() => {
        processEvents([startEvent, stopEvent]);
      }).toThrow(SerieValidationError);
    });

    it('expect data has the fields defined in StartEvent', () => {
      const startEvent: StartEvent = {
        type: 'start',
        timestamp: 1,
        group: ['os'],
        select: ['browser'],
      };

      const stopEvent: StopEvent = {
        type: 'stop',
        timestamp: 4,
      };

      let event: DataEvent = {
        type: 'data',
        timestamp: 3,
      };

      expect(() => {
        processEvents([startEvent, event, stopEvent]);
      }).toThrow(DataValidationError);

      event['os'] = 'windows';
      expect(() => {
        processEvents([startEvent, event, stopEvent]);
      }).toThrow(DataValidationError);
    });
  });
});

export {};
