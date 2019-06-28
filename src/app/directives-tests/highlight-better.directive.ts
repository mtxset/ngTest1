import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[directives-tests-highlight-better]'
})
export class HighlightBetterDirective implements OnInit
{
  @Input() defaultColor: string = 'transparent';
  @Input('directives-tests-highlight-better') highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') mouseOver(eventData: Event)
  {
    this.changeColor( this.highlightColor);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event)
  {
    this.changeColor( this.defaultColor );
  }

  ngOnInit(): void
  {
    this.changeColor( this.highlightColor );
  }

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,)
  { }

  private changeColor(color:string)
  {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
    this.backgroundColor = color;
  }

}
