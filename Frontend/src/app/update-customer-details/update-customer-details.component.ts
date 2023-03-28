import { Component,OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-update-customer-details',
  templateUrl: './update-customer-details.component.html',
  styleUrls: ['./update-customer-details.component.css']
})
export class UpdateCustomerDetailsComponent implements OnInit {

  email:string;
  customerDetails:User;
  user_id:any;

  ngOnInit(): void {
    this.email=this.route.snapshot.params['email'];
    this.userService.getCustomerDetailsByEmail(this.email).subscribe(data=>{
      this.customerDetails = data;
    },error=>console.log(error));
  
  }
  constructor(private userService: UserService, private route:ActivatedRoute,private router:Router){}

  onSubmit(){
    this.userService.updateUserDetails(this.email,this.customerDetails).subscribe(data=>{
      this.getCustomerDetails();
      },error=>console.log(error));
    }
    getCustomerDetails(){
      this.router.navigate(['/app-customerdetails'])
    }

    logout() {
      localStorage.removeItem('token');
      console.log("Logout is successful!")
      this.router.navigate(['/login']);
    }
    



}










