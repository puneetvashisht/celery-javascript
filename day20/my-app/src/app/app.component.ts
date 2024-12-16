import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmployeesComponent } from "./components/list-employees/list-employees.component";
import { ViewEmployeesComponent } from "./components/view-employees/view-employees.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListEmployeesComponent, ViewEmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
