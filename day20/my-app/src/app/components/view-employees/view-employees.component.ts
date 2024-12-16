import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-view-employees',
  imports: [NgFor],
  templateUrl: './view-employees.component.html',
  styleUrl: './view-employees.component.css'
})
export class ViewEmployeesComponent {
 employees: Array<any> = [];

  constructor(private employeeService: EmployeeService){}
  ngOnInit(): void {

    // Subscription code
    this.employeeService.data$
    .subscribe((data:any)=> {
      console.log('In View employees', data);
      this.employees = data;
    })
  }


  createNewEmployee(){
    this.employeeService.createNewEmployee();
  }
}
