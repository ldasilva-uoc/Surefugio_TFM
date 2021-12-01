import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Animal } from 'src/app/shared/models/animal.model';
import { Protectora } from 'src/app/shared/models/protectora.model';

@Component({
  selector: 'app-protectora-item',
  templateUrl: './protectora-item.component.html',
  styleUrls: ['./protectora-item.component.css']
})
export class ProtectoraItemComponent implements OnInit {

  protectora!: Protectora |undefined;
  animales: Animal[];

  constructor(private route: ActivatedRoute, private store:Store<AppState>) {
    this.route.params.subscribe(params => {
      const id_ = +params.id;
      this.store.select('protectorasApp').subscribe(protectoras => {
        var protectoras_list = protectoras.protectoras;
        var protectora = protectoras_list.find(({id})=> id === id_)
        this.protectora = protectora;
      });

      this.store.select('animalesApp').subscribe(animales => {
        this.animales = animales.animales.filter(animal => animal.protectora_id ===id_);  
      });
    })


 

   }
  ngOnInit(): void {
  }

}
