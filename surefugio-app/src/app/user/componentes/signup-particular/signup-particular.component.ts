import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Particular } from 'src/app/shared/models/particular.model';
import { User } from 'src/app/shared/models/user.model';
import { UserState } from '../../reducers';
import * as UserAction from '../../actions';

@Component({
  selector: 'app-signup-particular',
  templateUrl: './signup-particular.component.html',
  styleUrls: ['./signup-particular.component.css']
})
export class SignupParticularComponent implements OnInit {

  public nombre: FormControl;
  public apellido: FormControl;
  public imagen: FormControl;
  public telefono: FormControl;
  public pais: FormControl;
  public ciudad: FormControl;
  public provincia: FormControl;

  public messageError: any;
  RegistroState$: UserState;
  particularForm: FormGroup;


  public user$: User;
  public particular:Particular;

  constructor(private store:Store<AppState>, private formBuilder: FormBuilder) { 
    this.store.select('UserApp').subscribe(user=> {
      this.messageError = user.error
      this.RegistroState$ = user;
      this.user$ = user.auth;
    })
  }

  ngOnInit(): void {

    this.nombre = new FormControl('', [Validators.required]);
    this.apellido = new FormControl('', [Validators.required]);
    this.telefono = new FormControl('', [Validators.required]);
    this.pais = new FormControl('', [Validators.required]);
    this.ciudad = new FormControl('', [Validators.required]);
    this.provincia = new FormControl('', [Validators.required]);
 
    this.particularForm = this.formBuilder.group({
      nombre : this.nombre,
      apellido:this.apellido,
      imagen : this.imagen,
      telefono : this.telefono, 
      pais : this.pais,
      ciudad : this.ciudad,
      provincia :  this.provincia
      });
  }

  public addParticular(){
    this.particular= {
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      telefono : this.telefono?.value,
      pais: this.pais.value,
      ciudad:this.ciudad.value,
      provincia: this.provincia.value,
      user_id: this.user$.id,      
    }

    console.log(this.particular)

   this.store.dispatch(UserAction.registroParticular({particular: this.particular}))
  }



}
