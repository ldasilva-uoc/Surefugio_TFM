import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Protectora } from 'src/app/shared/models/protectora.model';
import { getAllProtectoras } from '../../actions';
import { ProtectorasService } from '../../service/protectoras.service';

@Component({
  selector: 'app-protectora-list',
  templateUrl: './protectora-list.component.html',
  styleUrls: ['./protectora-list.component.css']
})
export class ProtectoraListComponent implements OnInit {

  protectoras: Protectora[];

  constructor(private protectoraService: ProtectorasService, private store: Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('protectorasApp').subscribe(protectoras => this.protectoras = protectoras.protectoras)
    this.store.dispatch(getAllProtectoras());

  }

}
