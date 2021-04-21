import { StreamFormat } from '../../enums';

/**
 * https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/reference/js/StreamRequest.html
 */
export interface IStreamRequest {
    /**
     * You can override a limited set of ad tag parameters on your stream request. Supply targeting parameters to your stream provides more information. You can use the dai-ot and dai-ov parameters for stream variant preference. See Override Stream Variant Parameters for more information.
     */
    adTagParameters: object;
    /**
     * The stream request API key. It's configured through the DFP Admin UI and provided to the publisher to unlock their content. It verifies the applications that are attempting to access the content.
     */
    apiKey: string;
    /**
     * The stream request authorization token. Used in place of the API key for stricter content authorization. The publisher can control individual content streams authorizations based on this token.
     */
    authToken: string;
    /**
     * The stream format to request. HLS by default.
     */
    format: StreamFormat;
    /**
     * The ID to be used to debug the stream with the stream activity monitor. This is used to provide a convenient way to allow publishers to find a stream log in the stream activity monitor tool.
     */
    streamActivityMonitorId: string;
}
