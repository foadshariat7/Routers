import { Injectable } from '@angular/core';
import { IUser } from '../user';

@Injectable()
export class UserService {

  users: IUser[] = [
    {id: 1, name: 'foad'},
    {id: 2, name: 'ali'},
    {id: 3, name: 'john'}
  ];

  constructor() { }

  getUsers() {
    return this.users;
  }

  getUser(id: number) {
    const user = this.users.find(
      (u) => {
        return u.id === id;
      });
    return user;
  }
}
