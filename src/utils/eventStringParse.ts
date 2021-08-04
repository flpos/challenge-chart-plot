import { Event } from '../event/Event';

export const eventStringParse = (text: string): Array<Event> => {
  const lines = text.split('\n');
  return lines.map((line) => {
    // eslint-disable-next-line no-eval
    return eval(`(${line})`);
  });
};
