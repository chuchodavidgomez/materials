import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {

  minDate = new Date();
  maxDate = new Date(2020, 3, 10);
  dateFilter = date => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
  constructor() { }

  ngOnInit() {
  }

}
