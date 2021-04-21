import { StreamEvent } from '../enums';

import { IEvent } from './events';

/**
 * https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/reference/js/StreamEvent
 */
export interface IStreamEvent {
    new <T extends StreamEvent>(type: T, b: any, c: any): IEvent<T>;
    Type: typeof StreamEvent;
}
