import * as moment from 'moment';

export class User {

  private _id: number;
  private _name: string;
  private _surname: string;
  private _username: string;
  //private _birthday: moment;


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get surname(): string {
    return this._surname;
  }

  set surname(value: string) {
    this._surname = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

 /* get birthday(): moment {
    return this._birthday;
  }

  set birthday(value: moment) {
    this._birthday = value;
  }*/

}
