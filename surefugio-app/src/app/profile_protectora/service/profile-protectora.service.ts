import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Protectora } from 'src/app/shared/models/protectora.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileProtectoraService {

  constructor(private http: HttpClient) { }

  getprotectora(): Observable<any> {
    console.log('service profile protectora')
    return this.http.get('http://127.0.0.1:8000/api/auth/protectora');
  }

  editProtectora(formData: FormData): Observable<any> {
    console.log('service profile protectora')
    return this.http.post('http://127.0.0.1:8000/api/auth/protectora/edit',formData);
  }


}


