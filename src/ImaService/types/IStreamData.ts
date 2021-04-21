import { ISubtitle } from '.';

export interface IStreamData {
    manifestFormat: 'hls';
    streamId: string;
    subtitles: ISubtitle[];
    url: string;
}
