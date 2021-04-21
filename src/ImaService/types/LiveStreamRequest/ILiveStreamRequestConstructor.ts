import { ILiveStreamRequest } from './ILiveStreamRequest';

/** https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/reference/js/LiveStreamRequest */
export interface ILiveStreamRequestConstructor {
    /**
     * Throws when input parameters do not fulfil requirements.
     */
    new (liveStreamRequest?: Partial<ILiveStreamRequest>): ILiveStreamRequest;
}
