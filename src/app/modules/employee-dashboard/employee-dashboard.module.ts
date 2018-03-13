import { DialogParameterComponent } from './dialog-parameter.component';
import { ConfirmationDailog } from './../../dialogs/custome.dialog';
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
    ConfirmationDailog,
    DialogParameterComponent,
    EmployeeDashoboardComponent,
  ],
  exports: [
    ConfirmationDailog,
    DialogParameterComponent,
    EmployeeDashoboardComponent,
  ],
  entryComponents: [
   EmployeeDashoboardComponent,
   ConfirmationDailog,
   DialogParameterComponent
  ],
  providers: [
    DialogParameterComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeeDashboardModule { }

