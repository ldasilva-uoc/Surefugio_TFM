import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './componentes/login/login.component';
import { SigninComponent } from './componentes/signin/signin.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginComponent,SigninComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports:[LoginComponent,SigninComponent]
})
export class UserModule { }
