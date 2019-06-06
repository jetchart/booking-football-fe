import { Component, OnInit } from '@angular/core';
import {HourDayService} from '../../services/hour.day.service';
import {HourDay} from '../../domain/hour.day';
import {Day} from '../../domain/day';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.scss']
})
export class ReservesComponent implements OnInit {

  public hourDaysMonday: HourDay[] = new Array();
  public days: Day[];
  public reserves: HourDay[];

  constructor(private _hourDaysService: HourDayService) { }

  ngOnInit() {
    //this.hours = this._hourDaysService.getHours();
    //this.reserves = this._hourDaysService.getDayHoursByDay(1);
    this.days = this._hourDaysService.getDays();
    this.days
      .forEach(
        day => {
          if (day.description === 'Monday') {
            this.hourDaysMonday = this._hourDaysService.getHourDayByDay(day.id);
          }
        }
      );
    console.log("Days: ", this.days);
    console.log("Hours for Monday: ", this.hourDaysMonday);
  }

}
