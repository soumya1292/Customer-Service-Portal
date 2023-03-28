import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Requests } from '../requests';
import { RequestsService } from '../requests.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'update-service-request',
  templateUrl: './update-service-request.component.html',
  styleUrls: ['./update-service-request.component.css']
})
export class UpdateServiceRequestComponent implements OnInit {
  id:number;
  serviceRequest: Requests;
  today: Date = new Date();
  datePipe: any;


  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.requestsService.getServiceRequestById(this.id).subscribe(data=>{
      this.serviceRequest = data;
    },error=>console.log(error));
    
  }
  constructor(private requestsService: RequestsService, private route:ActivatedRoute,private router:Router){}



 

  onSubmit(){
    this.requestsService.updateServiceRequest(this.id,this.serviceRequest).subscribe(data=>{
      // const formattedDate = this.datePipe.transform(this.serviceRequest.complete_by, 'yyyy-MM-dd');
      // this.serviceRequest.complete_by = formattedDate;
      this.getServiceRequests();
      this.router.navigate(['/requests'])
      },error=>console.log(error));
    }
    getServiceRequests(){
      this.router.navigate(['/requests'])
    }

    logout() {
      localStorage.removeItem('token');
      console.log("Logout is successful!")
      this.router.navigate(['/login']);
    }


  }



