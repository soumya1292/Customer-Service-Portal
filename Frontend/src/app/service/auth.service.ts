// import { Injectable } from '@angular/core';
// import { JwtHelperService } from '@auth0/angular-jwt';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private readonly apiUrl = 'http://localhost:3000';

//   constructor(private readonly http: HttpClient, private readonly jwtHelper: JwtHelperService) { }

//   login(credentials: { email: string; password: string; }): Observable<{ token: string }> {
//     return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials);
//   }

//   isAuthenticated(): boolean {
//     const token = localStorage.getItem('token');
//     return !this.jwtHelper.isTokenExpired(token);
//   }

//   logout(): void {
//     localStorage.removeItem('token');
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }
  apiurl = ' http://localhost:3000/users'

  // GetAll() {
  //   return this.http.get(this.apiurl);
  // }

  // Getbycode(code: any) {
  //   return this.http.get(this.apiurl + '/' + code);
  // }

  // Proceedregister(inputdata: any) {
  //   return this.http.post(this.apiurl, inputdata);
  // }

  // Updateuser(code:any,inputdata:any){
  //   return this.http.put(this.apiurl+'/'+code, inputdata)
  // }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  IsloggedIn(){
    return this.getToken() !== null;

  }



}
