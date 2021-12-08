import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/shared/models/animal.model';
import { Protectora } from 'src/app/shared/models/protectora.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileParticularService {

  constructor(private http: HttpClient) { }

  getparticular(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/particular');
  }

  getProtectorasFav():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/particular/favorito/protectora');
  }

  getAnimalesFav():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/particular/favorito/animal');
  }


  addAnimalesFav(animal: Animal):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/particular/favorito/animal/add/' + animal.id,null);
  }

  addProtectorasFav(protectora: Protectora):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/particular/favorito/protectora/add/' + protectora.id,null);
  }


  
  deleterAnimalesFav(animal: Animal):Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/particular/favorito/animal/deleter' + animal.id);
  }

  deleterProtectorasFav(protectora: Protectora):Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/particular/favorito/protectora/deleter' + protectora.id);
  }



}
