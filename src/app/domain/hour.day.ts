import {Day} from './day';

export class HourDay {

  private _id: number;
  private _day: Day;
  private _hour: string;
  private _enabled: boolean;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get day(): Day {
    return this._day;
  }

  set day(value: Day) {
    this._day = value;
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
