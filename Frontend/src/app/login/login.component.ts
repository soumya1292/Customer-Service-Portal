import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { UserService } from '../user.service';
import { UserComponent } from '../user/user.component';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder: FormBuilder, private toastr: ToastrService,
    private service: AuthService, private router: Router, private LoginService: LoginService) {

  }
  ngOnInit(): void {
    this.UserForm = new FormGroup({
      Email: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required),
    })
  }

  UserForm: any;
  sessionEmail:string;
  sessionToken: string;
  UserRole:any;

  Login() {
    this.LoginService.loginUser(this.UserForm.value.Email).subscribe((user: any) => { // modify the Login method to call the loginUser method of LoginService
      if (user && this.UserForm.value.Password === user.pwd) {
        console.log("Login is successful!")
        console.log(Response);
        // generate and store session token
        this.sessionToken = Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2);
        localStorage.setItem('token', this.sessionToken);
        this.sessionEmail=this.UserForm.value.Email;
        localStorage.setItem('userEmail', this.sessionEmail);
       
        console.log(localStorage.getItem('token'))
        console.log(localStorage.getItem('userEmail'))


        this.router.navigate(['/requests']);
      } else {
        alert("Bad credentials, Login Failed")
      }
    });
  }  


 

}



  // proceedlogin() {
  //   if (this.loginform.valid) {
  //     this.service.Getbycode(this.loginform.value.email).subscribe(data => {
  //       this.userdata = data;
  //       console.log(this.userdata);
  //       if (this.userdata.password === this.loginform.value.password) {
  //         sessionStorage.setItem('email',this.userdata.id);
  //         this.router.navigate(['requests']);

  //       } else {
  //         this.toastr.error('Invalid Credentials');
  //       }
  //     });

    // }

  // }



