import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Animal } from 'src/app/shared/models/animal.model';
import { Protectora } from 'src/app/shared/models/protectora.model';
import { MessageService } from 'src/app/shared/service/message.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileParticularService {

  constructor(private http: HttpClient,private messageService: MessageService) { }

  getparticular(): Observable<any> {
    return this.http.get('http://127.0.0.1:8000/api/auth/particular');
  }

  getProtectorasFav():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/particular/favorito/protectora');
  }

  getAnimalesFav():Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/particular/favorito/animal');
  }


  addAnimalesFav(animal: Animal|undefined):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/particular/favorito/animal/add/' + animal?.id,null);
  }

  addProtectorasFav(protectora: Protectora |undefined):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/auth/particular/favorito/protectora/add/' + protectora?.id,null);
  }


  
  deleterAnimalesFav(animal: Animal |undefined):Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/particular/favorito/animal/deleter/' + animal?.id);
  }

  deleterProtectorasFav(protectora: Protectora |undefined):Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/auth/particular/favorito/protectora/deleter/' + protectora?.id);
  }


  Adoptar(idP: number|undefined, idA:number|undefined ){
    return this.http.post('http://127.0.0.1:8000/api/auth/adoptar/'+idP+'/'+idA,null).pipe(
      tap(_=>this.log('Se ha enviado la petición a la protectora! pronto se pondrá en contacto contigo'))

    );
  }

  Acoger(idP: number|undefined,idA:number|undefined){
    return this.http.post('http://127.0.0.1:8000/api/auth/acoger/'+idP+'/'+idA,null)
  }

  Voluntariado(idP: number|undefined){
    return this.http.post('http://127.0.0.1:8000/api/auth/voluntariado/'+idP,null)
  }
  editParticular(formData: FormData): Observable<any> {

    return this.http.post('http://127.0.0.1:8000/api/auth/particular/edit',formData);
  }


  private log(message: string) {
    this.messageService.add(message);
  }

}
