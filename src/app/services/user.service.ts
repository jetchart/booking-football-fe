import {Injectable} from '@angular/core';
import {HourDay} from '../domain/hour.day';
import {Day} from '../domain/day';
import {Booking} from '../domain/booking';
import {User} from '../domain/user';
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable()
export class UserService {

  constructor(private _db: AngularFireDatabase) {
  }

  public getUsers(): Promise<firebase.database.DataSnapshot> {
    return this._db.database.ref('users').once('value');
  }

  public save(user: User): Promise<any>{
    return this._db.database.ref('users/' + user.id).set(user);
  }

  public delete(id: number): Promise<any>{
    return this._db.database.ref('users/' + id).remove();
  }

}
