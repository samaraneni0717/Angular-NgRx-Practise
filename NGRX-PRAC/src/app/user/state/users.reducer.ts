import { User } from '../user';

export interface UserState {
    user: User;
    showUserName: boolean;
}
export function usersReducer(state, action): UserState {
    switch ( action.type) {
        case 'MASK_USER_NAME':
            return {
                ...state,
                showUserName: action.payLoad
            };
        default:
            return state;
    }
}
