import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Animal } from 'src/app/shared/models/animal.model';
import * as AnimalAction from '../../actions';

@Component({
  selector: 'app-animal-edit',
  templateUrl: './animal-edit.component.html',
  styleUrls: ['./animal-edit.component.css']
})
export class AnimalEditComponent implements OnInit {

  animal: Animal|undefined;

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
  public imagenombre?: any;
  public animalForm: FormGroup;

  public haveTasa: Boolean;

  public changeImage:boolean =false;
  public islogin:boolean;
  constructor(private router: Router,private route: ActivatedRoute, private store:Store<AppState>,private formBuilder: FormBuilder) { 
    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
    })
  }

  ngOnInit(): void {
    if(!this.islogin){
      this.router.navigate(['/portada']);
    }
    this.route.params.subscribe(params => {
      const id_ = +params.id;
      console.log(id_)
      this.store.select('animalesApp').subscribe(animales => {
        var animales_list = animales.animales;
        console.log(animales_list)
        var animal = animales_list.find(({id})=> id === id_)
        this.animal = animal;
        console.log(this.animal)

        this.haveTasa = this.animal?.tasa_adopcion === 'tasa';
      });
    })


      this.nombre = new FormControl(this.animal?.nombre),
      this.especie = new FormControl(this.animal?.especie),
      this.imagen = new FormControl(this.animal?.imagen),
      this.edad = new FormControl(this.animal?.edad),
      this.descripcion = new FormControl(this.animal?.descripcion),
      this.sexo = new FormControl(this.animal?.sexo),
      this.pais = new FormControl(this.animal?.pais),
      this.ciudad = new FormControl(this.animal?.ciudad),
      this.provincia = new FormControl(this.animal?.provincia),
      this.adopcion = new FormControl(this.animal?.adopcion),
      this.acogida = new FormControl(this.animal?.acogida),
      this.urgente = new FormControl(this.animal?.urgente),
      this.vacunado = new FormControl(this.animal?.vacunado),
      this.desparasitado = new FormControl(this.animal?.desparasitado),
      this.esterilizado = new FormControl(this.animal?.esterilizado),
      this.microchip = new FormControl(this.animal?.microchip),
      this.tasa_adopcion = new FormControl(this.animal?.tasa_adopcion),
      this.tasa = new FormControl(this.animal?.tasa),
      this.envio = new FormControl(this.animal?.envio),
      this.tamano = new FormControl(this.animal?.tamano)

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
      })

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
    this.changeImage = true;
    this.imagenombre= event.target.files[0];
    console.log(this.imagen);
  }





  public editAnimal(){



    const formData = new FormData();
    formData.append('id', ""+ this.animal?.id);
    formData.append('nombre', this.nombre.value);
    formData.append('especie',this.especie.value,);
    if(this.changeImage ){
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



    this.store.dispatch(AnimalAction.editAnimal({formData}));
  }

}

