
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/share';



@Injectable()
export class HttpService {
  constructor(private http: Http,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) 
    { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic c3ByaW5nLWJlbmVmaXQ6c3ByaW5nLWJlbmVmaXQ=');
    headers.append('Content-Type', 'application/json');
  }

  getAll(url: string): Observable<any> {
    let accessTokenParam = url.indexOf("?") >= 1 ? "&access_token=" + localStorage.getItem("access_token") : "?access_token=" + localStorage.getItem("access_token");
    url = url + accessTokenParam;
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  delete(url: string): Observable<any> {
    let accessTokenParam = url.indexOf("?") >= 1 ? "&access_token=" + localStorage.getItem("access_token") : "?access_token=" + localStorage.getItem("access_token");
    url = url + accessTokenParam;
    return this.http.delete(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  get(url: string): Observable<any> {
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleError);
  }

  save(object: any, url: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, object, options)
      .share()
      .map(this.extractData)
      .catch(this.handleError)
  }

  update(object: any, url: string): Observable<any> {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(url, object, options)
      .share()
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllByEntityId(object: any, url: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, object, options)
      .share()
      .map(this.extractData)
      .catch(this.handleError);
  }

  getAllByEntityIds(object: any, url: string, pages: string): Observable<any> {
    let accessTokenParam = url.indexOf("?") >= 1 ? "&access_token=" + localStorage.getItem("access_token") : "?access_token=" + localStorage.getItem("access_token");
    url = url + accessTokenParam + pages;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, object, options)
      .share()
      .map(this.extractData)
      .catch(this.handleError);
  }

  public extractData(res: Response) {
    let body = res.json();
    return body;
  }

  public handleError(error: Response | any) {

    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error != null ? JSON.stringify(body) : JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(error);
  }

  login(object: any, url: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append("Authorization", "Basic c3ByaW5nLWJlbmVmaXQ6c3ByaW5nLWJlbmVmaXQ=")
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, object, options)
      .share()
      .map(this.extractData)
      .catch(this.handleError);
  }


  logout(object: any, url: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, object, options)
      .share()
      .map(this.extractData)
      .catch(this.handleError);
  }

}