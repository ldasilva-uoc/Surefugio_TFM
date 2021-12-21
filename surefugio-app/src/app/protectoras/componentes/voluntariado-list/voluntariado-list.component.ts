import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Protectora } from 'src/app/shared/models/protectora.model';
import { User } from 'src/app/shared/models/user.model';
import { getAllProtectoras } from '../../actions';

@Component({
  selector: 'app-voluntariado-list',
  templateUrl: './voluntariado-list.component.html',
  styleUrls: ['./voluntariado-list.component.css']
})
export class VoluntariadoListComponent implements OnInit {
  protectoras: Protectora[];

  constructor(private store: Store<AppState>) { 
    this.store.select('protectorasApp').subscribe(protectoras => {
         this.protectoras = protectoras.protectoras.filter(protectora => protectora.voluntariado)
    })
  
  }

  ngOnInit(): void {
    
 
    this.store.dispatch(getAllProtectoras());
 

  }

}
