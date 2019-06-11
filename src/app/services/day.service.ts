import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";
import {User} from "../domain/user";
import {Day} from "../domain/day";

@Injectable({
  providedIn: 'root'
})
export class DayService {

  constructor(private _db: AngularFireDatabase) {
  }

  public getDays(): Observable<any[]> {
    return this._db.list('days').valueChanges();
  }

  public getDay(id: number): Observable<any[]> {
    return this._db.list('days/' + id).valueChanges();
  }

  public save(day: Day): Promise<any> {
    return this._db.database.ref('days/' + day.id).set(day);
  }

  public delete(id: number): Promise<any> {
    return this._db.database.ref('days/' + id).remove();
  }

}
