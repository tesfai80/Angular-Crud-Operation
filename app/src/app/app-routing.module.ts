import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { EmployeeListComponent } from './employee/employee.component';
import {CreateEmoloyeeComponent} from './create-emoloyee/create-emoloyee.component';
import {SignOutComponent} from './sign-out/sign-out.component';
import { AuthGuard } from "./shared/auth.guard";


const routes: Routes = [
  { path: '', redirectTo: '/log-in', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'add', component: CreateEmoloyeeComponent, canActivate: [AuthGuard] },
  { path: 'update', component: CreateEmoloyeeComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: SignOutComponent, canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }