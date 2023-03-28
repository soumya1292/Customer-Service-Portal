import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {Requests} from '../requests'
import { RequestsService } from '../requests.service';
import { UpdateServiceRequestComponent } from '../update-service-request/update-service-request.component';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit{

id:any;
serviceName:any;
description:any;
type: any;
status:any;
date: any;
complete_by:any;

searchTerm:any;

  requests : Requests[];

  constructor(private requestsService: RequestsService, private router:Router){}

  ngOnInit(): void{

    if (localStorage.getItem('user_role') === 'Admin') {
      console.log('role is admin')
    }
    this.getRequests();

  }

  public getRequests(){
    this.requestsService.getPendingRequestsList().subscribe( data =>{
      this.requests = data;
    });
  }

  public deleteRequest(id:number){
   
      if(confirm('Do you want to delete the service request?')){
        this.requestsService.delServiceRequest(id).subscribe(data=>{
          alert("Request with Id "+id+" is deleted");
          this.getRequests();})
    }
    else{
      location.reload();
    }
    
  }

  updateRequest(id:number){
    this.router.navigate(['update-service-request',id]);
  }

  public getCompletedServiceRequestList(){
    this.requestsService.getCompletedRequests().subscribe((data: Requests[])=>
      {this.requests=data;})
  }


  closeServiceRequest(id: number, status: string = 'Completed') {
    const serviceReqToUpdate = this.requests.find(sr => sr.id === id);
    if (serviceReqToUpdate) {
      if (serviceReqToUpdate.status === 'Completed') {
        alert('The request is already closed');
      } else {

        serviceReqToUpdate.status = status;
     confirm('Do you want to close the service request?');

        this.requestsService.updateServiceRequest(id, serviceReqToUpdate).subscribe(() => {
          console.log(`Service request ${id} updated with status ${status}`);
          location.reload();
        }, (error) => {
          console.error(`Failed to update service request ${id}: ${error}`);
        });
      }
    } else {
      console.error(`Service request with ID ${id} not found`);
    }
  }



  search() {
    if (this.searchTerm) {
      this.requests = this.requests.filter(request =>
        request.description.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        request.serviceName.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.getRequests();
    }
  }

  logout() {
    localStorage.removeItem('token');
    console.log("Logout is successful!")
    this.router.navigate(['/login']);
  }
  


}
