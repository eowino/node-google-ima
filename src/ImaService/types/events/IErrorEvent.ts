import { StreamEvent } from '../../enums';

import { IEvent } from './IEvent';

export interface IErrorEvent extends IEvent<StreamEvent.ERROR> {
    getStreamData(): {
        errorMessage: string;
    };
}
