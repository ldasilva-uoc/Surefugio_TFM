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
    auth: new User(undefined, undefined, undefined),
    loggedIn: false,
    protectora: false,
    error: null,
    pending: false,
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
    on(userAction.logout, (state) => ({
        ...state,
        loggedIn: false,
        error: null,
        pending: true,
    })),
    on(userAction.logoutConfirmation, () => initialState),



    on(userAction.signupUserProtectora, (state) => ({
        ...state,
        loggedIn: false,
        error: null,
        pending: true,
    })),
    on(userAction.signupSuccessProtectora, (state, action) => ({
        ...state,
        auth: action.user,
        protectora: action.user.protectora,
        loggedIn: false,
        error: null,
        pending: false,
    })),

    on(userAction.signupFailureProtectora, (state, { payload }) => ({
        ...state,
        error:payload,
        loggedIn: false,
        pending: false,
    })),

    on(userAction.registroProtectora, (state) => ({
        ...state,
        loggedIn: false,
        error: null,
        pending: true,
    })),
    on(userAction.registroProtectoraSuccess, (state) => ({
        ...state,
        loggedIn: false,
        error: null,
        pending: false,
    })),

    on(userAction.registroProtectoraFailure, (state, { payload }) => ({
        ...state,
        error:payload,
        loggedIn: false,
        pending: false,
    })),


    
    on(userAction.signupUserParticular, (state) => ({
        ...state,
        loggedIn: false,
        error: null,
        pending: true,
    })),
    on(userAction.signupSuccessParticular, (state, action) => ({
        ...state,
        auth: action.user,
        protectora: action.user.protectora,
        loggedIn: false,
        error: null,
        pending: false,
    })),

    on(userAction.signupFailureParticular, (state, { payload }) => ({
        ...state,
        error:payload,
        loggedIn: false,
        pending: false,
    })),

    on(userAction.registroParticular, (state) => ({
        ...state,
        loggedIn: false,
        error: null,
        pending: true,
    })),
    on(userAction.registroParticularSuccess, (state) => ({
        ...state,
        loggedIn: false,
        error: null,
        pending: false,
    })),

    on(userAction.registroParticularFailure, (state, { payload }) => ({
        ...state,
        error:payload,
        loggedIn: false,
        pending: false,
    })),



  );


export function userReducer(state: UserState | undefined, action: Action) {
    return _userReducer(state, action);
}
