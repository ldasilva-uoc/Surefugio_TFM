import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { map, tap, catchError, mergeMap, exhaustMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ProfileProtectoraService } from '../service/profile-protectora.service';
import { getProtectora, getProtectoraError, getProtectoraSuccess } from '../actions';

@Injectable()
export class ProfileProtectoraEffects {

  getProtectora$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(getProtectora),
      mergeMap(() =>{
        console.log("effect");
        return this.profileService.getprotectora().pipe(
          map((protectora) =>{
            console.log(protectora.protectora[0]);
            return getProtectoraSuccess({protectora: protectora.protectora[0]})
          }
          ),
          catchError((error) => of(getProtectoraError({payload:error})))
        )
      })
    )
  );



  constructor(
    private actions$: Actions,
    private router: Router,
    private profileService: ProfileProtectoraService,
) {
}
}
