import { ICuePoint } from '../ICuePoint';
import { IStreamRequest } from '../StreamRequest';

/**
 * https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/reference/js/StreamManager.html
 */
export interface IStreamManager {
    /**
     * Returns the content time without ads for a given stream time. Returns the given stream time for live streams.
     */
    contentTimeForStreamTime: (streamTime: number) => number;
    /**
     * Passes in a dictionary of processed metadata. The dictionary expects the key 'TXXX' with the user-defined metadata string as the value. If your player provides raw metadata, call StreamManager.processMetadata instead.
     */
    onTimedMetadata: (metadata: object) => void;
    /**
     * Returns the previous cue point for the given stream time. Returns null if no such cue point exists. This is used to implement features like snap back, and called when the publisher detects that the user seeked in order to return the user to an ad break.
     */
    previousCuePointForStreamTime(streamTime: number): ICuePoint | null;
    /**
     * Processes timed metadata for live streams. Use if your video player provides unparsed metadata along with timestamps, otherwise, call StreamManager.onTimedMetadata.
     */
    processMetadata: (type: string, data: Uint8Array | string, timestamp: number) => void;
    /**
     * Replaces all of the ad tag parameters used for upcoming ad requests for a live stream.
     */
    replaceAdTagParameters: (adTagParameters: object) => void;
    /**
     * Requests a stream to be loaded using provided stream parameters.
     */
    requestStream: (streamRequest: IStreamRequest) => void;
    /**
     * Resets the stream manager and removes any continuous polling.
     */
    reset: () => void;
    /**
     * Sets the ads click through element. This element is used as the click or tap receiver while an ad is playing and may result in navigation away from the current page. This is now deprecated, and an adUiElement should be passed in to the StreamManager instead. If an adUiElement is given to the StreamManager constructor, this method becomes a no-op.
     */
    setClickElement: (clickElement: HTMLElement) => void;
    /**
     * Returns the stream time with ads for a given content time. Returns the given content time for live streams.
     */
    streamTimeForContentTime: (contentTime: number) => number;
    /**
     * Subscribe to events
     */
    addEventListener: (event: string[] | string, handler: (event: any) => void, options?: any) => void;
    /**
     * Unsubscribe from events
     */
    removeEventListener: (event: string[] | string, handler: (event: any) => void) => void;
}
