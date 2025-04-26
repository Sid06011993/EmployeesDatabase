import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
employees:any=[];
  constructor(private _employeeService:EmployeesService, private _activatedRoute:ActivatedRoute){
   this.reload();
}

reload(){
  this._employeeService.getEmployees().subscribe(
    (data:any)=>{
      console.log(data);
      this.employees=data;
    }, (err:any)=>{
      alert("Internal Server Error");
    }
  )
}
  term:string=''
  search(){
    console.log(this.term)
    this._employeeService.searchEmployees(this.term).subscribe(
      (data:any)=>{
        this.employees=data;
      }, (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  column:string='';
  order:string='';
  sortEmployees(){
    this._employeeService.sortedEmployees(this.column,this.order).subscribe(
      (data:any)=>{
        this.employees=data;
        console.log(data)
      }, (err:any)=>{
        alert("Internal Server Error");
      }
    )

  }
  limit:number=0;
  page:number=0;
  paginate(){
    this._employeeService.paginatedEmployees(this.limit,this.page).subscribe(
      (data:any)=>{
        this.employees=data;
      },(err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
 
 delete(id:any){
  if(confirm("Are you sure you want to delete this record?")==true){
  this._employeeService.deleteEmployees(id).subscribe(
    (data:any)=>{
      alert("Record Deleted Successfully");
      this.employees=data;
      this.reload();
    },(er:any)=>{
      alert("Internal Server Error");
    }
     )
    }else{
    alert("Delete was cancelled");
 }
}

}
