import { environment } from '../../../environments/environment';
import { Component, OnInit, Injectable, EventEmitter, ChangeDetectorRef } from '@angular/core';

export class EmployeeUrl  {

  protected getEmployee: string ='';
  
  public get $getEmployee(): string {
    return this.getEmployee;
  }

}