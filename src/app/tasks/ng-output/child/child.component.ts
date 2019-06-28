import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'tasks-ng-output-child-comp',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() eventButtonClicked = new EventEmitter<{counter:number}>();
  counter = 0

  ngOnInit() {
    setInterval(() => {this.counter++}, 1000)
  }

  buttonClicked() {
    this.eventButtonClicked.emit({counter: this.counter});
  }

}
