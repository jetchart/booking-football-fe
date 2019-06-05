import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserves',
  templateUrl: './reserves.component.html',
  styleUrls: ['./reserves.component.scss']
})
export class ReservesComponent implements OnInit {

  public options = ['Lionel Messi', 'Juan Etchart', 'Roberto Carlos'];

  public reserves = [
    {day: 'Monday', hour1: 'NO', hour2: 'NO', hour3: 'YES'},
    {day: 'Tuesday', hour1: 'NO', hour2: 'YES', hour3: 'NO'},
    {day: 'Wendesney', hour1: 'NO', hour2: 'NO', hour3: 'NO'},
    {day: 'Thursday', hour1: 'NO', hour2: 'NO', hour3: 'NO'},
    {day: 'Friday', hour1: 'YES', hour2: 'YES', hour3: 'YES'},
    {day: 'Saturday', hour1: 'NO', hour2: 'NO', hour3: 'NO'},
    {day: 'Sunday', hour1: 'YES', hour2: 'NO', hour3: 'YES'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
