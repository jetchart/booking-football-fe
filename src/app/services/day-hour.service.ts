import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "@angular/fire/database";
import {Observable} from "rxjs";
import {Day} from "../domain/day";

@Injectable({
  providedIn: 'root'
})
export class DayHourService {

  constructor(private _db: AngularFireDatabase) {
  }

  public getDayHours(dayId: number): Observable<any[]> {
    return this._db.list('dayHours/',ref => ref.orderByChild('dayId').equalTo(dayId)).valueChanges();
  }

  public save(day: Day): Promise<any> {
    return this._db.database.ref('dayHours/' + day.id).set(day);
  }

  public delete(id: number): Promise<any> {
    return this._db.database.ref('dayHours/' + id).remove();
  }

}
