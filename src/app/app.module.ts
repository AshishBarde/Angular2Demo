
import { EmployeeDashboardModule } from './modules/employee-dashboard/employee-dashboard.module';
import { EmployeeJobModule } from './modules/employee-job/job.module';
import { MaterialModules } from './modules/material-module/material.module';
import { SharedModule } from './shared/shared.module';
import { RoleComponent } from './layout/role/role.compoent';
import { LoginModule } from './modules/login-module/login.module';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { Http } from '@angular/http';


//material

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material';

import { EmployeeModule } from './modules/employee-module/employee.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    RoleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    EmployeeModule,
    EmployeeJobModule,
    EmployeeDashboardModule,
    LoginModule,
    SharedModule,
    MaterialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
