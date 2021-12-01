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

  animal!: Animal |undefined;

  constructor(private route: ActivatedRoute, private store:Store<AppState>) {
    this.route.params.subscribe(params => {
      const id_ = +params.id;
      console.log(id_)
      this.store.select('animalesApp').subscribe(animales => {
        var animales_list = animales.animales;
        console.log(animales_list)
        var animal = animales_list.find(({id})=> id === id_)
        this.animal = animal;
        console.log(this.animal)
      });
    })
   }

  ngOnInit(): void {
 
  }

}
