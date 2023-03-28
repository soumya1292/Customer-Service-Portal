import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UpdateComponent } from './update/update.component';
import { RequestsComponent } from './requests/requests.component';
import { CreateRequestComponent } from './create-request/create-request.component';
import { FormsModule } from '@angular/forms';
import { UpdateServiceRequestComponent } from './update-service-request/update-service-request.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { UpdateCustomerDetailsComponent } from './update-customer-details/update-customer-details.component';
import { CompletedrequestsComponent } from './completedrequests/completedrequests.component';
import { AuthGuard } from './guard/auth.guard';
import { JwtHelperService } from '@auth0/angular-jwt';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent,
    UpdateComponent,
    RequestsComponent,
    CreateRequestComponent,
    UpdateServiceRequestComponent,
    CustomerdetailsComponent,
    UpdateCustomerDetailsComponent,
    CompletedrequestsComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    
    
    
  ],
  
  providers: [
    AuthGuard,
      // JwtHelperService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
