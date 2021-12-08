import { Animal } from "./shared/models/animal.model";

import * as reducersAnimal from './animales/reducers';
import * as reducersProtectora from './protectoras/reducers';
import * as reducersUser from './user/reducers';
import * as reducersProfileProtectora from './profile_protectora/reducers';
import * as reducersProfileParticular from './profile_particular/reducers';
import { ActionReducerMap } from "@ngrx/store";
import { AnimalesEffects } from "./animales/effects/animal.effects";
import { ProtectorasEffects } from "./protectoras/effects/protectora.effects";
import { UserEffects } from "./user/effects/user.effects";
import { ProfileProtectoraEffects } from "./profile_protectora/effects/protectora.profile.effects";
import { ProfileParticularEffects } from "./profile_particular/effects/particular.profile.effects";

export interface AppState{
    animalesApp:reducersAnimal.AnimalState;
    protectorasApp: reducersProtectora.ProtectoraState;
    UserApp: reducersUser.UserState;
    profileProtectoraApp: reducersProfileProtectora.ProfileProtectoraState;
    profileParticularApp: reducersProfileParticular.ProfileParticularState;
}

export const appReducers: ActionReducerMap<AppState> = {
    animalesApp: reducersAnimal.animalReducer,
    protectorasApp: reducersProtectora.protectoraReducer,
    UserApp: reducersUser.userReducer,
    profileProtectoraApp: reducersProfileProtectora.ProfileProtectoraReducer,
    profileParticularApp: reducersProfileParticular.ProfileParticualrReducer
}

export const EffectsArray: any[] = [AnimalesEffects,ProtectorasEffects,UserEffects,ProfileProtectoraEffects,ProfileParticularEffects];