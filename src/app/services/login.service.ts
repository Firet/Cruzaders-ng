import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient ) { }

  loginAuth(userCredentials:UserCredentials) {
    return this.http.post(environment.apiURL + 'auth/login', userCredentials)
      // .pipe(tap(console.log));
      .pipe(tap(this.setSection));

  }

  // hacer interfaces
  setSection(authResult: any) {
    // const expireAt = '';
    console.log('authResult', authResult);
    localStorage.setItem('id_token', authResult.access_token);
  }
}

interface UserCredentials{
  email: string,
  password: string
}
