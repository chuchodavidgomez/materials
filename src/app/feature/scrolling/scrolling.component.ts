import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolling',
  templateUrl: './scrolling.component.html',
  styleUrls: ['./scrolling.component.scss']
})
export class ScrollingComponent implements OnInit {
  numbers = [];
  constructor() {
    for (let i = 0; i < 10000; i++) {
      this.numbers.push(i);
    }
  }

  ngOnInit() {
  }

}
