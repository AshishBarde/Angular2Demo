
// Core Modules
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule, Http, XHRBackend, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


// Components
import { LeftPanelComponent } from './left-panel/left-panel-component';
import { HeaderComponent } from './header/header-component';
import { MatToolbarModule, MatIconModule } from '@angular/material';
import { MatCheckboxModule, MatInputModule, MatCardModule, MatProgressBarModule, MatFormFieldModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatCardModule,
    MatFormFieldModule,
    
  ],
  declarations: [
    LeftPanelComponent,
    HeaderComponent,
  ],
  exports: [
    LeftPanelComponent,
    HeaderComponent,
  ],
  entryComponents: [
   
  ],
  providers: [
   
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule {

}
