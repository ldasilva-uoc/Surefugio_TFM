import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { User } from 'src/app/shared/models/user.model';
import * as LoginAction from '../../../user/actions';
import * as ProtectoraProfileAction from '../../../profile_protectora/actions';
import { Protectora } from '../../models/protectora.model';
import { ProfileProtectoraService } from 'src/app/profile_protectora/service/profile-protectora.service';
import { Particular } from '../../models/particular.model';
import * as ParticularProfileAction from '../../../profile_particular/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public isProtectora:boolean|undefined;
  public islogin:boolean;
  public user: User;
  public protectora: Protectora;
  public particular: Particular;

  public name: String
  //public particular: Particular;

  constructor(private store: Store<AppState>, private service: ProfileProtectoraService) { 

    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
      this.isProtectora = login.protectora;
      this.user = login.auth;

      if(this.isProtectora && this.islogin ){
        console.log("el usuario atentificado es una PROTECTORA")
        this.store.dispatch(ProtectoraProfileAction.getProtectora());
      }
      else if(!this.isProtectora && this.islogin ){
        console.log("el usuario atentificado es un PARTICULAR")
        this.store.dispatch(ParticularProfileAction.getParticular());
      }

    });

    this.store.select('profileProtectoraApp').subscribe(protectora => {
        this.name = protectora.protectora.nombre;
    });

    this.store.select('profileParticularApp').subscribe(particular => {
      this.name = particular.particular.nombre;
  });
  }

  ngOnInit(): void {

    
  }

  signOut() {
   this.store.dispatch(LoginAction.logout());


 
  }

}
