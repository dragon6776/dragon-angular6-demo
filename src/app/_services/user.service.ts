import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { LocalstorageUserService } from './localstorage-user.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private lsUserService: LocalstorageUserService) { 
  }

  get users(): User[]{
    return this.lsUserService.getUsersFromLS();
  }

  getAll(): Observable<User[]> {
    return of(this.users).pipe(delay(2000));
  }

  register(user: User): Observable<any> {
    this.lsUserService.createUserToLS(user);
    return of({username: user.username, sucess: true})
      .pipe(delay(2000));
  }
}
