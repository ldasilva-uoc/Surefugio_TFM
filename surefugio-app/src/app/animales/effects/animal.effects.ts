import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { mergeMap,map,catchError, tap} from 'rxjs/operators';
import { addAnimal, addAnimalError, addAnimalSuccess, deleteAnimal, deleteAnimalError, deleteAnimalSuccess, editAnimal, editAnimalError, editAnimalSuccess, getAllAnimales, getAllAnimalesError, getAllAnimalesSuccess } from "../actions";
import { AnimalesService } from "../service/animales.service";

@Injectable()
export class AnimalesEffects{
    constructor(
        private actions$: Actions,
        private AnimalesService: AnimalesService,
        private router: Router,
    )
    {}

    getAnimales$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getAllAnimales),
            mergeMap(() =>
                this.AnimalesService.getAnimales().pipe(
                    map((animales) => getAllAnimalesSuccess({ animales: animales})),
                    catchError((err) => of(getAllAnimalesError({payload:err})))
                )
            )
        )
    )

    addAnimal$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addAnimal),
            mergeMap(({animal}) => 
                this.AnimalesService.addAnimal(animal).pipe(
                    map(() => 
                        addAnimalSuccess({animal})
                    ),
                    catchError((error) => of(addAnimalError({payload:error})))
                )
            )
        )
    )

    addAnimalSuccess$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(addAnimalSuccess),
            tap(() => 
                this.router.navigate(['/misanimales'])
            )
            ),
            {dispatch:false}
    );

    editAnimal$ = createEffect(() => 
        this.actions$.pipe(
            ofType(editAnimal),
            mergeMap(({animal}) =>
                this.AnimalesService.editAnimal(animal).pipe(
                    map(() => 
                        editAnimalSuccess({animal})
                    ),
                    catchError((error) => of(editAnimalError({payload: error})))
                )
            )
        )
    )

    editAnimalSuccess$ = createEffect(
        () =>
        this.actions$.pipe(
            ofType(editAnimalSuccess),
            tap(() => 
                this.router.navigate(['/misanimales'])
            )
            ),
            {dispatch:false}
    );

    deleteAnimal$ = createEffect(() => 
        this.actions$.pipe(
            ofType(deleteAnimal),
            mergeMap(({animal}) =>
                this.AnimalesService.deleteAnimal(animal).pipe(
                    map(() => 
                       deleteAnimalSuccess({animal})
                    ),
                    catchError((error) => of(deleteAnimalError({payload: error})))
                )
            )
        )
    )
}