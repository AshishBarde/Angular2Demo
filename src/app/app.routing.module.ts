import { EmployeeDashboardModule } from './modules/employee-dashboard/employee-dashboard.module';
import { RoleComponent } from './layout/role/role.compoent';
import { LoginComponent } from './modules/login-module/login.component';
import {EmployeeModule} from './modules/employee-module/employee.module';
import {EmployeeJobModule} from './modules/employee-job/job.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute } from '@angular/router';
import { EmployeeComponent } from './modules/employee-module/employee.component';

const appRoutes: Routes = [
 { path: 'login', component: LoginComponent},
   {
    path: ':role',
    component: RoleComponent,
    children: [
      {
        path: 'employee-dashboard',
        loadChildren: './modules/employee-dashboard/employee-dashboard.module#EmployeeDashboardModule'
      },
      {
        path: 'profile',
        loadChildren: './modules/employee-module/employee.module#EmployeeModule'
      },
      {
        path: 'myjob',
        loadChildren: './modules/employee-job/job.module#EmployeeJobModule'
      },
    ]
  },
{ path: '**', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { preloadingStrategy: '', useHash: true })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    
  ]
})

export class AppRoutingModule { }