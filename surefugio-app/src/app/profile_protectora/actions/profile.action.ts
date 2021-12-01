import { createAction, props } from "@ngrx/store";
import { Protectora } from "src/app/shared/models/protectora.model";

export const getProtectora = createAction(
    '[Profile Protectora] Get protectora'
);

export const getProtectoraSuccess = createAction(
    '[Profile Protectora] Get protectora success',
    props<{protectora: Protectora}>()
)

export const getProtectoraError = createAction(
    '[Profile Protectora] Get protectora error',
    props<{payload:any}>()
)


