import { IStreamManager } from './IStreamManager';

/**
 * https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/reference/js/StreamManager.html
 */
export interface IStreamManagerConstructor {
    /**
     * Throws when input parameters do not fulfil requirements.
     */
    new (videoElement: HTMLVideoElement, adUIElement?: HTMLElement, uiSettings?: any): IStreamManager;
}
