import { EmployeeJobComponent } from './job.component';
// Core Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components


const routes: Routes = [     
    { 
      path: '', 
      component: EmployeeJobComponent            
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
export class EmployeeJobRoutingModule { }

