import { DataEvent, SpanEvent, StartEvent } from '../event/Event';
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
export const processSpan = (event: SpanEvent): ChartLimits => {
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
        throw new Error('All data must have the defined groups');
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
        throw new Error('All data must have the selected fields');
      }
      series[sid].data.push({ x: event.timestamp, y: event[field] });
    }
  }

  return Object.values(series);
};
