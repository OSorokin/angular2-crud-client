import {Http, Response, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {User} from "../models/user";
import {Gender} from "../models/gender.enum";
import {isUndefined} from "util";

@Injectable()
export class UsersService {

  private usersUrl:string = 'http://localhost:3000/users';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor (private http: Http) {}

  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError);
  }

  getUser( id:number ):  Promise<User>{
    console.log(this.usersUrl +"/" + id);
    return this.http.get(this.usersUrl +"/" + id)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  create(user:User): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  update(id:number,user:User): Promise<User> {

  return this.http
    .put(this.usersUrl +"/" + id, JSON.stringify(user), {headers: this.headers})
    .toPromise()
    .then(response => response.json().data as User)
    .catch(this.handleError);
}

  delete(id:number):Promise<User>{
    return this.http.delete(this.usersUrl +"/" + id)
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  genderToStringRus(gender:Gender):string{
    var result:string;
    switch (gender) {
      case Gender.MAN:
        result = "Мужской";
        break;
      case Gender.WOMAN:
        result = "Женский";
        break;
    }
    return result;
  };

  genderToString(gender:Gender):string{
    var result:string;
    switch (gender) {
      case Gender.MAN:
        result = "MAN";
        break;
      case Gender.WOMAN:
        result = "WOMAN";
        break;
    }
    return result;
  };

  genderStringToStringRus(gender:string):string{

    var result:string;
    var g : Gender = <Gender>Gender[gender];

    switch (g) {
      case Gender.MAN:
        result = "Мужской";
        break;
      case Gender.WOMAN:
        result = "Женский";
        break;
    }
    return result;
  };

}
