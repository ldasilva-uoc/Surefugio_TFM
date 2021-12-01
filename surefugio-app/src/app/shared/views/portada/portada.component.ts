import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ProfileProtectoraService } from 'src/app/profile_protectora/service/profile-protectora.service';
import { Protectora } from '../../models/protectora.model';
import { User } from '../../models/user.model';
import * as ProtectoraProfileAction from '../../../profile_protectora/actions';

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.css']
})
export class PortadaComponent implements OnInit {
  public isProtectora:boolean|undefined;
  public islogin:boolean;
  public user: User;
  public protectora: Protectora;

  constructor(private store: Store<AppState>, private service: ProfileProtectoraService) {

    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
      this.isProtectora = login.protectora;
      this.user = login.auth;

      if(this.isProtectora && this.islogin ){
        this.store.dispatch(ProtectoraProfileAction.getProtectora());
      }
    });

    this.store.select('profileProtectoraApp').subscribe(protectora => {

    });


   }

  ngOnInit(): void {
  }

}
