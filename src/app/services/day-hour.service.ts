import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";
import {DayHour} from '../domain/day-hour';

@Injectable({
  providedIn: 'root'
})
export class DayHourService {

  constructor(private _db: AngularFireDatabase) {}

  public getDayHours(dayId: number): Observable<any[]> {
    return this._db.list('dayHours/',ref => ref.orderByChild('dayId').equalTo(dayId)).valueChanges();
  }

  public save(dayHour: DayHour): Promise<any> {
    return this._db.database.ref('dayHours/' + dayHour.id).set(dayHour);
  }

  public delete(id: number): Promise<any> {
    return this._db.database.ref('dayHours/' + id).remove();
  }

}
