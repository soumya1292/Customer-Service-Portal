import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x:string]:any;

  private baseURL = "http://localhost:8080/api/v2/"

  constructor(private httpClient: HttpClient) { }

  postUser(val:any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL+'user'}`,val);
  }
  getUser(): Observable<any> {
    return this.httpClient.get(`${this.baseURL+'users'}`);
  }

  

  loginUser(email: string): Observable<any["email"]> {
    return this.httpClient.get<any["email"]>(this.baseURL + 'user/' + email);
  }

  updateUserDetails(email: string, user: User): Observable<Object>{
    return this.httpClient.put(this.baseURL+'UpdateUser/'+email,user);
  }

  getCustomerDetailsByEmail(email: any): Observable<User> {
    return this.httpClient.get<User>(`${this.baseURL}user/${email}`);
    }
}
