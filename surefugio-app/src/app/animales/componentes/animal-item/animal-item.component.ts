import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { acoger, addAnimalFav, adoptar, deleterAnimalFav } from 'src/app/profile_particular/actions';
import { ProfileParticularState } from 'src/app/profile_particular/reducers';
import { getAllProtectoras } from 'src/app/protectoras/actions';
import { Animal } from 'src/app/shared/models/animal.model';
import { MessageService } from 'src/app/shared/service/message.service';
import { getAllAnimales } from '../../actions';
import { AnimalesService } from '../../service/animales.service';

@Component({
  selector: 'app-animal-item',
  templateUrl: './animal-item.component.html',
  styleUrls: ['./animal-item.component.css']
})
export class AnimalItemComponent implements OnInit {
  public isProtectora:boolean|undefined;
  public islogin:boolean;
  animal!: Animal |undefined;
  protectora_nom: string|undefined;
  protectora_id: number|undefined;

  public message:String;
  public favorito:boolean;

  ProfileParticularState$: ProfileParticularState;


  public buttonadoptar: Boolean
  public buttonacoger: Boolean
  public buttonaddfavorito: Boolean
  public buttondeletefavorito: Boolean

  constructor(private route: ActivatedRoute, private store:Store<AppState>,private service:AnimalesService ,private messageSer: MessageService) {
    this.route.params.subscribe(params => {

     
      const id_ = +params.id;
     
      this.store.select('animalesApp').subscribe(animales => {
        var animales_list = animales.animales;
        var animal = animales_list.find(({id})=> id === id_)
        this.animal = animal;
        

      });
      this.store.select('protectorasApp').subscribe(protectoras => {

        this.protectora_nom = protectoras.protectoras.find(x => x.id === this.animal?.protectora_id)?.nombre;
        this.protectora_id = protectoras.protectoras.find(x => x.id === this.animal?.protectora_id)?.id;
        
      });


    })

    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
      this.isProtectora = login.protectora;

      if(!this.isProtectora){

        this.store.select('profileParticularApp').subscribe(particular=>{
          this.ProfileParticularState$ =particular;
          this.favorito = particular.animalsFavs.some(favorito => {
            return favorito.animal_id === this.animal?.id})
          
          
          console.log("Es favorito ? : "+this.favorito)
        })
      }

    });

   }


  ngOnInit(): void {
    this.buttonadoptar=false
    this.buttonacoger=false
    this.buttonaddfavorito=false
    this.buttondeletefavorito=false
    this.store.dispatch(getAllProtectoras());
    this.store.dispatch(getAllAnimales());
  }

  AddFav(){

    this.buttonaddfavorito = true;
    this.store.dispatch(addAnimalFav({animal:this.animal}))

  }

  RemoveFav(){
    if (confirm('¿Seguro que quieres quitar de favoritos?')){
    this.buttondeletefavorito = true
    this.store.dispatch(deleterAnimalFav({animal:this.animal}))}
  }

  acoger(){
    this.buttonacoger = true;
    this.store.dispatch(acoger({idP:this.protectora_id, idA:this.animal?.id}))
  }

  adoptar(){
    this.buttonadoptar = true
    this.store.dispatch(adoptar({idP:this.protectora_id, idA:this.animal?.id}))


  }
}
