import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { AuthenticationGuard } from './authentication.guard';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'loginpage', component: LoginpageComponent},
  {path:'', component: LoginpageComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthenticationGuard],children:[
    {path:'home', component:HomeComponent},
    {path:'employees', component:EmployeesComponent, canActivate:[AuthenticationGuard]},
    {path: 'viewemployees/:id', component:ViewemployeeComponent, canActivate:[AuthenticationGuard]},
    {path:'createemployee', component: CreateemployeeComponent, canActivate:[AuthenticationGuard]},
    {path:'createemployee/:id', component: CreateemployeeComponent, canActivate:[AuthenticationGuard]},
    {path: 'loadingpage', component: LoadingpageComponent}
  ]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
