import { getTestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from './http.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class LoginService {

  constructor(private http: Http,
    private router: Router,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute) {

  }


get(userId:number,id:number): Observable<any> {
    return this.httpService.get('url' + "employees/" + userId + "/dependents" + "/" + id);
}

getAll(): Observable<any>{
return this.httpService.getAll('url');
}

getOne(id: number): Observable<any> {
return this.httpService.get('url' + "/" + id);

}

  setOne(userId:Number, roleName:String): Observable<any> {
      return this.httpService.get('url' + "/" + userId + "/" + roleName);
  }

  saveOrUpdate(object, userId:Number): Observable<any> {
    return this.httpService.save(object, 'url' + "employees/" + userId + "/dependents");
  }

delete(id:Number): Observable<any>{
return this.httpService.delete('url' + "/" + id);
}

}
