import { Animal } from "./shared/models/animal.model";

import * as reducersAnimal from './animales/reducers';
import * as reducersProtectora from './protectoras/reducers';
import * as reducersUser from './user/reducers';
import * as reducersProfileProtectora from './profile_protectora/reducers';
import { ActionReducerMap } from "@ngrx/store";
import { AnimalesEffects } from "./animales/effects/animal.effects";
import { ProtectorasEffects } from "./protectoras/effects/protectora.effects";
import { UserEffects } from "./user/effects/user.effects";
import { ProfileProtectoraEffects } from "./profile_protectora/effects/protectora.profile.effects";

export interface AppState{
    animalesApp:reducersAnimal.AnimalState;
    protectorasApp: reducersProtectora.ProtectoraState;
    UserApp: reducersUser.UserState;
    profileProtectoraApp: reducersProfileProtectora.ProfileProtectoraState;
}

export const appReducers: ActionReducerMap<AppState> = {
    animalesApp: reducersAnimal.animalReducer,
    protectorasApp: reducersProtectora.protectoraReducer,
    UserApp: reducersUser.userReducer,
    profileProtectoraApp: reducersProfileProtectora.ProfileProtectoraReducer
}

export const EffectsArray: any[] = [AnimalesEffects,ProtectorasEffects,UserEffects,ProfileProtectoraEffects];