import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Requests } from '../requests';
import { RequestsService } from '../requests.service';

@Component({
  selector: 'app-create-request',
  templateUrl: './create-request.component.html',
  styleUrls: ['./create-request.component.css']
})
export class CreateRequestComponent implements OnInit  {
  ngOnInit(): void {
   
  }

  constructor(private requestsService: RequestsService, private router:Router){}
  id:any;
  serviceId:any;
  description:any;
  serviceName: any;
  type: any;
  status:any;
  complete_by:any;
  today: Date = new Date();




  createNewRequest() {
    var request = {
      id:this.id,
      serviceId:this.serviceId,
      description: this.description,
      serviceName: this.serviceName,
      type: this.type,
      status:this.status,
      complete_by:this.complete_by
    };
  
    this.requestsService.postSerReq(request).subscribe(data => {
      console.warn(data);
      alert("Request Submitted Successfully");
      this.router.navigate(['/requests']);
    });
  }


  logout() {
    localStorage.removeItem('token');
    console.log("Logout is successful!")
    this.router.navigate(['/login']);
  }
  
  }

  

  



