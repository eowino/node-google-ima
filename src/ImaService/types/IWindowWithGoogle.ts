import { IGoogle } from './IGoogle';

export interface IWindowWithGoogle extends Window {
    google: IGoogle;
}
