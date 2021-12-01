import { createAction, props } from "@ngrx/store";
import { Auth } from "src/app/shared/models/auth.model";
import { Credencial } from "src/app/shared/models/credencial.model";
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



export const loginRedirect = createAction('[Login] Login Redirect');

export const logout = createAction('[Login] Logout');
export const logoutConfirmation = createAction('[Login] Logout Confirmation');
