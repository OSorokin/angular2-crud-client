import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { User } from './user.model';
import { api as usersApi } from '../../core/users.api';

@Injectable()
export class UsersService {

  private headers = new Headers({'Content-Type': 'application/json'});

  static handleError(error: Response | any) {
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

  constructor(private http: Http) {}

  getUsers(): Observable<User[]> {
    return this.http.get(usersApi.url)
      .map(response => response.json().data as Array<User>)
      .catch(UsersService.handleError);
  }

  getUser(id: number): Observable<User> {
    return this.http.get(usersApi.url + '/' + id)
      .map(response => response.json().data as User)
      .catch(UsersService.handleError);
  }

  create(user: User): Observable<User> {
    return this.http
      .post(usersApi.url, user, {headers: this.headers})
      .map(response => response.json().data as User)
      .catch(UsersService.handleError);
  }

  update(id: number, user: User): Observable<User> {
    return this.http
      .put(usersApi.url + '/' + id, user, {headers: this.headers})
      .map(response => response.json().data as User)
      .catch(UsersService.handleError);
  }

  delete(id: number): Observable<User> {
    return this.http.delete(usersApi.url + '/' + id)
      .map(response => response.json().data as User)
      .catch(UsersService.handleError);
  };

}
