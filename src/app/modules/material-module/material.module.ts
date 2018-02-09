
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatDialogModule,MatDialogConfig,MatDialogRef } from '@angular/material/dialog'
import {
    MatCheckboxModule, MatInputModule, MatCardModule, MatProgressBarModule, MatFormFieldModule,
    MatSelectModule, MatRadioModule, MatButtonModule
} from '@angular/material';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSliderModule} from '@angular/material/slider';
@NgModule({
    imports: [
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        MatTooltipModule,
        MatSliderModule
    ],
    declarations: [
        /*MatDialogConfig,
        MatDialogRef*/
    ],
    providers: [
    ],
    exports: [
        MatCheckboxModule,
        MatInputModule,
        MatCardModule,
        MatProgressBarModule,
        MatFormFieldModule,
        MatRadioModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
        MatSliderModule
       /* MatDialogConfig,
        MatDialogRef*/
    ]
})
export class MaterialModules {

}
