import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasks-cont-projection-child-comp',
  templateUrl: './cont-projection-child.component.html',
  styleUrls: ['./cont-projection-child.component.css']
})
export class ContProjectionChildComponent implements OnInit {

  hidden = false;

  constructor() { }

  ngOnInit() {
  }

  getName(): string
  {
    return this.hidden ? 'Hide' : 'Show';
  }

  onShow(): void
  {
    this.hidden = !this.hidden;
  }

}
