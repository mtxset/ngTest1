import { Directive, HostListener, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: "[recipeShop-dropdown-directive]"
})

export class DropdownDirective implements OnInit
{

  @HostBinding('class.open') openState: boolean;

  ngOnInit(): void
  {
    this.openState = true;
  }

  @HostListener('click') onclick()
  {
    this.toggleDropdown();
  }

  toggleDropdown()
  {
    this.openState = !this.openState;
  }
}
