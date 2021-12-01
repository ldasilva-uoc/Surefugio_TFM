import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalListComponent } from './componentes/animal-list/animal-list.component';
import { AnimalItemComponent } from './componentes/animal-item/animal-item.component';
import { RouterModule } from '@angular/router';
import { AnimalAddComponent } from './componentes/animal-add/animal-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MisAnimalesComponent } from './componentes/mis-animales/mis-animales.component';
import { AnimalEditComponent } from './componentes/animal-edit/animal-edit.component';



@NgModule({
  declarations: [AnimalListComponent, AnimalItemComponent, AnimalAddComponent,
    MisAnimalesComponent,
    AnimalEditComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[AnimalListComponent, AnimalItemComponent,
    MisAnimalesComponent]
})
export class AnimalModule { }
