import { MatDialog,MatDialogRef, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit, ViewContainerRef, Injectable} from '@angular/core';

@Component({
  selector: 'app-dialog-parameter',
  templateUrl: './dialog-parameter.component.html'
})

@Injectable()
export class DialogParameterComponent implements OnInit {

   message:string;
  constructor( public dialog: MatDialog,
            public dialogRef: MatDialogRef<DialogParameterComponent>,
             public dialogRef1 : MatDialogRef<DialogParameterComponent>) { 

    this.message = this.dialogRef._containerInstance._config.data[0];
    

  }

  ngOnInit() {
  }

  close()
  {
     this.dialogRef1.close(this.message);
  }

}
