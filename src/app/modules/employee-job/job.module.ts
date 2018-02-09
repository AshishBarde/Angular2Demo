import { EmployeeJobRoutingModule } from './job.routing.module';
import { MaterialModules } from './../material-module/material.module';

import { SharedModule } from './../../shared/shared.module';
import { EmployeeJobComponent } from './job.component';

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
    EmployeeJobRoutingModule
  ],
  declarations: [
    EmployeeJobComponent,
  ],
  exports: [
    EmployeeJobComponent,
  ],
  entryComponents: [
   EmployeeJobComponent
  ],
  providers: [
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeeJobModule { }

