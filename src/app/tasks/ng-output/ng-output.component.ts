import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks-ng-output-comp',
  templateUrl: './ng-output.component.html',
  styleUrls: ['./ng-output.component.css']
})
export class NgOutputComponent implements OnInit {

  currentCounter;

  constructor() { }

  ngOnInit() {
  }

  handleChildEvent(data: {counter:number})
  {
    this.currentCounter = data.counter;
  }
}
