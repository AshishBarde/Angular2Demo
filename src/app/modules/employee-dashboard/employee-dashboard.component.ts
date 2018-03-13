import { DialogParameterComponent } from './../employee-dashboard/dialog-parameter.component';
import { MatDialog,MatDialogRef, MatDialogConfig  } from '@angular/material';
import { ConfirmationDailog } from './../../dialogs/custome.dialog';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';

@Component({
    selector: 'employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class EmployeeDashoboardComponent implements OnInit
{

   dialogRef: MatDialogRef<any>;
    constructor(private dialog:MatDialog){

    }
    
    ngOnInit()
    {

    }

    showDialog()
    {
       this.dialogRef = this.dialog.open(ConfirmationDailog).updateSize("400px").
       updatePosition({ top: '200px', bottom: '0px' });

       this.dialogRef.afterClosed().subscribe(result=>{
        console.log(result);
       })
       this.dialogRef.componentInstance.message="You Click On Button";
    }

    showCustomeDialog()
    {
        const config = new MatDialogConfig();
      config.data = ["GettingParameter"];
      config.disableClose = true;
      config.hasBackdrop = true;

      const dialogRef = this.dialog.open(DialogParameterComponent, config).updateSize('600px')
        .updatePosition({ top: '200px', bottom: '0px' });

        this.dialogRef.afterOpen().subscribe(result=>{
            console.log(result);
        })
    }
}