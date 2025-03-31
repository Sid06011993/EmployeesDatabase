import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _httpClient:HttpClient) { }
    
    getEmployees():Observable<any>{
      return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees");
    }

    searchEmployees(term:any):Observable<any>{
      return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?filter="+term);
    }

    sortedEmployees(column:any,order:any):Observable<any>{
      return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy="+column+"&order="+order);
    }

    paginatedEmployees(limit:number,page:number):Observable<any>{
      return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees?limit="+limit+"&page="+page);
    }

    deleteEmployees(id:any):Observable<any>{
      return this._httpClient.delete("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id);
    }

    viewEmployees(id:any):Observable<any>{
      return this._httpClient.get("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id);
    }
    createEmployee(data:any):Observable<any>{
      return this._httpClient.post("https://6572df5d192318b7db412dfe.mockapi.io/employees",data);
    }

    updateEmployee(id:any,data:any):Observable<any>{
      return this._httpClient.put("https://6572df5d192318b7db412dfe.mockapi.io/employees/"+id,data);
    }

    loginEmployee(data:any):Observable<any>{
      return this._httpClient.post("https://reqres.in/api/login",data);
    }
}
