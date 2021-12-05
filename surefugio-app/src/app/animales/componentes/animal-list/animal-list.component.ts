import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Animal } from 'src/app/shared/models/animal.model';
import { User } from 'src/app/shared/models/user.model';
import { getAllAnimales } from '../../actions';
import { AnimalesService } from '../../service/animales.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  public isProtectora:boolean|undefined;
  public islogin:boolean;
  public user: User;

  animales: Animal[];

  constructor(private animalService: AnimalesService, private store: Store<AppState>) { }

  
  ngOnInit(): void {
    this.store.select('animalesApp').subscribe(animales => {
      this.animales = animales.animales
      this.animales.map(animal => {
        if(animal.especie === "gato")
        {
          console.log(animal.especie)
        
        } 
        else 
        {
          
        }
  
    })
    });

    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
      this.isProtectora = login.protectora;
      this.user = login.auth;
    });

    this.store.dispatch(getAllAnimales());
  }



}
