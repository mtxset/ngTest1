import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tasks-ng-input-addr-comp',
  templateUrl: './addr-comp.component.html',
  styleUrls: ['./addr-comp.component.css']
})
export class AddrCompComponent implements OnInit {

  @Input() location: { };
  constructor() { }

  ngOnInit() {
  }

}
