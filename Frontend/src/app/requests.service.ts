import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from './requests';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {
[x:string]:any;

  private baseURL = "http://localhost:8080/api/v1/"
  id:any;
  serviceId:any;
  serviceName:any;
  description:any;
  type:any;
  status:any;
  complete_by:any;

  constructor(private httpClient: HttpClient) { }


//Get pending requests
  getPendingRequestsList():Observable<Requests[]>{
    return this.httpClient.get<Requests[]>(`${this.baseURL+'PendingRequests'}`);
  }

  postSerReq(val:any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseURL+'NewRequest'}`,val);
  }

  delServiceRequest(id:any): Observable<Object>{
    return this.httpClient.delete<any>(`${this.baseURL}DeleteRequest/${id}`);
  }

  getServiceRequestById(id: number): Observable<Requests> {
    return this.httpClient.get<Requests>(`${this.baseURL}RequestById/${id}`);
    }

  updateServiceRequest(id: number, request: Requests): Observable<Object> {
    alert("Edit successful");
    return this.httpClient.put(`${this.baseURL}EditRequest/${id}`,request);
    }

    getCompletedRequests():Observable<Requests[]>{
      return this.httpClient.get<Requests[]>(`${this.baseURL+'CompletedRequests'}`);
    }
  

 
}

