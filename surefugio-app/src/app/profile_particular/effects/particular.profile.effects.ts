import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { getProtectoraError } from "src/app/profile_protectora/actions";
import { fav_animals } from "src/app/shared/models/fav_animals.model";
import { fav_protectoras } from "src/app/shared/models/fav_protectoras.model";
import { MessageService } from "src/app/shared/service/message.service";
import { acoger, acogerError, acogersuccess, addAnimalFav, addAnimalFavError, addAnimalFavSuccess, addProtectorasFav, addProtectorasFavError, addProtectorasFavSuccess, adoptar, adoptarError, adoptarsuccess, deleterAnimalFav, deleterAnimalFavError, deleterAnimalFavSuccess, deleterProtectorasFav, deleterProtectorasFavError, deleterProtectorasFavSuccess, editParticular, editParticularError, editParticularSuccess, getAnimalFav, getAnimalFavError, getAnimalFavSuccess, getParticular, getParticularError, getParticularSuccess, getProtectorasFav, getProtectorasFavSuccess, voluntariado, voluntariadoError, voluntariadosuccess } from "../actions";
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
              map((fav_protectoras) => { 

              return getProtectorasFavSuccess({ fav_protectoras: fav_protectoras.favoritos})
            }),
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
            map((fav_animals) => {
              return getAnimalFavSuccess({ fav_animals: fav_animals.favoritos})}),
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
            map((fav_protectoras) => {
              console.log('efect add animal');
              console.log(fav_protectoras)
              var fav: fav_protectoras = {
                protectora_id: parseInt(fav_protectoras.protectoras.protectora_id),
                particular_id: fav_protectoras.protectoras.particular_id
              }
              return addProtectorasFavSuccess({ fav_protectoras: fav})}),
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
          map((fav_animals) => {
            console.log('efect add animal');
            console.log(fav_animals.protectoras);
            var fav: fav_animals = {
              animal_id: parseInt(fav_animals.protectoras.animal_id),
              particular_id: fav_animals.protectoras.particular_id
            }
            return addAnimalFavSuccess({ fav_animals: fav})}),
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
            map((fav_protectoras) => deleterProtectorasFavSuccess({ fav_protectoras: fav_protectoras.favoritos})),
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
          map((fav_animals) => {
            console.log('efect delete animal');
            console.log(fav_animals);

            return deleterAnimalFavSuccess({ fav_animals: fav_animals.favoritos})}),
          catchError((err) => of(deleterAnimalFavError({payload:err})))
      )
  )
)
);


adoptar$ = createEffect(() => 
this.actions$.pipe(
  ofType(adoptar),
  mergeMap(({idP,idA}) =>
      this.profileService.Adoptar(idP,idA).pipe(
          map((mensaje) => {
            console.log(mensaje);

            return adoptarsuccess()}),
          catchError((err) => of(adoptarError({payload:err})))
      )
  )
)
);



acoger$ = createEffect(() => 
this.actions$.pipe(
  ofType(acoger),
  mergeMap(({idP,idA}) =>
      this.profileService.Acoger(idP,idA).pipe(
          map((mensaje) => {
            console.log(mensaje);

            return acogersuccess()}),
          catchError((err) => of(acogerError({payload:err})))
      )
  )
)
);


voluntariado$ = createEffect(() => 
this.actions$.pipe(
  ofType(voluntariado),
  mergeMap(({idP}) =>
      this.profileService.Voluntariado(idP).pipe(
          map((mensaje) => {
            console.log(mensaje);

            return voluntariadosuccess()}),
          catchError((err) => of(voluntariadoError({payload:err})))
      )
  )
)
);

editParticular$ = createEffect(() => 
this.actions$.pipe(
    ofType(editParticular),
    mergeMap(({formData}) =>
        this.profileService.editParticular(formData).pipe(
            map((particular) => 
                editParticularSuccess({particular: particular.particular})
            ),
            catchError((error) => of(editParticularError({payload: error})))
        )
    )
)
)

editParticularSuccess$ = createEffect(
() =>
this.actions$.pipe(
    ofType(editParticularSuccess),
    tap(() => 
        this.router.navigate(['/particular/profile'])
    )
    ),
    {dispatch:false}
);




  constructor(
    private actions$: Actions,
    private router: Router,
    private profileService:ProfileParticularService,
    private mensajeService:MessageService,
) {
}
}
