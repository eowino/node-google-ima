import { ICuePoint } from './ICuePoint';
import { IStreamEvent } from './IStreamEvent';
import { ILiveStreamRequestConstructor } from './LiveStreamRequest';
import { IStreamManagerConstructor } from './StreamManager';
import { IStreamRequest } from './StreamRequest';
import { IVODStreamRequestConstructor } from './VODStreamRequest';

export interface IIma {
    dai: {
        api: {
            StreamManager: IStreamManagerConstructor;
            LiveStreamRequest: ILiveStreamRequestConstructor;
            VODStreamRequest: IVODStreamRequestConstructor;
            StreamEvent: IStreamEvent;
            CuePoint: ICuePoint;
            StreamRequest: IStreamRequest;
        };
    };
}
