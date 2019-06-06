import {Injectable} from '@angular/core';
import {HourDay} from '../domain/hour.day';
import {Day} from '../domain/day';
import {Booking} from '../domain/booking';

@Injectable()
export class HourDayService {

  public getHourDayByDay(day: number): HourDay[]{
    let list: HourDay[] = new Array();
    const days = this.getDays();

    let hourDay = new HourDay();
    hourDay.day = days[day];
    hourDay.hour = "00:00"
    list.push(hourDay);

    hourDay = new HourDay();
    hourDay.day = days[day];
    hourDay.hour = "01:00"
    list.push(hourDay);

    hourDay = new HourDay();
    hourDay.day = days[day];
    hourDay.hour = "02:00"
    list.push(hourDay);

    return list;
  }

  public getDays(): Day[]{
    let list: Day[] = new Array();

    let day = new Day();
    day.id = 1;
    day.description = 'Monday';
    day.enabled = true;
    list.push(day);

    day = new Day();
    day.id = 2;
    day.description = 'Wednesday';
    day.enabled = true;
    list.push(day);

    day = new Day();
    day.id = 2;
    day.description = 'Friday';
    day.enabled = true;
    list.push(day);

    return list;
  }

  public bookingsByDay(day: number): Booking[] {
    let list: Booking[] = new Array();
    const hourDays = this.getHourDayByDay(1);


    let booking = new Booking();
    booking.hourDay = hourDays[0];
    booking.user = "JETCHART";
    list.push(booking);

    return list;
  }

}
