import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks-ng-child-vars-child-comp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class NgChildVarsComponentChildComp implements OnInit {

  private stopped = false;
  private counter = 0;
  private intervalId;

  ngOnInit() {
    this.intervalId = setInterval(() => {this.counter++}, 1000)
  }

  stopTimer() {
    clearInterval(this.intervalId)
    this.stopped = true
  }
}
