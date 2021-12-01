import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoluntariadoListComponent } from './componentes/voluntariado-list/voluntariado-list.component';
import { ProtectoraListComponent } from './componentes/protectora-list/protectora-list.component';
import { ProtectoraItemComponent } from './componentes/protectora-item/protectora-item.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    VoluntariadoListComponent,
    ProtectoraListComponent,
    ProtectoraItemComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    VoluntariadoListComponent,
    ProtectoraListComponent,
    ProtectoraItemComponent,
  
  ]
})
export class ProtectoraModule { }
