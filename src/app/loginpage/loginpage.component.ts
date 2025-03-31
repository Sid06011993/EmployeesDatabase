import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  public loginForm:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })
constructor(private _employeesService:EmployeesService, private _router:Router){}

  login(){
  this._employeesService.loginEmployee(this.loginForm.value).subscribe(
    (data:any)=>{
      console.log(data);
      alert("Login was successful");
      sessionStorage.setItem('token',data.token);
      this._router.navigateByUrl("/dashboard/loadingpage");
    },(err:any)=>{
      alert("Internal Server Error")
    }
  )
}
}

