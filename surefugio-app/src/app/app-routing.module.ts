import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalAddComponent } from './animales/componentes/animal-add/animal-add.component';
import { AnimalEditComponent } from './animales/componentes/animal-edit/animal-edit.component';
import { AnimalItemComponent } from './animales/componentes/animal-item/animal-item.component';
import { AnimalListComponent } from './animales/componentes/animal-list/animal-list.component';
import { MisAnimalesComponent } from './animales/componentes/mis-animales/mis-animales.component';

import { ProtectoraItemComponent } from './protectoras/componentes/protectora-item/protectora-item.component';
import { ProtectoraListComponent } from './protectoras/componentes/protectora-list/protectora-list.component';
import { VoluntariadoListComponent } from './protectoras/componentes/voluntariado-list/voluntariado-list.component';
import { PortadaComponent } from './shared/views/portada/portada.component';
import { LoginComponent } from './user/componentes/login/login.component';
import { SigninComponent } from './user/componentes/signin/signin.component';
import { SignupParticularComponent } from './user/componentes/signup-particular/signup-particular.component';
import { SignupProtectoraComponent } from './user/componentes/signup-protectora/signup-protectora.component';

const routes: Routes = [
  {path: '', component:PortadaComponent},
  {path: 'animales/list', component:AnimalListComponent},
  {path: 'animal/:id', component:AnimalItemComponent},
  {path: 'protectoras/list', component:ProtectoraListComponent},
  {path: 'protectora/:id',component:ProtectoraItemComponent},
  {path: 'voluntariado/list', component:VoluntariadoListComponent},
  {path: 'login', component:LoginComponent},
  {path: 'registrarse', component:SigninComponent},
  {path: 'portada', component:PortadaComponent},
  {path: 'misanimales', component:MisAnimalesComponent},
  {path: 'protectora/animal/add', component:AnimalAddComponent},
  {path: 'protectora/animal/edit/:id', component:AnimalEditComponent},
  {path: 'registro/protectora', component:SignupProtectoraComponent},
  {path:'registro/particular',component:SignupParticularComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
