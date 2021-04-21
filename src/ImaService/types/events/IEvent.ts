import { StreamEvent } from '../../enums';

export interface IEvent<T extends StreamEvent = StreamEvent> {
    type: T;
    defaultPrevented: boolean;
    target: any;
    getAd: () => object | null;
    getStreamData: () => object;
}
