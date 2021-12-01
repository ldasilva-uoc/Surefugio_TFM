import { Action, createReducer, on } from "@ngrx/store";
import { Auth } from "src/app/shared/models/auth.model";
import { User } from "src/app/shared/models/user.model";
import * as userAction from "../actions/user.action";


export interface UserState {
    auth: User;
    loggedIn: boolean;
    protectora:boolean | undefined;
    error: string | null;
    pending: boolean;
}

export const initialState: UserState = {
    auth: new User(undefined,undefined,undefined),
    loggedIn: false,
    protectora:false,
    error: null,
    pending: false
};

const _userReducer = createReducer(
    initialState,
    on(userAction.login, (state) => ({
        ...state,
        loggedIn: false,
        error: null,
        pending: true,
    })),
    on(userAction.loginSuccess, (state, action) => ({
        ...state,
        auth: action.user,
        protectora: action.user.protectora,
        loggedIn: true,
        error: null,
        pending: false,
    })),
    on(userAction.loginFailure, (state, { payload }) => ({
        ...state,
        error:payload,
        loggedIn: false,
        pending: false,
    })),
    on(userAction.logout, () => initialState)
  );


export function userReducer(state: UserState | undefined, action: Action) {
    return _userReducer(state, action);
}
