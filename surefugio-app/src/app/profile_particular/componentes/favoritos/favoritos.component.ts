import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAllAnimales } from 'src/app/animales/actions';
import { AppState } from 'src/app/app.reducer';
import { getAllProtectoras } from 'src/app/protectoras/actions';
import { Animal } from 'src/app/shared/models/animal.model';
import { Protectora } from 'src/app/shared/models/protectora.model';
import { deleterAnimalFav, deleterProtectorasFav } from '../../actions';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {

  public protectoras!: Protectora[] ;
  public animales: Animal[];
  public prot: any[];
  public islogin:boolean;
  constructor(private store:Store<AppState>,private router: Router) { 
    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
    })
  this.store.select('profileParticularApp').subscribe(particular=>{

    this.store.select('protectorasApp').subscribe(protectoras => {

    this.protectoras= protectoras.protectoras.filter(protectora => protectora.id === (particular.protectorasFavs.find(fav => fav.protectora_id === protectora.id)?.protectora_id))
     
    });


    this.store.select('animalesApp').subscribe(animales => {
      this.animales = animales.animales.filter(animal => animal.id === (particular.animalsFavs.find(fav => fav.animal_id === animal.id)?.animal_id))
    })
  })

  }

  ngOnInit(): void {
    if(!this.islogin){
      this.router.navigate(['/portada']);
    }
    this.store.dispatch(getAllProtectoras());
    this.store.dispatch(getAllAnimales());
  }

  RemoveFavAnimal(animal:Animal){
    this.store.dispatch(deleterAnimalFav({animal:animal}))
  }

  RemoveFavProtectora(protectora:Protectora){
    this.store.dispatch(deleterProtectorasFav({protectora:protectora}))
  }

}
