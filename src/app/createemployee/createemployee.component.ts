import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent {

  public employeeForm:FormGroup = new FormGroup({
    name:new FormControl(),
    company: new FormControl(),
    role: new FormControl(),
    package: new FormControl(),
    email: new FormControl(),
    dob: new FormControl(),
    address: new FormGroup({
        addressLine: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
        }),
    gender: new FormControl(),
    workMode:new FormControl(),
    hikes: new FormArray([]),
  })
  id:number=0;
  constructor(private _employeeService:EmployeesService, private _router:Router, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        console.log(data.id);
        this.id=data.id;
      },(err:any)=>{
        alert("Internal Server Error")
      }
    )
    if(this.id){
      _employeeService.viewEmployees(this.id).subscribe(
        (data:any)=>{
          console.log(data);
          this.employeeForm.patchValue(data);
        },(err:any)=>{
          alert("Internal Server Error")
        }
      )
    }
  
    
    this.employeeForm.get('workMode')?.valueChanges.subscribe(
      (data:any)=>{
        if(data=='workFromOffice'){
          this.employeeForm.addControl('travelfee', new FormControl());
          this.employeeForm.removeControl('wifibill');
        }else{
          this.employeeForm.addControl('wifibill',new FormControl());
          this.employeeForm.removeControl('travelfee');
        }
      }
    )
  }
    get hikesFormArray(){
      return this.employeeForm.get('hikes') as FormArray;
    }
    addhikes(){
      this.hikesFormArray.push(
        new FormGroup({
          year: new FormControl(),
          hikepercentage: new FormControl()
        })
      )
    }
    deletehike(i:number){
      this.hikesFormArray.removeAt(i);
    }
  
    submit(){
      if(this.id){
      console.log(this.employeeForm.value); 
      this._employeeService.updateEmployee(this.id,this.employeeForm.value).subscribe(
        (data:any)=>{
          console.log(data);
          alert("Employee Record Updated Successfully");
          this._router.navigateByUrl("/dashboard/employees");
        }, (err:any)=>{
          alert("Internal Server Error");
        }
      )
      }else{
        console.log(this.employeeForm.value);
    this._employeeService.createEmployee(this.employeeForm.value).subscribe(
      (data:any)=>{
        alert("New Student Entry Created Successfully");
        this._router.navigateByUrl("/dashboard/employees");
      }, (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
      }
    }
    

