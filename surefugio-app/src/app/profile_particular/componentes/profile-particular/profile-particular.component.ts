import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Particular } from 'src/app/shared/models/particular.model';
import { User } from 'src/app/shared/models/user.model';
import { UserState } from 'src/app/user/reducers';
import * as UserAction from '../../actions';
import { ProfileParticularState } from '../../reducers';

@Component({
  selector: 'app-profile-particular',
  templateUrl: './profile-particular.component.html',
  styleUrls: ['./profile-particular.component.css']
})
export class ProfileParticularComponent implements OnInit {
  public nombre: FormControl;
  public apellido: FormControl;
  public imagen: FormControl;
  public telefono: FormControl;
  public pais: FormControl;
  public ciudad: FormControl;
  public provincia: FormControl;
  public imagenombre: any = null;
  public haveImage:Boolean = false;
  public messageError: any;


  UserState$: UserState;
  ParticularState$: ProfileParticularState;
  particularForm: FormGroup;

  public QuieroEditar:boolean=false;
  public user$: User;
  public particular:Particular;
  public islogin:boolean;
  constructor(private store:Store<AppState>, private formBuilder: FormBuilder,private router: Router) { 
    this.store.select('UserApp').subscribe(user=> {
      this.messageError = user.error
      this.UserState$ = user;
      this.user$ = user.auth;
      this.islogin = user.loggedIn;
    })

    this.store.select('profileParticularApp').subscribe(particular=>{
      this.particular = particular.particular;
      this.ParticularState$ = particular;
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
    this.formulario();


  }
  formulario(){

    this.nombre = new FormControl({value: this.particular.nombre, disabled:true}, [Validators.required]);
    this.apellido = new FormControl({value: this.particular.apellido, disabled:true}, [Validators.required]);
    this.telefono = new FormControl({value: this.particular.telefono, disabled:true}, [Validators.required]);
    this.pais = new FormControl({value: this.particular.pais, disabled:true}, [Validators.required]);
    this.ciudad = new FormControl({value: this.particular.ciudad, disabled:true}, [Validators.required]);
    this.provincia = new FormControl({value: this.particular.provincia, disabled:true}, [Validators.required]);
 
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

  edit(){
    this.QuieroEditar = true;
    this.particularForm.enable()
  }

  
  cancelarEdit(){

    if(confirm("¿Estas seguro que quieres cancelar la edición de tus datos?")){
      this.formulario()
      this.QuieroEditar = false;
      this.particularForm.disable()
    }

  }


  public EditParticular(){
    this.particular= {
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      telefono : this.telefono?.value,
      pais: this.pais.value,
      ciudad:this.ciudad.value,
      provincia: this.provincia.value,
      user_id: this.user$.id,      
    }

    const formData = new FormData();

    formData.append('nombre', this.nombre.value);
    formData.append('apellido',this.apellido.value);
    if(this.haveImage){
      formData.append('imagen', this.imagenombre);
    }
    formData.append('telefono', this.telefono.value);
    formData.append('pais', this.pais.value);
    formData.append('ciudad', this.ciudad.value);
    formData.append('provincia', this.provincia.value);
    formData.append('user_id', this.user$.id+"");

    console.log(this.particular)

   this.store.dispatch(UserAction.editParticular({formData : formData }))
  }


}
