import { createAction, props } from "@ngrx/store";
import { Auth } from "src/app/shared/models/auth.model";
import { Credencial } from "src/app/shared/models/credencial.model";
import { Particular } from "src/app/shared/models/particular.model";
import { Protectora } from "src/app/shared/models/protectora.model";
import { User } from "src/app/shared/models/user.model";

export const login = createAction(
    '[Login Page] Login',
    props<{ cred: Credencial }>()
  );

export const loginSuccess = createAction(
    '[Login Page] Login Success',
    props<{ user: User  }>()
);

export const loginFailure = createAction(
    '[Login Page] Login Failure',
    props<{ payload: any }>()
);

/* Protectora */

export const signupUserProtectora = createAction(
    '[Sign up User Protectora Page] Sign up ',
    props<{ user: User }>()
);

export const signupSuccessProtectora = createAction(
    '[Sign up User Protectora Page] Sign up Success',
    props<{ user: User }>()
);

export const signupFailureProtectora = createAction(
    '[Sign up User Protectora Page] Sign up Failure',
    props<{ payload: any }>()
);


export const registroProtectora = createAction(
    '[Registro Protectora Page] Sign up ',
    props<{ protectora: Protectora }>()
);

export const registroProtectoraSuccess = createAction(
    '[Registro Protectora Page] Sign up Success '
);
export const registroProtectoraFailure= createAction(
    '[Registro User Protectora Page] Sign up Failure',
    props<{ payload: any }>()
);

/* Particular */


export const signupUserParticular = createAction(
    '[Sign up User Particular Page] Sign up ',
    props<{ user: User }>()
);

export const signupSuccessParticular = createAction(
    '[Sign up User Particular Page] Sign up Success',
    props<{ user: User }>()
);

export const signupFailureParticular = createAction(
    '[Sign up User Protectora Page] Sign up Failure',
    props<{ payload: any }>()
);


export const registroParticular= createAction(
    '[Registro Particular Page] Sign up ',
    props<{ particular: Particular }>()
);

export const registroParticularSuccess = createAction(
    '[Registro Protectora Page] Sign up Success '
);
export const registroParticularFailure= createAction(
    '[Registro User Protectora Page] Sign up Failure',
    props<{ payload: any }>()
);


export const loginRedirect = createAction('[Login] Login Redirect');

export const logout = createAction('[Login] Logout');
export const logoutConfirmation = createAction('[Login] Logout Confirmation');
