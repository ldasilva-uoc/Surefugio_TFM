import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  addAnimal(formData: FormData):Observable<any>{
    console.log("service animal")
  console.log(formData)
    return this.http.post('http://127.0.0.1:8000/api/auth/protectora/animal/add',formData);
  }

  deleteAnimal(animal: Animal):Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/protectora/animal/deleter/'+animal.id);
  }

  editAnimal(formData: FormData):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/protectora/animal/edit/'+formData.get("id"),formData);
  }


}
