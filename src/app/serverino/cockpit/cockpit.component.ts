import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'serverino-cockpit-comp',
  templateUrl: './cockpit.component.html',
})
export class CockpitComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newServerName = '';
  newServerContent = '';

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('tempServerContent', {static:false}) serverContentInput: ElementRef;

  onAddServer(input: HTMLInputElement)
  {
    this.serverCreated.emit
    ({
      serverName: input.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(input: HTMLInputElement)
  {
    this.blueprintCreated.emit
    ({
      serverName: input.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
