import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks-ng-input-comp',
  templateUrl: './ng-input.component.html',
  styleUrls: ['./ng-input.component.css']
})

export class NgInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  event = {name:'ngConf 2025', date: '3/1/2025', time: '8am', location: {address: '123 Main St', city: 'Salt Lake City, UT', country: 'USA'}}
}
