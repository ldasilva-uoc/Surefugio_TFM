import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Animal } from 'src/app/shared/models/animal.model';
import { getAllAnimales } from '../../actions';
import { AnimalesService } from '../../service/animales.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animales: Animal[];
  constructor(private animalService: AnimalesService, private store: Store<AppState>) { }

  
  ngOnInit(): void {
    this.store.select('animalesApp').subscribe(animales => this.animales = animales.animales);

    this.store.dispatch(getAllAnimales());
  }

}
