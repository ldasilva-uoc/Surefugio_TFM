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


export const editProtectora = createAction(
    '[Profile Protectora] Edit protectora',
    props<{formData: FormData}>()
);

export const editProtectoraSuccess = createAction(
    '[Profile Protectora] Edit protectora success',
    props<{protectora: Protectora}>()
)

export const editProtectoraError = createAction(
    '[Profile Protectora] Edit protectora error',
    props<{payload:any}>()
)

