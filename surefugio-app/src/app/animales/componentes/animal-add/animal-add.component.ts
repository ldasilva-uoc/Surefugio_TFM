import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Animal } from 'src/app/shared/models/animal.model';
import * as AnimalAction from '../../actions';

@Component({
  selector: 'app-animal-add',
  templateUrl: './animal-add.component.html',
  styleUrls: ['./animal-add.component.css']
})
export class AnimalAddComponent implements OnInit {


  public nombre: FormControl;
  public especie: FormControl;
  public imagen: FormControl;
  public edad: FormControl;
  public descripcion: FormControl;
  public sexo: FormControl;
  public tamano: FormControl;
  public pais: FormControl;
  public ciudad: FormControl;
  public provincia: FormControl;
  public adopcion: FormControl;
  public acogida: FormControl;
  public urgente: FormControl;
  public vacunado: FormControl;
  public desparasitado: FormControl;
  public esterilizado: FormControl;
  public microchip: FormControl;
  public tasa_adopcion: FormControl;
  public tasa: FormControl;
  public envio: FormControl;
  public img: any;
  public animalForm: FormGroup;

  public imagenombre: any = null;
  
  public bSubmitted: boolean;

  
  public haveTasa: Boolean;
  public haveImage:Boolean = false;
  public islogin:boolean;
  constructor( private store:Store<AppState>, private formBuilder: FormBuilder,private router: Router) { 
    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
    })
  }

  


  ngOnInit(): void {

    if(!this.islogin){
      this.router.navigate(['/portada']);
    }

    this.bSubmitted = false;
    this.nombre = new FormControl('', [Validators.required]);
    this.especie = new FormControl('', [Validators.required]);
    this.imagen = new FormControl('');
    this.edad = new FormControl('');
    this.descripcion = new FormControl('');
    this.sexo  = new FormControl('', [Validators.required]);
    this.tamano  = new FormControl('', [Validators.required]);
    this.pais = new FormControl('', [Validators.required]);
    this.ciudad = new FormControl('', [Validators.required]);
    this.provincia = new FormControl('', [Validators.required]);
    this.adopcion = new FormControl(false);
    this.acogida = new FormControl(false);
    this.urgente = new FormControl(false);
    this.vacunado = new FormControl(false);
    this.desparasitado = new FormControl(false);
    this.esterilizado = new FormControl(false);
    this.microchip = new FormControl(false);
    this.tasa_adopcion = new FormControl('', [Validators.required]);
    this.tasa = new FormControl('');
    this.envio = new FormControl(false);
    this.animalForm = this.formBuilder.group({
       nombre: this.nombre,
       especie: this.especie,
       imagen: this.imagen,
       edad: this.edad,
       descripcion: this.descripcion,
       sexo: this.sexo,
       pais: this.pais,
       ciudad: this.ciudad,
       provincia: this.provincia,
       adopcion: this.adopcion,
       acogida: this.acogida,
       urgente: this.urgente,
       vacunado: this.vacunado,
       desparasitado: this.desparasitado,
       esterilizado: this.esterilizado,
       microchip: this.microchip,
       tasa_adopcion: this.tasa_adopcion,
       tasa: this.tasa,
       envio: this.envio,
       tamano: this.tamano
    });
  }

  fieldsChange(target:any):void {
    if(target === "tasa")
    {
      this.haveTasa = true
    }
    else{
      this.haveTasa = false
    }
  }

  onFileChange(event:any){
    this.haveImage=true;
    this.imagenombre= event.target.files[0];
    console.log(this.imagen);
  }


  public addAnimal(){
    this.bSubmitted = true;
    

    const formData = new FormData();

    formData.append('nombre', this.nombre.value);
    formData.append('especie',this.especie.value,);
    if(this.haveImage){
      formData.append('imagen', this.imagenombre);
    }
    
    formData.append('edad', this.edad.value);
    formData.append('descripcion', this.descripcion.value);
    formData.append('sexo', this.sexo.value);
    formData.append('pais', this.pais.value);
    formData.append('ciudad', this.ciudad.value);
    formData.append('provincia', this.provincia.value);
    formData.append('adopcion', +this.adopcion.value +"");
    formData.append('tasa_adopcion', this.tasa_adopcion.value);
    formData.append('acogida', +this.acogida.value +"");
    formData.append('urgente', +this.urgente.value+"");
    formData.append('vacunado', +this.vacunado.value+"");
    formData.append('desparasitado', +this.desparasitado.value+"");
    formData.append('esterilizado', +this.esterilizado.value+"");
    formData.append('microchip', +this.microchip.value+"");
    formData.append('envio', +this.adopcion.value+"");
    if(this.tasa_adopcion.value === "gratis"||this.tasa_adopcion.value === "consultar"){
      formData.append('tasa', "0");
    }
    else{
      formData.append('tasa',this.tasa.value);
    }
    formData.append('tamano', this.tamano.value);



    this.store.dispatch(AnimalAction.addAnimal({formData}));

}
}
