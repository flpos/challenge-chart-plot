import { DataValidationError } from '../errors/DataValidationError';
import { SerieValidationError } from '../errors/SerieValidationError';
import {
  DataEvent,
  Event,
  SpanEvent,
  StartEvent,
  StopEvent,
} from '../event/Event';
import { parseSnakeCase } from '../utils/parseSnakeCase';

export type ChartData = {
  id: string | number;
  data: Array<{
    x: number | string | Date;
    y: number | string | Date;
  }>;
};

/**
 * Use the startEvent to iterate the dataEvents array to generate the series.
 * @param startEvent
 * @param events the data events
 * @returns the series of the chart
 */
export const getChartData = (
  startEvent: StartEvent,
  events: Array<DataEvent>
): Array<ChartData> => {
  const series: {
    [k: string]: ChartData;
  } = {};

  for (const event of events) {
    const groups = startEvent.group.map((groupName) => {
      const group = event[groupName];
      if (!group) {
        throw new DataValidationError('All data must have the defined groups');
      } else {
        return group;
      }
    });
    const generatedSelectors = startEvent.select.map((select) => {
      return [...groups, select];
    });
    for (const selector of generatedSelectors) {
      const sid = selector.join('_');
      const [field] = selector.slice(-1);
      if (!series[sid]) {
        series[sid] = {
          id: selector.map((s) => parseSnakeCase(`${s}`)).join(' '),
          data: [],
        };
      }
      if (!event[field]) {
        throw new DataValidationError('All data must have the selected fields');
      }
      series[sid].data.push({ x: event.timestamp, y: event[field] });
    }
  }

  return Object.values(series);
};

export const processEvents = (events: Array<Event>) => {
  const startEvent = events.find((e) => e.type === 'start') as StartEvent;
  const stopEvent = events.find((e) => e.type === 'stop') as StopEvent;
  const spanEvent = events.find((e) => e.type === 'span') as SpanEvent;

  if (!startEvent || !stopEvent) {
    throw new SerieValidationError('Missing start or stop event');
  }

  if (stopEvent.timestamp < startEvent.timestamp) {
    throw new SerieValidationError(
      "Start event's timestamp smaller than stop event's timestamp"
    );
  }

  const chartData = getChartData(
    startEvent,
    events.filter((e) => {
      return (
        e.type === 'data' &&
        e.timestamp >= spanEvent.begin &&
        e.timestamp <= spanEvent.end
      );
    }) as Array<DataEvent>
  );

  return { chartData };
};
