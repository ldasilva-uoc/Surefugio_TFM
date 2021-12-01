import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileProtectoraService {

  constructor(private http: HttpClient) { }

  getprotectora(): Observable<any> {
    console.log('service profile')
    return this.http.get('http://127.0.0.1:8000/api/auth/protectora');
  }

}


