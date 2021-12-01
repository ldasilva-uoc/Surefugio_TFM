
import { Action, createReducer, on } from "@ngrx/store";
import { Animal } from "../../shared/models/animal.model";
import { addAnimal, addAnimalError, addAnimalSuccess, deleteAnimal, deleteAnimalError, deleteAnimalSuccess, editAnimal, editAnimalError, editAnimalSuccess, getAllAnimales, getAllAnimalesError, getAllAnimalesSuccess } from "../actions";

export interface AnimalState {
    animales: Animal[];
    loading:boolean;
    loaded:boolean;
    error:any;
    
}

export const inicialState: AnimalState = {
    animales: [new Animal],
    loading: false,
    loaded: false,
    error: null
};

const _animalReducer = createReducer(
    inicialState, 
    on(getAllAnimales, (state) => ({
        ...state,
        loading:true,
    
    })),
    on(getAllAnimalesSuccess, (state,{animales}) => ({
        ...state,
        loading:false,
        loaded:true,
        animales: [...animales]
    
    })),
    on(getAllAnimalesError, (state,{payload}) => ({
        ...state,
        loading:false,
        loaded:false,
        error: payload
    })),

    on(addAnimal, (state) => ({
        ...state,
        loading:true,
    
    })),
    on(addAnimalSuccess, (state,animal) => ({
        ...state,
        loading:false,
        loaded:true,
        animales: [...state.animales,animal.animal]
    
    })),
    on(addAnimalError, (state,{payload}) => ({
        ...state,
        loading:false,
        loaded:false,
        error: payload
    })),


    on(deleteAnimal, (state,animal) => ({
        ...state,
        loading:true,
        animales: [...state.animales.filter(x => x.id !== animal.animal.id)]
    
    })),
    on(deleteAnimalSuccess, (state) => ({
        ...state,
        loading:false,
        loaded:true,
    })),
    on(deleteAnimalError, (state,{payload}) => ({
        ...state,
        loading:false,
        loaded:false,
        error: payload
    })),


    on(editAnimal, (state) => ({
        ...state,
        loading:true,
    
    })),
    on(editAnimalSuccess, (state,animal) => ({
        ...state,
        loading:false,
        loaded:true,
        animales: [...state.animales.map(a => {
            if (a.id === animal.animal.id){
                return {...a,...animal.animal};
            } else{
                return a;
            }
        })]
    })),
    on(editAnimalError, (state,{payload}) => ({
        ...state,
        loading:false,
        loaded:false,
        error: payload
    })),
    
);

export function animalReducer(state: AnimalState | undefined,action: Action){
    return _animalReducer(state,action);
}