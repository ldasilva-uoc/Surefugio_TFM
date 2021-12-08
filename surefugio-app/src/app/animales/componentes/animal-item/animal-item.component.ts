import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Animal } from 'src/app/shared/models/animal.model';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css']
})
export class AnimalItemComponent implements OnInit {
  public isProtectora:boolean|undefined;
  public islogin:boolean;
  animal!: Animal |undefined;
  protectora_nom: string|undefined;

  constructor(private route: ActivatedRoute, private store:Store<AppState>) {
    this.route.params.subscribe(params => {
      const id_ = +params.id;
      this.store.select('animalesApp').subscribe(animales => {
        var animales_list = animales.animales;
        var animal = animales_list.find(({id})=> id === id_)
        this.animal = animal;
      });
      this.store.select('protectorasApp').subscribe(protectoras => {
        this.protectora_nom = protectoras.protectoras.find(x => x.id === this.animal?.protectora_id)?.nombre;
     
      });
    })

    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
      this.isProtectora = login.protectora;

    });

   }

  ngOnInit(): void {
 
  }

}
