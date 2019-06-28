import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[tasks-hide-directive]'
})
export class HideDirectiveDirective {

  @HostListener('mouseenter') mouseOver(eventData: Event)
  {
    this.visiblility = "hidden";
  }

  @HostBinding('style.visibility') visiblility: string;

  constructor() { }

}
