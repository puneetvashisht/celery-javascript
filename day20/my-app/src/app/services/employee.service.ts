import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from './Employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // Subject 
  // Subject is subscribed by multiple components
  // Subject.next --> subscribers will get updated copies of data 

  public employeeSubject = new Subject<Array<Employee>>();
  
  //expose the employeeSubject
  data$ = this.employeeSubject.asObservable();

  constructor(private httpClient : HttpClient) { }


  fetchEmployees() {
    this.httpClient.get('http://localhost:3000/api/v1/employees/')
    .subscribe((data:any)=> {
      this.employeeSubject.next(data);
    })
  }

  createNewEmployee(){
    this.employeeSubject.next([
      {
      name: "Test", salary: 3434
    },
    {
      name: "Test2", salary: 34342
    },
  ])
  }
}
