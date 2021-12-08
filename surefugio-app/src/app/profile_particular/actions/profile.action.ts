import { createAction, props } from "@ngrx/store";
import { Animal } from "src/app/shared/models/animal.model";
import { fav_animals } from "src/app/shared/models/fav_animals.model";
import { fav_protectoras } from "src/app/shared/models/fav_protectoras.model";
import { Particular } from "src/app/shared/models/particular.model";
import { Protectora } from "src/app/shared/models/protectora.model";

export const getParticular = createAction(
    '[Profile Particular] Get particular'
);

export const getParticularSuccess = createAction(
    '[Profile Particular] Get particular success',
    props<{particular: Particular}>()
)

export const getParticularError = createAction(
    '[Profile Particular] Get particular error',
    props<{payload:any}>()
)







export const getProtectorasFav = createAction(
    '[Particular Fav Protectoras] Get protectoras fav'
);

export const getProtectorasFavSuccess = createAction(
    '[Particular Fav Protectoras] Get protectoras fav success',
    props<{fav_protectoras: fav_protectoras[]}>()
)

export const getProtectorasFavError = createAction(
    '[Particular Fav Protectoras] Get protectoras fav error',
    props<{payload:any}>()
)



export const addProtectorasFav = createAction(
    '[Particular Fav Protectoras] Add protect fav',
    props<{protectora: Protectora}>()
)

export const addProtectorasFavSuccess = createAction(
    '[Particular Fav Protectoras] Add protect fav success',
    props<{fav_protectoras: fav_protectoras}>()
)

export const addProtectorasFavError = createAction(
    '[Particular Fav Protectoras] Add protec fav error',
    props<{payload:any}>()
)



export const deleterProtectorasFav = createAction(
    '[Particular Fav Protectoras] deleter protect fav',
    props<{protectora: Protectora}>()
)

export const deleterProtectorasFavSuccess = createAction(
    '[Particular Fav Protectoras] deleter protec fav success',
    props<{fav_protectoras: fav_protectoras}>()
)

export const deleterProtectorasFavError = createAction(
    '[Particular Fav Protectoras] deleter prote fav error',
    props<{payload:any}>()
)











export const getAnimalFav = createAction(
    '[Particular Fav Animales] Get Animal fav'
);

export const getAnimalFavSuccess = createAction(
    '[Particular Fav Animales] Get Animal fav success',
    props<{fav_animals: fav_animals[]}>()
)

export const getAnimalFavError = createAction(
    '[Particular Fav Animales] Get Animal fav error',
    props<{payload:any}>()
)



export const addAnimalFav = createAction(
    '[Particular Fav Animales] Add Animal fav',
    props<{animal: Animal}>()
)

export const addAnimalFavSuccess = createAction(
    '[Particular Fav Animales] Add Animal fav success',
    props<{fav_animals: fav_animals}>()
)

export const addAnimalFavError = createAction(
    '[Particular Fav Animales] Add Animal fav error',
    props<{payload:any}>()
)



export const deleterAnimalFav = createAction(
    '[Particular Fav Animales] deleter Animal fav',
    props<{animal: Animal}>()
)

export const deleterAnimalFavSuccess = createAction(
    '[Particular Fav Animales] deleter Animal fav success',
    props<{fav_animals: fav_animals}>()
)

export const deleterAnimalFavError = createAction(
    '[Particular Fav Animales] deleter Animal fav error',
    props<{payload:any}>()
)