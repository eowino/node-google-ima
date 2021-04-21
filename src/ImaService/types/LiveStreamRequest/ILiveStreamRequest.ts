/** https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/reference/js/LiveStreamRequest */
export interface ILiveStreamRequest {
    /**
     * You can override a limited set of ad tag parameters on your stream request. Supply targeting parameters to your stream provides more information. You can use the dai-ot and dai-ov parameters for stream variant preference. See Override Stream Variant Parameters for more information.
     */
    adTagParameters: object;
    /**
     * The stream request API key. It's configured through the DFP Admin UI and provided to the publisher to unlock their content. It verifies the applications that are attempting to access the content.
     */
    apiKey: any;
    /**
     * This is used to determine which stream should be played. The live stream request asset key is an identifier which can be found in the DFP UI.
     */
    assetKey: string;
    /**
     * The stream request authorization token. Used in place of the API key for stricter content authorization. The publisher can control individual content streams authorizations based on this token.
     */
    authToken: any;
    /**
     * The stream format to request. HLS by default.
     */
    format: any;
    /**
     * The ID to be used to debug the stream with the stream activity monitor. This is used to provide a convenient way to allow publishers to find a stream log in the stream activity monitor tool
     */
    streamActivityMonitorId: any;
}
