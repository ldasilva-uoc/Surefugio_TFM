import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credencial } from 'src/app/shared/models/credencial.model';
import { Particular } from 'src/app/shared/models/particular.model';
import { Protectora } from 'src/app/shared/models/protectora.model';
import { User } from 'src/app/shared/models/user.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  errors: null;

  constructor(private http: HttpClient, private tokenService: TokenService) {
 
  }
  
  login(user: Credencial): Observable<any> {

    var login = this.http.post<any>('http://127.0.0.1:8000/api/auth/login', user);
    login.subscribe(
      result => {
        this.tokenService.handleData(result.access_token);
      },
      error => {
        this.errors = error.error;
      }
    );
    return login;
  }

  register(user: User): Observable<any> {

    return this.http.post('http://127.0.0.1:8000/api/auth/register', user);
  }

  registerProtectora(formData: FormData): Observable<any> {

    return this.http.post('http://127.0.0.1:8000/api/auth/protectora/register', formData);
  }


  registerParticular(formData: FormData): Observable<any> {

    return this.http.post('http://127.0.0.1:8000/api/auth/particular/register', formData);
  }




  logout(): Observable<any> {

    this.tokenService.removeToken();
    return this.http.post('http://127.0.0.1:8000/api/auth/logout',null);
  }
}
