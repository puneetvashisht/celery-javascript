import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { NgFor } from '@angular/common';
import { Employee } from './Employee';

@Component({
  selector: 'app-viewemployees',
  imports: [NgFor],
  templateUrl: './viewemployees.component.html',
  styleUrl: './viewemployees.component.css'
})
export class ViewemployeesComponent implements OnInit{

  constructor(private http: HttpClient) { }

  employees: Array<Employee> = [];

  ngOnInit(): void {
    console.log('On compoennt load...');

    // http call
    this.http.get('http://localhost:3000/api/v1/employees').subscribe((data:any) => {
      console.log(data);
      this.employees = data;
    });
    
  }

}
