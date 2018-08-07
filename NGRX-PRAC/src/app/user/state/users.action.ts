import { Action } from '@ngrx/store';

export enum UserActionTypes {
    MaskUserName = '[Users] Mask user name'
}

// build action creator

export class MaskUserName implements Action {
    readonly type = UserActionTypes.MaskUserName;

    constructor (public payLoad: boolean) {}
}

export type UserActions = MaskUserName;
