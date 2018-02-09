import { LoginComponent } from './../../modules/login-module/login.component';

import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Menus } from './menus';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class RoleComponent implements OnInit, OnDestroy {
  menus: Array<any> = [];
  role: string = '';
  validRoles: Array<any> = ['admin', 'employer', 'employee'];

  constructor(private _router: Router, 
  private _route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this._route.params.subscribe((dataParams: any) => {
      this.role = dataParams.role;
      if (this.validRoles.indexOf(this.role) !== -1) {        
        this.menus = Menus.getMenus(this.role);
      } else {
        this._router.navigate(['\login']);
      }
    });
  }

  ngOnDestroy() {
 
  }

}
