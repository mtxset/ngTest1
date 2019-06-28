import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectivesTestsComponent } from './directives-tests.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightBetterDirective } from './highlight-better.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [DirectivesTestsComponent, HighlightDirective, HighlightBetterDirective, UnlessDirective],
  exports: [DirectivesTestsComponent],
  imports: [
    CommonModule
  ],
  bootstrap: [DirectivesTestsComponent]
})
export class DirectivesTestsModule { }
