import { EmployeeDashboardRoutingModule } from './employee-dashboard.routing';
import { MaterialModules } from './../material-module/material.module';

import { SharedModule } from './../../shared/shared.module';
import { EmployeeDashoboardComponent } from './employee-dashboard.component';

// Core Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule, Http } from '@angular/http';
// Modules


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModules,
    EmployeeDashboardRoutingModule
  ],
  declarations: [
    EmployeeDashoboardComponent,
  ],
  exports: [
    EmployeeDashoboardComponent,
  ],
  entryComponents: [
   EmployeeDashoboardComponent
  ],
  providers: [
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeeDashboardModule { }

