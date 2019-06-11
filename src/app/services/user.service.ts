import {Injectable} from '@angular/core';
import {User} from '../domain/user';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";

@Injectable()
export class UserService {

  constructor(private _db: AngularFireDatabase) {
  }

  public getUsers(): Observable<any[]>{
    return this._db.list('users').valueChanges();
  }

  public save(user: User): Promise<any>{
    return this._db.database.ref('users/' + user.id).set(user);
  }

  public delete(id: number): Promise<any>{
    return this._db.database.ref('users/' + id).remove();
  }

}
