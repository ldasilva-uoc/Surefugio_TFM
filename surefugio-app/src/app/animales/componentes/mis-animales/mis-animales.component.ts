import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { deleteAnimal, getAllAnimales } from 'src/app/animales/actions';
import { AppState } from 'src/app/app.reducer';
import { Animal } from 'src/app/shared/models/animal.model';


@Component({
  selector: 'app-mis-animales',
  templateUrl: './mis-animales.component.html',
  styleUrls: ['./mis-animales.component.css']
})
export class MisAnimalesComponent implements OnInit {


  animales: Animal[];
  id_protectora$: number|undefined;

  public islogin:boolean;
  constructor(private store: Store<AppState>,private router: Router) { 
    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
    })
  }

  ngOnInit(): void {
    if(!this.islogin){
      this.router.navigate(['/portada']);
    }
    this.store.select('profileProtectoraApp').subscribe(protectora => {
      this.id_protectora$ = protectora.protectora?.id;
      console.log(protectora.protectora);
      this.store.select('animalesApp').subscribe(animales => {
        this.animales = animales.animales.filter(animal => animal.protectora_id === this.id_protectora$);  
      });
    });

    this.store.dispatch(getAllAnimales());

  }

  deleteAnimal(animal: Animal){
    console.log(animal);
    if (confirm('¿Seguro que quieres eliminar este animal?')) {
      this.store.dispatch(deleteAnimal({animal}));
    }
    

  }

}
