import { User } from '../user';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserActionTypes, UserActions } from './users.action';


export interface UserState {
    user: User;
    showUserName: boolean;
}

const initialState: UserState = {
    user: null,
    showUserName: true
};

const getUserFeatureState = createFeatureSelector<UserState>('users');

// selector to return the boolean showUsername

export const getShowUserName = createSelector(
    getUserFeatureState,
    state => state.showUserName
);

export function usersReducer(state= initialState, action: UserActions): UserState {
    switch ( action.type) {
        case UserActionTypes.MaskUserName:
            return {
                ...state,
                showUserName: action.payLoad
            };
        default:
            return state;
    }
}
