import { Action, createReducer, on } from "@ngrx/store";
import { fav_animals } from "src/app/shared/models/fav_animals.model";
import { fav_protectoras } from "src/app/shared/models/fav_protectoras.model";
import { Particular } from "src/app/shared/models/particular.model";
import { acoger, acogerError, acogersuccess, addAnimalFav, addAnimalFavError, addAnimalFavSuccess, addProtectorasFav, addProtectorasFavError, addProtectorasFavSuccess, adoptar, adoptarError, adoptarsuccess, deleterAnimalFav, deleterAnimalFavError, deleterAnimalFavSuccess, deleterProtectorasFav, deleterProtectorasFavError, deleterProtectorasFavSuccess, editParticular, editParticularError, editParticularSuccess, getAnimalFav, getAnimalFavError, getAnimalFavSuccess, getParticular, getParticularError, getParticularSuccess, getProtectorasFav, getProtectorasFavError, getProtectorasFavSuccess, voluntariado, voluntariadoError, voluntariadosuccess } from "../actions";

export interface ProfileParticularState {
    particular: Particular;
    animalsFavs: fav_animals[];
    protectorasFavs: fav_protectoras[]
    error: string | null;
    pending: boolean;
}

export const initialState: ProfileParticularState = {
    particular: new Particular(),
    error: null,
    pending: false,
    animalsFavs: [new fav_animals],
    protectorasFavs: [new fav_protectoras]
};

const _profileParticularReducer = createReducer(
    initialState,
    on(getParticular, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(getParticularSuccess, (state, action) => ({
        ...state,
        particular: action.particular,
        loggedIn: true,
        error: null,
        pending: false,
    })),
    on(getParticularError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),
    on(getProtectorasFav , (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(getProtectorasFavSuccess, (state, {fav_protectoras}) => ({
        ...state,
        protectorasFavs: [...fav_protectoras],
        error: null,
        pending: false,
    })),
    on(getProtectorasFavError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),
    on(getAnimalFav, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(getAnimalFavSuccess, (state, { fav_animals}) => ({
        ...state,
        animalsFavs: [... fav_animals],
        error: null,
        pending: false,
    })),
    on(getAnimalFavError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),




    on(addProtectorasFav , (state) => ({
        ...state,
        pending: true,
    })),
    on(addProtectorasFavSuccess, (state, fav_protectoras) => ({
        ...state,
        protectorasFavs: [...state.protectorasFavs,fav_protectoras.fav_protectoras],
        error: null,
        pending: false,
    })),
    on(addProtectorasFavError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),
    on(addAnimalFav, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(addAnimalFavSuccess, (state, fav_animals) => ({
        ...state,
        animalsFavs: [...state.animalsFavs, fav_animals.fav_animals],
        error: null,
        pending: false,
    })),
    on(addAnimalFavError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),







    on(deleterProtectorasFav , (state,protectora) => ({
        ...state,
        pending: true,
        protectorasFavs: [...state.protectorasFavs.filter(x => x.protectora_id !== protectora.protectora?.id)]
    })),
    on(deleterProtectorasFavSuccess, (state) => ({
        ...state,
        error: null,
        pending: false,
    })),
    on(deleterProtectorasFavError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),
    on(deleterAnimalFav, (state,animal) => ({
        ...state,
        error: null,
        pending: true,
        animalsFavs:  [...state.animalsFavs.filter(x => x.animal_id !== animal.animal?.id)]
    })),
    on(deleterAnimalFavSuccess, (state) => ({
        ...state,
        error: null,
        pending: false,
    })),
    on(deleterAnimalFavError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),



    on(deleterAnimalFav, (state,animal) => ({
        ...state,
        error: null,
        pending: true,
        animalsFavs:  [...state.animalsFavs.filter(x => x.animal_id !== animal.animal?.id)]
    })),
    on(deleterAnimalFavSuccess, (state) => ({
        ...state,
        error: null,
        pending: false,
    })),
    on(deleterAnimalFavError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),


    on(adoptar, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(adoptarsuccess, (state) => ({
        ...state,
        error: null,
        pending: false,
    })),
    on(adoptarError , (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),


    on(acoger, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(acogersuccess, (state) => ({
        ...state,
        error: null,
        pending: false,
    })),
    on(acogerError , (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),


    on(voluntariado, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(voluntariadosuccess, (state) => ({
        ...state,
        error: null,
        pending: false,
    })),
    on(voluntariadoError , (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),
    on(editParticular, (state) => ({
        ...state,
        error: null,
        pending: true,
    })),
    on(editParticularSuccess, (state, action) => ({
        ...state,
        particular: action.particular,
        loggedIn: true,
        error: null,
        pending: false,
    })),
    on(editParticularError, (state, { payload }) => ({
        ...state,
        error:payload,
        pending: false,
    })),
    

  );


export function ProfileParticualrReducer(state: ProfileParticularState | undefined, action: Action) {
    return _profileParticularReducer(state, action);
}

