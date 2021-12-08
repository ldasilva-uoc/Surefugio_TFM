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
import { Credencial} from 'src/app/shared/models/credencial.model';


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


  registerProtectora$ = createEffect(() =>
        this.actions$.pipe(
          ofType(userAction.signupUserProtectora),
          exhaustMap(({user}) => {
            return this.authService.register(user).pipe(
              map((auth) => {
                let user = new User(auth.user.id, auth.user.email,auth.user.protectora)
                return userAction.signupSuccessProtectora({user})
              }
              ),
              catchError((error) => of(LoginActions.signupFailureProtectora({payload:error})))
            )
          })
        )
  )


  registerProtectoraSuccess$ = createEffect( () =>
  this.actions$.pipe(
    ofType(userAction.signupSuccessProtectora),
    tap(() =>{
     this.router.navigate(['/registro/protectora'])})),
    { dispatch: false });

    addProtectora$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.registroProtectora),
      exhaustMap(({protectora}) => {
        return this.authService.registerProtectora(protectora).pipe(
          map((auth) => {
            return userAction.registroProtectoraSuccess()
          }
          ),
          catchError((error) => of(LoginActions.registroProtectoraFailure({payload:error})))
        )
            })
          )
      )

    addProtectoraSuccess$ = createEffect( () =>
    this.actions$.pipe(
    ofType(userAction.registroProtectoraSuccess),
    tap(() =>{
    this.router.navigate(['/login'])
    }
      
    )
    ),
    { dispatch: false }
    );



    registerParticular$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.signupUserParticular),
      exhaustMap(({user}) => {
        return this.authService.register(user).pipe(
          map((auth) => {
            let user = new User(auth.user.id, auth.user.email,auth.user.protectora)
            return userAction.signupSuccessParticular({user})
          }
          ),
          catchError((error) => of(LoginActions.signupFailureParticular({payload:error})))
        )
      })
    )
)


registerParticularSuccess$ = createEffect( () =>
this.actions$.pipe(
ofType(userAction.signupSuccessParticular),
tap(() =>{
 this.router.navigate(['/registro/particular'])})),
{ dispatch: false });

addParticular$ = createEffect(() =>
this.actions$.pipe(
  ofType(userAction.registroParticular),
  exhaustMap(({particular}) => {
    return this.authService.registerParticular(particular).pipe(
      map((auth) => {
        return userAction.registroParticularSuccess()
      }
      ),
      catchError((error) => of(LoginActions.registroParticularFailure({payload:error})))
    )
        })
      )
  )

addParticularSuccess$ = createEffect( () =>
this.actions$.pipe(
ofType(userAction.registroParticularSuccess),
tap(() =>{
this.router.navigate(['/login'])
}
  
)
),
{ dispatch: false }
);


 



  logoutUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userAction.logout),
      exhaustMap(() => 
      this.authService.logout().pipe(
        map((info) => {

          return userAction.logoutConfirmation()
        })
      )
      )
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
) {
  
}
}
