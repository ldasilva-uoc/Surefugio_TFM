import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { SigninComponent } from './componentes/signin/signin.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupProtectoraComponent } from './componentes/signup-protectora/signup-protectora.component';
import { SignupParticularComponent } from './componentes/signup-particular/signup-particular.component';



@NgModule({
  declarations: [LoginComponent,SigninComponent, SignupProtectoraComponent, SignupParticularComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[LoginComponent,SigninComponent]
})
export class UserModule { }
