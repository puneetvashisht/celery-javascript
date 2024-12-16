import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-employees',
  imports: [NgFor],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit {

  employees: Array<any> = [];

  constructor(private employeeService: EmployeeService){}
  ngOnInit(): void {

    // Subscription code
    this.employeeService.data$
    .subscribe((data:any)=> {
      console.log('In View employees', data);
      this.employees = data;
    })

    // invokes fetch
    this.employeeService.fetchEmployees();
  }


}
