import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matsidenav',
  templateUrl: './matsidenav.component.html',
  styleUrls: ['./matsidenav.component.scss']
})
export class MatsidenavComponent implements OnInit {

  opened = false;
  constructor() { }

  ngOnInit() {
  }

}
