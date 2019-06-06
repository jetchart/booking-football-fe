import {HourDay} from './hour.day';

export class Booking {

  private _id: number;
  private _hourDay: HourDay;
  private _user: string; //Change for an user object
  private _status: number;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get hourDay(): HourDay {
    return this._hourDay;
  }

  set hourDay(value: HourDay) {
    this._hourDay = value;
  }

  get user(): string {
    return this._user;
  }

  set user(value: string) {
    this._user = value;
  }

  get status(): number {
    return this._status;
  }

  set status(value: number) {
    this._status = value;
  }
}
