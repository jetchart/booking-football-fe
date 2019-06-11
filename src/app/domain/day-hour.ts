import {Day} from './day';

export class HourDay {

  private _id: number;
  private _dayId: number;
  private _hour: string;
  private _enabled: boolean;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dayId(): number {
    return this._dayId;
  }

  set dayId(value: number) {
    this._dayId = value;
  }

  get hour(): string {
    return this._hour;
  }

  set hour(value: string) {
    this._hour = value;
  }

  get enabled(): boolean {
    return this._enabled;
  }

  set enabled(value: boolean) {
    this._enabled = value;
  }

}
