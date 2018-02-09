import { MaterialModules } from './../material-module/material.module';

import { SharedModule } from './../../shared/shared.module';

// Core Modules
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import {EmployeeRoutingModule} from './employee.routing.module';
import {EmployeeComponent} from './employee.component';
import {EmployeeUrl} from '../../models/url/employee.url'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EmployeeRoutingModule,
    FormsModule,
    SharedModule,
    MaterialModules
  ],
  declarations: [
    EmployeeComponent
  ],
  exports: [
  ],
  entryComponents: [
    
  ],
  providers: [
   EmployeeUrl
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployeeModule { }