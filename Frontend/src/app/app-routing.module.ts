import { NgModule } from '@angular/core';
import { AuthGuard } from './guard/auth.guard';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { RequestsComponent } from './requests/requests.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { UpdateServiceRequestComponent } from './update-service-request/update-service-request.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { UpdateCustomerDetailsComponent } from './update-customer-details/update-customer-details.component';
import { CompletedrequestsComponent } from './completedrequests/completedrequests.component';


const routes: Routes = [

  {path:'', redirectTo:"login",pathMatch:"full"},
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'user',component:UserComponent,canActivate:[AuthGuard]},
  {path:'requests',component:RequestsComponent, canActivate:[AuthGuard]},
  {path:'create-request',component:CreateRequestComponent,canActivate:[AuthGuard]},
  {path:'update-service-request/:id',component:UpdateServiceRequestComponent,canActivate:[AuthGuard]},
  {path:'update-customer-details/:email',component:UpdateCustomerDetailsComponent,canActivate:[AuthGuard]},
  {path:'customerdetails',component:CustomerdetailsComponent,canActivate:[AuthGuard]},
  {path:'completedrequests',component:CompletedrequestsComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
