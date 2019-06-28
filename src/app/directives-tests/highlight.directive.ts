import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[directives-tests-highlight]'
})
export class HighlightDirective implements OnInit
{
  ngOnInit(): void
  {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

  constructor(
    private elementRef: ElementRef)
  { }
}
