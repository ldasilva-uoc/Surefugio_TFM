import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAllAnimales } from 'src/app/animales/actions';
import { AppState } from 'src/app/app.reducer';
import { addProtectorasFav, deleterProtectorasFav, voluntariado } from 'src/app/profile_particular/actions';
import { ProfileParticularState } from 'src/app/profile_particular/reducers';
import { Animal } from 'src/app/shared/models/animal.model';
import { Protectora } from 'src/app/shared/models/protectora.model';
import { getAllProtectoras } from '../../actions';
import { ProtectorasService } from '../../service/protectoras.service';

@Component({
  selector: 'app-protectora-item',
  templateUrl: './protectora-item.component.html',
  styleUrls: ['./protectora-item.component.css']
})
export class ProtectoraItemComponent implements OnInit {
  public isProtectora:boolean|undefined;
  public islogin:boolean;
  protectora!: Protectora |undefined;
  animales: Animal[];
  urlImage: string = "http://127.0.0.1:8000/storage/";
  url: string;
  ProfileParticularState$: ProfileParticularState;
  public buttonavoluntariado:Boolean;
  public buttonaddfavorito: Boolean
  public buttondeletefavorito: Boolean

  public msgVoluntariado:any;

  public favorito:boolean;

  constructor(private route: ActivatedRoute, private store:Store<AppState>, private router: Router, private service:ProtectorasService) {
    this.route.params.subscribe(params => {
      const id_ = +params.id;
      this.store.select('protectorasApp').subscribe(protectoras => {
        var protectoras_list = protectoras.protectoras;
        var protectora = protectoras_list.find(({id})=> id === id_)
        this.protectora = protectora;
        this.url= "".concat(this.urlImage,this.protectora?.imagen +"");
  
      });

      this.store.select('animalesApp').subscribe(animales => {
        this.animales = animales.animales.filter(animal => animal.protectora_id ===id_);  
      });
    })

    this.store.select('UserApp').subscribe(login => {
      this.islogin = login.loggedIn;
      this.isProtectora = login.protectora;

      if(!this.isProtectora){

        this.store.select('profileParticularApp').subscribe(particular=>{
          this.ProfileParticularState$=particular;
          this.favorito = particular.protectorasFavs.some(favorito => {
            return favorito.protectora_id === this.protectora?.id})
          
          
          console.log("Es favorito ? : "+this.favorito)
        })
      }

    });
 

   }
  ngOnInit(): void {
    this.buttonavoluntariado=false;
    this.buttonaddfavorito=false
    this.buttondeletefavorito=false
    this.store.dispatch(getAllAnimales());
    this.store.dispatch(getAllProtectoras());
  }

  AddFav(){

    this.store.dispatch(addProtectorasFav({protectora:this.protectora}))
    this.buttonaddfavorito = true;
  }

  RemoveFav(){
    this.buttondeletefavorito = true
    this.store.dispatch(deleterProtectorasFav({protectora:this.protectora}))
  }

  voluntariado(){
    this.buttonavoluntariado=true;
      this.store.dispatch(voluntariado({idP: this.protectora?.id}))
  }

}

