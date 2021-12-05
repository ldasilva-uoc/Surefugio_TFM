import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Protectora } from 'src/app/shared/models/protectora.model';
import { User } from 'src/app/shared/models/user.model';
import { getAllProtectoras } from '../../actions';
import { ProtectorasService } from '../../service/protectoras.service';

@Component({
  selector: 'app-protectora-list',
  templateUrl: './protectora-list.component.html',
  styleUrls: ['./protectora-list.component.css']
})
export class ProtectoraListComponent implements OnInit {
  public isProtectora:boolean|undefined;
  public islogin:boolean;
  public user: User;

  protectoras: Protectora[];

  constructor(private protectoraService: ProtectorasService, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('protectorasApp').subscribe(protectoras => this.protectoras = protectoras.protectoras)
    this.store.dispatch(getAllProtectoras());
    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
      this.isProtectora = login.protectora;
      this.user = login.auth;
    });
  }

}
