import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent {
  id:number=0;
  employee:any='';
  constructor(private _activatedRoute:ActivatedRoute, 
    private _employeeService:EmployeesService){
      _activatedRoute.params.subscribe(
        (data:any)=>{
          console.log(data.id)
          this.id=data.id; 
          console.log(this.id)
        },(err:any)=>{
          alert("Internal Server Error")
        }
      )
      _employeeService.viewEmployees(this.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.employee=data;
        }, (err:any)=>{
          alert("Internal Server Error");
        }
      )
      }
      }



