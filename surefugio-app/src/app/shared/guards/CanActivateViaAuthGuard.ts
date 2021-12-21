import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { select, Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { AppState } from "src/app/app.reducer";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

    constructor(private store:Store<AppState>, private router: Router) {
      

     }
    canActivate(){
     return true
    }

}