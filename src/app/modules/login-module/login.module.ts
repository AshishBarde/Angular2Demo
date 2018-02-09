import { SharedModule } from './../../shared/shared.module';
import { Component, NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModules } from './../../modules/material-module/material.module';
import {LoginComponent} from './../../modules/login-module/login.component';

@NgModule({
imports: [
    CommonModule,
    FormsModule,
    MaterialModules,
    RouterModule,
    SharedModule
  ],
  declarations: [
      LoginComponent
  ],
  providers: [
    
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[
      LoginComponent
  ]
})

export class LoginModule{

}