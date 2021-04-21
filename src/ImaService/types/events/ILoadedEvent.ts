import { StreamEvent } from '../../enums';
import { IStreamData } from '../IStreamData';

import { IEvent } from './IEvent';

export interface ILoadedEvent extends IEvent<StreamEvent.LOADED> {
    getStreamData(): IStreamData;
}
