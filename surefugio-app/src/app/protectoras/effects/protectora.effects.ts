import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { getAllProtectoras, getAllProtectorasError, getAllProtectorasSuccess } from "../actions";
import { ProtectorasService } from "../service/protectoras.service";
import { mergeMap,map,catchError} from 'rxjs/operators';

@Injectable()
export class ProtectorasEffects{
    constructor(
        private actions$: Actions,
        private ProtectorasService: ProtectorasService
    )
    {}

    getProtectoras$ = createEffect(() => 
        this.actions$.pipe(
            ofType(getAllProtectoras),
            mergeMap(() =>
                this.ProtectorasService.getProtectoras().pipe(
                    map((protectoras) => getAllProtectorasSuccess({ protectoras: protectoras})),
                    catchError((err) => of(getAllProtectorasError({payload:err})))
                )
            )
        )
    )
}