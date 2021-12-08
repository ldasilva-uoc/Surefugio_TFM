import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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

  public animalForm: FormGroup;

  constructor(private route: ActivatedRoute, private store:Store<AppState>,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id_ = +params.id;
      console.log(id_)
      this.store.select('animalesApp').subscribe(animales => {
        var animales_list = animales.animales;
        console.log(animales_list)
        var animal = animales_list.find(({id})=> id === id_)
        this.animal = animal;
        console.log(this.animal)
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
      this.tamano = new FormControl(this.animal?.tamaño)

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

  public editAnimal(){
    const animal: Animal = {
      id: this.animal?.id,
      protectora_id:this.animal?.protectora_id,
      nombre: this.nombre.value,
      especie: this.especie.value,
      //imagen: this.imagen.value,
      edad: this.edad.value,
      descripcion: this.descripcion.value,
      sexo: this.sexo.value,
      pais: this.pais.value,
      ciudad: this.ciudad.value,
      provincia: this.provincia.value,
      adopcion: this.adopcion.value,
      acogida: this.acogida.value,
      urgente: this.urgente.value,
      vacunado: this.vacunado.value,
      desparasitado: this.desparasitado.value,
      esterilizado: this.esterilizado.value,
      microchip: this.microchip.value,
      tasa_adopcion: this.tasa_adopcion.value,
      tasa: this.tasa.value,
      envio: this.envio.value,
      tamaño: this.tamano.value,
    }

    this.store.dispatch(AnimalAction.editAnimal({animal}));
  }

}

