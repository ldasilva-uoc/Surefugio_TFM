import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';

import * as LoginAction from '../../actions';
import { User } from 'src/app/shared/models/user.model';
import { Credencial } from 'src/app/shared/models/credencial.model';
import { Auth } from 'src/app/shared/models/auth.model';
import { UserState } from '../../reducers/user.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  public email: FormControl;
  public password: FormControl;
  public loginForm: FormGroup;
  public errorLogin: any;
  public bSubmitted: boolean;

  public userProtectora:boolean|undefined;
  public User: Auth;
  loginState$: UserState;



  constructor(private store: Store<AppState>, private formBuilder: FormBuilder) {

    this.store.select('UserApp').subscribe(login => {
      this.loginState$ = login;
      this.userProtectora = login.auth.protectora;
    });
   
   }

  ngOnInit(): void {
    this.bSubmitted = false;
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required]);
    this.errorLogin = '';
    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password,
    });
  }

  // Se recoge la pulsación sobre el botón de login
  public checkLogin(){
    this.bSubmitted = true;
    const cred: Credencial= {
      email: this.email.value,
      password: this.password.value,
    };

    this.store.dispatch(LoginAction.login({cred}));
  }

}
