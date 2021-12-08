import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { getProtectoraError } from "src/app/profile_protectora/actions";
import { addAnimalFav, addAnimalFavError, addAnimalFavSuccess, addProtectorasFav, addProtectorasFavError, addProtectorasFavSuccess, deleterAnimalFav, deleterAnimalFavError, deleterAnimalFavSuccess, deleterProtectorasFav, deleterProtectorasFavError, deleterProtectorasFavSuccess, getAnimalFav, getAnimalFavError, getAnimalFavSuccess, getParticular, getParticularError, getParticularSuccess, getProtectorasFav, getProtectorasFavSuccess } from "../actions";
import { ProfileParticularService } from "../service/profile-particular.service";

@Injectable()
export class ProfileParticularEffects {

  getParticular$ = createEffect(
    () =>
    this.actions$.pipe(
      ofType(getParticular),
      mergeMap(() =>{
        console.log("effect");
        return this.profileService.getparticular().pipe(
          map((particular) =>{
            return getParticularSuccess({particular: particular.particular[0]})
          }
          ),
          catchError((error) => of(getParticularError({payload:error})))
        )
      })
    )
  )

  getProtectorasFav$ = createEffect(() => 
  this.actions$.pipe(
      ofType(getProtectorasFav, getParticularSuccess),
      mergeMap(() =>
          this.profileService.getProtectorasFav().pipe(
              map((fav_protectoras) => getProtectorasFavSuccess({ fav_protectoras: fav_protectoras})),
              catchError((err) => of(getProtectoraError({payload:err})))
          )
      )
  )
);

getAnimalFav$ = createEffect(() => 
this.actions$.pipe(
    ofType(getAnimalFav, getParticularSuccess),
    mergeMap(() =>
        this.profileService.getAnimalesFav().pipe(
            map((fav_animals) => getAnimalFavSuccess({ fav_animals: fav_animals})),
            catchError((err) => of(getAnimalFavError({payload:err})))
        )
    )
)
);



addProtectorasFav$ = createEffect(() => 
this.actions$.pipe(
    ofType(addProtectorasFav),
    mergeMap(({protectora}) =>
        this.profileService.addProtectorasFav(protectora).pipe(
            map((fav_protectoras) => addProtectorasFavSuccess({ fav_protectoras: fav_protectoras})),
            catchError((err) => of(addProtectorasFavError({payload:err})))
        )
    )
)
);

addAnimalFav$ = createEffect(() => 
this.actions$.pipe(
  ofType(addAnimalFav),
  mergeMap(({animal}) =>
      this.profileService.addAnimalesFav(animal).pipe(
          map((fav_animals) => addAnimalFavSuccess({ fav_animals: fav_animals})),
          catchError((err) => of(addAnimalFavError({payload:err})))
      )
  )
)
);







deleterProtectorasFav$ = createEffect(() => 
this.actions$.pipe(
    ofType(deleterProtectorasFav),
    mergeMap(({protectora}) =>
        this.profileService.deleterProtectorasFav(protectora).pipe(
            map((fav_protectoras) => deleterProtectorasFavSuccess({ fav_protectoras: fav_protectoras})),
            catchError((err) => of(deleterProtectorasFavError({payload:err})))
        )
    )
)
);

deleterAnimalFav$ = createEffect(() => 
this.actions$.pipe(
  ofType(deleterAnimalFav),
  mergeMap(({animal}) =>
      this.profileService.deleterAnimalesFav(animal).pipe(
          map((fav_animals) => deleterAnimalFavSuccess({ fav_animals: fav_animals})),
          catchError((err) => of(deleterAnimalFavError({payload:err})))
      )
  )
)
);






  constructor(
    private actions$: Actions,
    private router: Router,
    private profileService:ProfileParticularService,
) {
}
}
