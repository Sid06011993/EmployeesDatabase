import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(private _router:Router){}

  logout(){
    if(confirm('Are you sure you want to logout?')==true){
      sessionStorage.removeItem('token');
      alert('You have been logged out')
      this._router.navigateByUrl('/loginpage');
    };
  }


}
