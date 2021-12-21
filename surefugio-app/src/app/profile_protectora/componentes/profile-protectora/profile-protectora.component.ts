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

  public QuieroEditar:boolean;
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
    this.QuieroEditar = false;
    this.formulario()

  }

  formulario(){
    this.nombre = new FormControl({value: this.protectora.nombre, disabled:true}, [Validators.required]);
    this.voluntariado = new FormControl({value:this.protectora.voluntariado,disabled:true}, [Validators.required]);
    this.telefono = new FormControl({value:this.protectora.telefono,disabled:true}, [Validators.required]);
    this.pais = new FormControl({value:this.protectora.pais,disabled:true}, [Validators.required]);
    this.ciudad = new FormControl({value:this.protectora.ciudad,disabled:true}, [Validators.required]);
    this.provincia = new FormControl({value:this.protectora.provincia,disabled:true}, [Validators.required]);
    this.req_voluntario = new FormControl({value:this.protectora.req_voluntario,disabled:true});
    this.web = new FormControl({value:this.protectora.web,disabled:true});
    this.facebook = new FormControl({value:this.protectora.facebook,disabled:true});
    this.instagram = new FormControl({value:this.protectora.instagram,disabled:true});
    this.historia = new FormControl({value:this.protectora.historia,disabled:true});
    this.imagen = new FormControl({value:this.protectora.imagen,disabled:true});

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

   this.store.dispatch(UserAction.editProtectora({formData: formData}));
   this.protectoraForm.disable()
   this.QuieroEditar = false;
  }

  edit(){
    this.QuieroEditar = true;
    this.protectoraForm.enable()
  }

  cancelarEdit(){

    if(confirm("¿Estas seguro que quieres cancelar la edición de tus datos?")){
      this.formulario()
      this.QuieroEditar = false;
      this.protectoraForm.disable()
    }

  }


}
