import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user_id:any;
  firstname:any;
  lastname:any;
  email:any;
  phone:any;
  pwd:any;
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

}
