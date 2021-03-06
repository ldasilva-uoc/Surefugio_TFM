import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Protectora } from 'src/app/shared/models/protectora.model';
import { User } from 'src/app/shared/models/user.model';
import { UserState } from '../../reducers';
import * as UserAction from '../../actions';

@Component({
  selector: 'app-signup-protectora',
  templateUrl: './signup-protectora.component.html',
  styleUrls: ['./signup-protectora.component.css']
})
export class SignupProtectoraComponent implements OnInit {

  public nombre: FormControl;
  public imagen: FormControl;
  public voluntariado: FormControl;
  public req_voluntario: FormControl;
  public telefono: FormControl;
  public web: FormControl;
  public facebook: FormControl;
  public instagram: FormControl;
  public historia: FormControl;
  public pais: FormControl;
  public ciudad: FormControl;
  public provincia: FormControl;
  public messageError: any;

  public needvoluntariado:boolean;
  public imagenombre: any = null;
  public haveImage:Boolean = false;
  public user$: User;
  public protectora:Protectora;
  RegistroState$: UserState;
  protectoraForm: FormGroup;

  constructor( private store:Store<AppState>, private formBuilder: FormBuilder) { 

  this.store.select('UserApp').subscribe(user=> {
    this.messageError = user.error
    this.RegistroState$ = user;
    this.user$ = user.auth;
  })

  }

  onFileChange(event:any){
    this.haveImage=true;
    this.imagenombre= event.target.files[0];
    console.log(this.imagen);
  }

  ngOnInit(): void {

    this.nombre = new FormControl('', [Validators.required]);
    this.voluntariado = new FormControl(false, [Validators.required]);
    this.telefono = new FormControl('', [Validators.required]);
    this.pais = new FormControl('', [Validators.required]);
    this.ciudad = new FormControl('', [Validators.required]);
    this.provincia = new FormControl('', [Validators.required]);
    this.req_voluntario = new FormControl('');
    this.web = new FormControl('');
    this.facebook = new FormControl('');
    this.instagram = new FormControl('');
    this.historia = new FormControl('');

    this.protectoraForm = this.formBuilder.group({
    nombre : this.nombre,
    imagen : this.imagen,
    voluntariado :  this.voluntariado,
    req_voluntario : this.req_voluntario,
    telefono : this.telefono, 
    web : this.web,
    facebook : this.facebook,
    instagram : this.instagram,
    historia : this.historia,
    pais : this.pais,
    ciudad : this.ciudad,
    provincia :  this.provincia
    });
  }

  fieldsChange(values:any):void {
    this.needvoluntariado=  values.currentTarget.checked;
  }

  public addProtectora(){

    this.protectora= {
      nombre: this.nombre.value,
      voluntariado: this.voluntariado.value,
      req_voluntario: this.req_voluntario?.value,
      telefono : this.telefono?.value,
      web : this.web?.value,
      facebook: this.facebook?.value,
      instagram:this.instagram?.value,
      historia:this.historia?.value,
      pais: this.pais.value,
      ciudad:this.ciudad.value,
      provincia: this.provincia.value,
      user_id: this.user$.id,      
    }

    const formData = new FormData();

    formData.append('nombre', this.nombre.value);
    formData.append('voluntariado',+this.voluntariado.value+"");
    if(this.haveImage){
      formData.append('imagen', this.imagenombre);
    }
    
    formData.append('req_voluntario', this.req_voluntario.value);
    formData.append('telefono', this.telefono.value);
    formData.append('web', this.web.value);
    formData.append('pais', this.pais.value);
    formData.append('ciudad', this.ciudad.value);
    formData.append('provincia', this.provincia.value);
    formData.append('facebook', this.facebook.value);
    formData.append('instagram', this.instagram.value);
    formData.append('historia', this.historia.value );
    formData.append('user_id', this.user$.id+"");

    console.log(this.protectora)

   this.store.dispatch(UserAction.registroProtectora({formData: formData}))
  }


}
