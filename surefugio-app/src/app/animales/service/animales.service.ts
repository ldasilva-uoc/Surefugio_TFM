import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/shared/models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalesService {

  constructor(private http: HttpClient) { }

  getAnimales(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/list/animales');
  }

  addAnimal(animal: Animal):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/protectora/animal/add',animal);
  }

  deleteAnimal(animal: Animal):Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/protectora/animal/deleter/'+animal.id);
  }

  editAnimal(animal: Animal):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/protectora/animal/edit/'+animal.id,animal);
  }
}
