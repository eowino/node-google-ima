/**
 * https://developers.google.com/interactive-media-ads/docs/sdks/html5/dai/reference/js/StreamEvent
 */
export enum StreamEvent {
    LOADED = 'loaded',
    AD_BREAK_STARTED = 'adBreakStarted',
    AD_BREAK_ENDED = 'adBreakEnded',
    AD_PERIOD_STARTED = 'adPeriodStarted',
    AD_PERIOD_ENDED = 'adPeriodEnded',
    AD_PROGRESS = 'adProgress',
    CUEPOINTS_CHANGED = 'cuepointsChanged',
    CLICK = 'click',
    ERROR = 'error',
    STARTED = 'started',
    FIRST_QUARTILE = 'firstquartile',
    MIDPOINT = 'midpoint',
    STREAM_INITIALIZED = 'streamInitialized',
    THIRD_QUARTILE = 'thirdquartile',
    COMPLETE = 'complete',
    SKIPPABLE_STATE_CHANGED = 'skippableStateChanged',
    SKIPPED = 'skip',
    VIDEO_CLICKED = 'videoClicked'
}
