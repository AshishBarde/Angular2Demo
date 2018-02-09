import {Component,  OnInit, Inject, Input, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

interface Menus {
  name: string;
  link: string;
  icon: string;
  submenus?: Array<any>;
}

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel-component.html'  
})


export class LeftPanelComponent implements OnInit {
    @Input('menus') menus: Array<Menus> = [];

    ngOnInit() { 
      
    }

}
