import { DataValidationError } from '../errors/DataValidationError';
import { SerieValidationError } from '../errors/SerieValidationError';
import { DataEvent, Event, SpanEvent, StartEvent } from '../event/Event';
import { parseSnakeCase } from '../utils/parseSnakeCase';

export type ChartData = {
  id: string | number;
  data: Array<{
    x: number | string | Date;
    y: number | string | Date;
  }>;
};

export type ChartLimits = {
  type: 'linear';
  min: number | 'auto';
  max: number | 'auto';
};

/**
 * Receive an event, transforms it to the axis definition.
 * @param event The span event
 * @returns the object tha will be used on the chartLib.
 */
export const processSpan = (event?: SpanEvent): ChartLimits => {
  if (!event) {
    return { type: 'linear', min: 'auto', max: 'auto' };
  }
  return { type: 'linear', min: event.begin, max: event.end };
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
  const startEvent = events.find((e) => e.type === 'start');
  const stopEvent = events.find((e) => e.type === 'stop');
  const spanEvent = events.find((e) => e.type === 'span');

  if (!startEvent || !stopEvent) {
    throw new SerieValidationError('Missing start or stop event');
  }

  if (stopEvent.timestamp < startEvent.timestamp) {
    throw new SerieValidationError(
      "Start event's timestamp smaller than stop event's timestamp"
    );
  }

  const chartLimits = processSpan(spanEvent as SpanEvent);
  const chartData = getChartData(
    startEvent as StartEvent,
    events.filter((e) => e.type === 'data') as Array<DataEvent>
  );

  return { chartLimits, chartData };
};
