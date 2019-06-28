import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directives-tests-comp',
  templateUrl: './directives-tests.component.html'
})
export class DirectivesTestsComponent implements OnInit {

  oddNumbers = [1, 3, 5];
  evenNumbers = [2, 4];
  onlyOdd = false;

  value = 5;

  constructor() { }

  ngOnInit() {
  }

}
