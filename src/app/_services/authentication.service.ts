import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { LocalstorageUserService } from './localstorage-user.service';
import { Observable,of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private lsUserService: LocalstorageUserService) { }

  login(username: string, password: string): Observable<any> {
    // login successful if there's jwt token in the response
    let user = this.lsUserService.USERS.find(x => x.username === username && x.password === password);
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    if (user) {
      this.lsUserService.CURRENT_USER = user;
    }

    return of({id: user.id, username: user.username, firstName: user.firstName, lastName: user.lastName})
      .pipe(delay(2000));
  }

  logout(): Observable<any> {
    // remove user from local storage to log user out
    this.lsUserService.CURRENT_USER = null;
    return of({}).pipe(delay(2000));
  }
}
