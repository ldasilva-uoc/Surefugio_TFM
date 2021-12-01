import { Action, createReducer, on } from "@ngrx/store";
import { Protectora } from "src/app/shared/models/protectora.model";
import { getAllProtectoras, getAllProtectorasError, getAllProtectorasSuccess } from "../actions";

export interface ProtectoraState {
    protectoras: Protectora[];
    loading:boolean;
    loaded:boolean;
    error:any;
    
}

export const inicialState: ProtectoraState = {
    protectoras: [new Protectora],
    loading: false,
    loaded: false,
    error: null
};

const _protectoraReducer = createReducer(
    inicialState, 
    on(getAllProtectoras, (state) => ({
        ...state,
        loading:true,
    
    })),
    on(getAllProtectorasSuccess, (state,{protectoras}) => ({
        ...state,
        loading:false,
        loaded:true,
        protectoras: [...protectoras]
    
    })),
    on(getAllProtectorasError, (state,{payload}) => ({
        ...state,
        loading:false,
        loaded:false,
        error: payload
        
    
    }))
    
);

export function protectoraReducer(state: ProtectoraState | undefined,action: Action){
    return _protectoraReducer(state,action);
}