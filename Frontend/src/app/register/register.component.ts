import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  ngOnInit(): void {

  }

  constructor(private userService : UserService ,private router:Router) {

  }
  user_id: any;
  firstname: any;
  lastname: any;
  email: any;
  phone: any;
  pwd: any;

proceedregistration(){
  var user = {
    user_id:this.user_id,
    firstname:this.firstname,
    lastname: this.lastname,
    email: this.email,
    phone: this.phone,
    pwd:this.pwd
  };

  this.userService.postUser(user).subscribe(data => {
    console.warn(data);
    alert("Request Submitted Successfully");
    // location.reload();
    this.router.navigate(['/login']);
  });

}

  // registerform = this.builder.group({
  //   id: this.builder.control('', Validators.required),
  //   firstname: this.builder.control('', Validators.required),
  //   lastname: this.builder.control('', Validators.required),
  //   password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
  //   email: this.builder.control('', Validators.compose([Validators.required, Validators.email])),
  //   contactno: this.builder.control('', Validators.required)
  // });

  // proceedregistration() {
  //   if (this.registerform.valid) {
  //     this.service.Proceedregister(this.registerform.value).subscribe(res => {
  //       this.toastr.success('Registered Successfully');
  //       this.router.navigate(['login']);
  //     });
  //   } else {
  //     this.toastr.warning('Please enter valid data');
  //   }

  // }



}
