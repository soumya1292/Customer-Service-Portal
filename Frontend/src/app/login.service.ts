import { HttpClient } from '@angular/common/http';
import { Injectable,OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserComponent } from './user/user.component';
@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{
  private baseURL = "http://localhost:8080/api/v2/"
  user_id:any;
  firstname:any;
  slastname:any;
  email:any;
  phone:any;
  pwd:any;

  constructor(private httpClient:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  loginUser(email: string): Observable<UserComponent["email"]> {
    return this.httpClient.get<UserComponent["email"]>(this.baseURL + 'user/' + email);
  }
  
}
