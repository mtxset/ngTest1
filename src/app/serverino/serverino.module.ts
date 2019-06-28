import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { ServerinoComponent } from './serverino.component';

@NgModule({
  declarations: [CockpitComponent, ServerElementComponent, ServerinoComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports: [ServerinoComponent],
  bootstrap: [ServerinoComponent]
})
export class ServerinoModule { }
