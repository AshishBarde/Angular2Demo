import {Component, NgModule, ViewContainerRef,} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'confirmation',
  template: `<p class="margT15"> {{message}}?</p>
  <button mat-raised-button (click)="dialogRef.close(true)" class='primary-btn right-align-btn btn margL25 margT5 mat-raised-button' >Ok</button>
  <button mat-raised-button (click)="dialogRef.close(false)" class='cancel-btn right-align-btn btn margT5 mat-raised-button'>Cancel</button>
   `
})
export class ConfirmationDailog {
  constructor(public dialogRef: MatDialogRef<any>) { }
  public message:string;
}