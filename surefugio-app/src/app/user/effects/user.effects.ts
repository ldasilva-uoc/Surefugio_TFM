import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { map, tap, catchError, mergeMap, exhaustMap } from 'rxjs/operators';
import * as LoginActions from '../actions';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { TokenService } from '../service/token.service';
import * as userAction from '../actions';
import { User } from 'src/app/shared/models/user.model';


@Injectable()
export class UserEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.login),
      exhaustMap(({cred}) =>{
        return this.authService.login(cred).pipe(
        map((auth) =>{
          
          let user = new User(auth.user.id, auth.user.email,auth.user.protectora)

          return userAction.loginSuccess({user})
        }
        ),
        catchError((error) => of(LoginActions.loginFailure({ payload: error })))
        )}
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userAction.loginSuccess),
        tap(() =>{
         this.router.navigate(['/portada'])
        }

          
      )
      ),
    { dispatch: false }
  );



  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.logout),
      map(() => userAction.logoutConfirmation())
    )
  );

  logoutConfirmation$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(userAction.logoutConfirmation),
        tap(() =>
          this.router.navigate(['/animales/list'])
      )
      ),
    { dispatch: false }
  );



  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
) {}
}
