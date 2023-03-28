import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerdetails',
  templateUrl: './customerdetails.component.html',
  styleUrls: ['./customerdetails.component.css']
})
export class CustomerdetailsComponent implements OnInit {

  user_id: any;
  firstname: any;
  lastname: any;
  email: any;
  phone: any;
  pwd: any;
  user_role: any;
  sessionEmail: any;

  user: User[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    const userEmail = localStorage.getItem('userEmail');
    this.sessionEmail = userEmail;
    this.userService.getCustomerDetailsByEmail(userEmail).subscribe((user: User) => {
      // this.user_id = user.user_id;
      // this.firstname = user.firstname;
      // this.lastname = user.lastname;
      // this.email = user.email;
      // this.phone = user.phone;
      // this.pwd = user.pwd;
      this.user_role = user.user_role;

      if (this.user_role === 'Admin') {
        this.getUsers();
      }else{
        this.userService.getCustomerDetailsByEmail(userEmail).subscribe((data: User)=>
      {this.user = [data];});

      }
    });
  }

  public getUsers() {
    this.userService.getUser().subscribe((data: User[]) => {
      this.user = data;
    });
  }

  btnUpdateUser(email: string) {
    this.router.navigate(['/update-customer-details', email]);
  }

  logout() {
    localStorage.removeItem('token');
    console.log('Logout is successful!');
    this.router.navigate(['/login']);
  }

}








