import { Action, createReducer, on } from "@ngrx/store";
import { Protectora } from "src/app/shared/models/protectora.model";
import { editProtectora, editProtectoraError, editProtectoraSuccess, getProtectora, getProtectoraError, getProtectoraSuccess } from "../actions";


export interface ProfileProtectoraState {
    protectora: Protectora;
    error: string | null;
    pending: boolean;
}

export const initialState: ProfileProtectoraState = {
    protectora: new Protectora(),
    error: null,
    pending: false,
};

const _profileProtectoraReducer = createReducer(
    initialState,
    on(getProtectora, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(getProtectoraSuccess, (state, action) => ({
        ...state,
        protectora: action.protectora,
        loggedIn: true,
        error: null,
        pending: false,
    })),
    on(getProtectoraError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),

    on(editProtectora, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(editProtectoraSuccess, (state, action) => ({
        ...state,
        protectora:action.protectora,
        loggedIn: true,
        error: null,
        pending: false,
    })),
    on(editProtectoraError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),
  );


export function ProfileProtectoraReducer(state: ProfileProtectoraState | undefined, action: Action) {
    return _profileProtectoraReducer(state, action);
}
