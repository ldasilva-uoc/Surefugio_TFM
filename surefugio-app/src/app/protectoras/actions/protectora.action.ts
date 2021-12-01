import { createAction, props } from "@ngrx/store"
import { Animal } from "src/app/shared/models/animal.model"
import { Protectora } from "src/app/shared/models/protectora.model"

export const getAllProtectoras = createAction(
    '[Protectora] Get Protectoras'
)

export const getAllProtectorasSuccess = createAction(
    '[Protectora] Get all success',
    props<{protectoras: Protectora[]}>()
)

export const getAllProtectorasError = createAction(
    '[Protectora] Get all error',
    props<{payload:any}>()
)