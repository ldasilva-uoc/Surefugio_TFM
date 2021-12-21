import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { User } from 'src/app/shared/models/user.model';
import { UserState } from '../../reducers';
import * as UserAction from '../../actions';
import { ConfirmedValidator } from 'src/app/shared/Validators/checkValidator';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public email: FormControl;
  public password: FormControl;
  public password_confirmation: FormControl;
  public protectora: boolean = true;
  public messageError: any;
  loginState$: UserState;
  siginForm: FormGroup;
  public submit: Boolean;
  public errorsigninLogin: any;

  public user: User;

  constructor( private store:Store<AppState>, private formBuilder: FormBuilder) { 

  this.store.select('UserApp').subscribe(login => {
    this.messageError = login.error
    this.loginState$ = login;
  })

  }

  ngOnInit(): void {
    this.submit=false;
    this.email = new FormControl('', [Validators.required , Validators.email]);
    this.password = new FormControl('', [Validators.required,Validators.minLength(8)]);
    this.password_confirmation = new FormControl('', [Validators.required]);

    this.siginForm = this.formBuilder.group({

      email: this.email,
      password: this.password,
      password_confirmation:this.password_confirmation,
    }, { validator: ConfirmedValidator('password', 'password_confirmation') });
  }

  isProtectora()
  {
    this.protectora = true
  }

  isParticular()
  {
    this.protectora = false
  }

  public addUser(){
    this.submit= true;
    this.user = {
      email: this.email.value,
      password: this.password.value,
      password_confirmation: this.password_confirmation.value,
      protectora: this.protectora,
    }

    console.log(this.user)

    if(this.protectora)
    { 
      this.store.dispatch(UserAction.signupUserProtectora({user: this.user}))
    }
    else{
      this.store.dispatch(UserAction.signupUserParticular({user: this.user}))
    }

   
  }

}
