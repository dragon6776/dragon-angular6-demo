import { Injectable } from '@angular/core';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageUserService {

  constructor() { }

  get USERS() { return this.getUsersFromLS(); }
  get CURRENT_USER(): User {
    var strCurrentUser = localStorage.getItem('currentUser');
    if (strCurrentUser) {
      return JSON.parse(strCurrentUser);
    }
    return null;
  };
  set CURRENT_USER(user: User) {
    localStorage.removeItem('currentUser');
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
  };

  getUsersFromLS(): User[] {
    let strlcUsers = localStorage.getItem('USERS');
    return strlcUsers ? JSON.parse(strlcUsers) : [];
  };

  createUserToLS(user: User) {
    let usersData: User[] = this.getUsersFromLS();
    let arr: number[] = usersData.map(x => x.id);
    user.id = !arr.length ? 1000 : (Math.max(...arr) + 1);
    // var maxId = usersData.reduce((max, p) => p.id > max ? p.id : max, usersData[0].id);

    usersData.push(user);
    this.saveChangesToLS(usersData);
  };

  removeUserFromLS(id: number) {
    var usersData: User[] = this.getUsersFromLS();
    let index = usersData.findIndex(id => id === id);
    usersData.slice(index, 1);
    this.saveChangesToLS(usersData);
  };

  saveChangesToLS(usersData: User[]) {
    localStorage.removeItem('USERS');
    localStorage.setItem('USERS', JSON.stringify(usersData));
  };
}
