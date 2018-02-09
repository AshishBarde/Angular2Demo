import { Router } from '@angular/router';
import { Component, ElementRef, OnInit, Inject, Input, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header-component.html'
})

export class HeaderComponent implements OnInit {

  userName: string;
  userRole: string;
  userRoles = [];
  public file_srcs: string[] = [];
  public file_srcs1: string[] = [];
  routeLink: string;
  isClassVisible: Boolean = false;
  userEmployeeId: number;
  userProjectId: number;
  loading: Boolean = false;


  public text: String;

  @Input() makeDifferent;

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if (this.eRef.nativeElement.contains(event.target)) {
      // alert('Clicked Inside')
    }
  }

  imagePath: boolean = false;
  userId: any;
  employer: boolean = false;
  employee: boolean = false;
  admin: boolean = false;
  accessToken: string;
  refresh_token: string;


  constructor(
    private _router: Router,
    private eRef: ElementRef,) {


  }

  ngOnInit() {
    this.userRoles = JSON.parse(localStorage.getItem('userRole'));
      this.userRole = "employee";
        //this.userRoles[i].roleId.roleName;
        this.routeLink = "['/dashboard']"
        return false;
  }
  logout() {
  

     
  }

  disablePopup() {
    this.isClassVisible = false;
  }

  setIsClassVisible() {
    this.isClassVisible = true;
  }

}
