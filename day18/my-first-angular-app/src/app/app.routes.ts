import { Routes } from '@angular/router';
import { ViewemployeesComponent } from './components/viewemployees/viewemployees.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';

// export const routes: Routes = [];
export const routes: Routes = [
    { path: 'employees', component: ViewemployeesComponent },
    { path: 'addemployee', component: AddemployeeComponent },
  ];