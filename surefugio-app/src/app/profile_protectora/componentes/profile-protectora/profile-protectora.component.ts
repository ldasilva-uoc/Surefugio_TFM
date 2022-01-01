import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Protectora } from 'src/app/shared/models/protectora.model';
import { User } from 'src/app/shared/models/user.model';
import { UserState } from 'src/app/user/reducers';
import { ProfileProtectoraState } from '../../reducers';
import * as UserAction from '../../actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-protectora',
  templateUrl: './profile-protectora.component.html',
  styleUrls: ['./profile-protectora.component.css']
})
export class ProfileProtectoraComponent implements OnInit {
  
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

  userState$: UserState;
  protectoraState$: ProfileProtectoraState;
  protectoraForm: FormGroup;

  public islogin:boolean;


  constructor(private store:Store<AppState>, private formBuilder: FormBuilder, private router: Router) { 
    this.store.select('UserApp').subscribe(user=> {
      this.messageError = user.error
      this.userState$ = user;
      this.user$ = user.auth;
      this.islogin = user.loggedIn;
    })

    this.store.select('profileProtectoraApp').subscribe(protectora=>{
      this.protectora = protectora.protectora;
      this.protectoraState$ = protectora;
    })
  }

  onFileChange(event:any){
    this.haveImage=true;
    this.imagenombre= event.target.files[0];
    console.log(this.imagen);
  }


  ngOnInit(): void {
    if(!this.islogin){
      this.router.navigate(['/portada']);
    }
 
    this.formulario()

  }

  formulario(){
    this.nombre = new FormControl(this.protectora.nombre, [Validators.required]);
    this.voluntariado = new FormControl(this.protectora.voluntariado, [Validators.required]);
    this.telefono = new FormControl(this.protectora.telefono, [Validators.required]);
    this.pais = new FormControl(this.protectora.pais, [Validators.required]);
    this.ciudad = new FormControl(this.protectora.ciudad, [Validators.required]);
    this.provincia = new FormControl(this.protectora.provincia, [Validators.required]);
    this.req_voluntario = new FormControl(this.protectora.req_voluntario);
    this.web = new FormControl(this.protectora.web);
    this.facebook = new FormControl(this.protectora.facebook);
    this.instagram = new FormControl(this.protectora.instagram);
    this.historia = new FormControl(this.protectora.historia);
    this.imagen = new FormControl(this.protectora.imagen);

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

  public EditProtectora(){


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
    if(confirm("¿Estas seguro que quieres cambiar tus datos?")){
   this.store.dispatch(UserAction.editProtectora({formData: formData})); }
  }


}

