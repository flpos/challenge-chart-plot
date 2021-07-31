/**
 * The basic data, common to all events.
 */
export interface Event {
  type: 'start' | 'span' | 'data' | 'stop';
  timestamp: number;
}

/**
 * Describes the start of a serie of data
 * @example
 * {
 *  type 'start',
 *  timestamp: 1519780251293,
 *  select: [
 *      'min_response_time',
 *      'max_response_time'
 *  ],
 *  group: [
 *      'os',
 *      'browser'
 *  ]
 * }
 */
export interface StartEvent extends Event {
  type: 'start';
  select: Array<string>;
  group: Array<string>;
}

/**
 * Defines the time range of the data
 * @example
 * {
 *  type: 'span',
 *  timestamp: 1519780251293,
 *  begin: 1519780251293,
 *  end: 1519780260201
 * }
 */
export interface SpanEvent extends Event {
  type: 'span';
  begin: number;
  end: number;
}

/**
 * Indicates the end of the series
 * @example
 * {type: 'stop', timestamp: 1519780251293}
 */
export interface StopEvent extends Event {
  type: 'stop';
}

/**
 * Object that holds the data and the group of the serie
 * The group and data names are defined by the properties
 * and must match the data of {@link StartEvent}'s select and group values
 * @example
 * {
 *  type: 'data',
 *  timestamp: 1519780251000,
 *  os: 'linux',
 *  browser: 'chrome',
 *  min_response_time: 0.1,
 *  max_response_time: 1.3
 * }
 */
export interface DataEvent extends Event {
  type: 'data';
  [k: string]: string | number;
}
