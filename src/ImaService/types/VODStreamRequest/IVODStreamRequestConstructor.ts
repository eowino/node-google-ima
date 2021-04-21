import { IVODStreamRequest } from './IVODStreamRequest';

/**
 * https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/reference/js/VODStreamRequest
 */
export interface IVODStreamRequestConstructor {
    /**
     * Throws when input parameters do not fulfil requirements.
     */
    new (vodStreamRequest?: Partial<IVODStreamRequest>): IVODStreamRequest;
}
