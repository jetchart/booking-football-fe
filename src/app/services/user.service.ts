import {Injectable} from '@angular/core';
import {HourDay} from '../domain/hour.day';
import {Day} from '../domain/day';
import {Booking} from '../domain/booking';
import {User} from '../domain/user';

@Injectable()
export class UserService {

  public getUsers(): User[]{
    let list: User[] = new Array();

    let user = new User();
    user.name = 'Juan';
    user.surname = 'Etchart';
    user.email = 'jetchart@gmail.com';
    user.birthday = new Date();
    list.push(user);

    user = new User();
    user.name = 'Lionel';
    user.surname = 'Messi';
    user.email = 'lmessi@@gmail.com';
    user.birthday = new Date();
    list.push(user);

    user = new User();
    user.name = 'Roberto';
    user.surname = 'Carlos';
    user.email = 'rcarlos@@gmail.com';
    user.birthday = new Date();
    list.push(user);

    return list;
  }

}
