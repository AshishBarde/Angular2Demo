import { EmployeeDashoboardComponent } from './employee-dashboard.component';
// Core Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components


const routes: Routes = [     
    { 
      path: '', 
      component: EmployeeDashoboardComponent            
    }
    
]; 

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})
export class EmployeeDashboardRoutingModule { }

