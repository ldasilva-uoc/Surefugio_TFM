import { createAction, props } from "@ngrx/store";
import { Animal } from "../../shared/models/animal.model";

export const getAllAnimales = createAction(
    '[Animal] Get animales'
)

export const getAllAnimalesSuccess = createAction(
    '[Animal] Get all success',
    props<{animales: Animal[]}>()
)

export const getAllAnimalesError = createAction(
    '[Animal] Get all error',
    props<{payload:any}>()
)

export const addAnimal = createAction(
    '[Animal] Add animal',
    props<{animal: Animal}>()
)

export const addAnimalSuccess = createAction(
    '[Animal] Add animal success',
    props<{animal: Animal}>()
)


export const addAnimalError = createAction(
    '[Animal] Add animal error',
    props<{payload:any}>()
)


export const deleteAnimal = createAction(
    '[Animal] Delete animal',
    props<{animal: Animal}>()
)

export const deleteAnimalSuccess = createAction(
    '[Animal] Delete animal success',
    props<{animal: Animal}>()
)


export const deleteAnimalError = createAction(
    '[Animal] Delete animal error',
    props<{payload:any}>()
)

export const editAnimal = createAction(
    '[Animal] Edit animal',
    props<{animal: Animal}>()
)

export const editAnimalSuccess = createAction(
    '[Animal] Edit animal success',
    props<{animal: Animal}>()
)


export const editAnimalError = createAction(
    '[Animal] Edit animal error',
    props<{payload:any}>()
)