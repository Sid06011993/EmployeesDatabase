import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { core } from '@angular/compiler';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';
import { CreateemployeeComponent } from './createemployee/createemployee.component';
import { HomeComponent } from './home/home.component';
import { LoadingpageComponent } from './loadingpage/loadingpage.component';
import { LogoutComponent } from './logout/logout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardComponent,
    EmployeesComponent,
    ViewemployeeComponent,
    CreateemployeeComponent,
    HomeComponent,
    LoadingpageComponent,
    LogoutComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
