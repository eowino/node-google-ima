import puppeteer from 'puppeteer';

import { ILiveStreamRequest, ILoadedEvent, IStreamManager, IWindowWithGoogle } from './ImaService/types';
import { PAGE } from './PAGE';

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    // Load IMA SDK onto page
    await page.setContent(PAGE);

    const playbackUrl = await page.evaluate(async () => {
        // IMA SDK needs access to cookies
        // This handles the error: Failed to read the 'cookie' property from 'Document': Access is denied for this document
        if (!(document as any).__defineGetter__) {
            Object.defineProperty(document, 'cookie', {
                get: function () { return '' },
                set: function () { return true },
            });
        } else {
            (document as any).__defineGetter__("cookie", function () { return ''; });
            (document as any).__defineSetter__("cookie", function () { });
        }

        // https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/testing-dai
        const EXAMPLE_ASSET_KEY = 'sN_IYUG8STe1ZzhIIE_ksA';
        let streamManager: IStreamManager;

        function getPlaybackUrl(window: IWindowWithGoogle, assetKey: string): Promise<string> {
            const { google } = window;
            const videoEl = document.createElement('video');
            const adContainer = document.createElement('div');
            streamManager = new google.ima.dai.api.StreamManager(videoEl, adContainer);

            return new Promise((resolve, reject) => {
                streamManager.addEventListener(google.ima.dai.api.StreamEvent.Type.LOADED, (event: ILoadedEvent) => {
                    resolve(event.getStreamData().url);
                });

                streamManager.addEventListener(google.ima.dai.api.StreamEvent.Type.ERROR, () => {
                    reject('Error loading stream');
                });

                requestLiveStream(window, { assetKey });
            })
        }

        function requestLiveStream(window: IWindowWithGoogle, params: Partial<ILiveStreamRequest>): void {
            const { google } = window;
            const { adTagParameters, apiKey, assetKey, authToken } = params;
            const streamRequest = new google.ima.dai.api.LiveStreamRequest({
                assetKey,
                apiKey,
                authToken,
                adTagParameters
            });

            streamManager.requestStream(streamRequest);
        }

        // Executed in the page
        return getPlaybackUrl((window as unknown) as IWindowWithGoogle, EXAMPLE_ASSET_KEY);
    });

    console.log('Playback URL:', playbackUrl);

    // Cleanup
    await browser.close();
})();
