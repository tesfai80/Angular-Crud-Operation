import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from "@angular/common/http";
import { SharedService } from "./shared.service";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { EmployeeListComponent } from './employee/employee.component';
import { SigninComponent } from './components/signin/signin.component';
import { CreateEmoloyeeComponent } from './create-emoloyee/create-emoloyee.component';
import { SignOutComponent } from './sign-out/sign-out.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SigninComponent,
    CreateEmoloyeeComponent,
    SignOutComponent,
    UpdateEmployeeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }