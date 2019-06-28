import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'serverino-server-element',
  templateUrl: './server-element.component.html',
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent
implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
{

  @Input("server-element-input") element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('header', {static: false}) header: ElementRef;
  @ContentChild('contentP', {static: false}) contentP: ElementRef;

  ngOnDestroy(): void
  {
    console.log('onDestroy');
  }

  ngAfterViewInit(): void
  {
    console.log('ngAfterViewInit');
    console.log('Content:', this.header.nativeElement.textContent);
    console.log('Content Par.:', this.contentP.nativeElement.textContent);
  }

  ngAfterViewChecked(): void
  {
    console.log('ngAfterViewChecked');
  }

  ngAfterContentChecked(): void
  {
    console.log('ngAfterContentChecked');
  }

  constructor() { console.log('constructor'); }

  ngOnChanges(changes: SimpleChanges) { console.log('Changes', changes); }

  ngOnInit()
  {
    console.log('ngOnInit');
    //console.log('Content', this.header.nativeElement.textContent);
    //console.log('Content Par.:', this.contentP.nativeElement.textContent);
  }

  ngDoCheck() { console.log('ngDoCheck'); }

  ngAfterContentInit() { console.log('ngAfterContentInit'); }

}
