import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { TaskComp } from './tasks.comp';

import { BindingExComp } from "./binding/comp";
import { NgForComponent } from './ng-for/ng-for.component';
import { NgForAndIfComponent } from "./ng-for-and-if/ng-for-and-if.comp";
import { NgForHiddenComp  } from "./ng-for-hidden/ng-for-hidden.comp";
import { NgSwitchExComp  } from "./ngSwitch/ngSwitch.comp";
import { NgClassExComp } from "./ngClass/ngClasss.comp";
import { NgStyleExComp } from './ngStyle/ngStyle.comp';
import { NgInputComponent } from './ng-input/ng-input.component';
import { AddrCompComponent } from './ng-input/addr-comp/addr-comp.component';
import { NgOutputComponent } from './ng-output/ng-output.component';
import { ChildComponent } from './ng-output/child/child.component';
import { NgChildVarsComponent } from './ng-child-vars/ng-child-vars.component';
import { NgChildVarsComponentChildComp } from './ng-child-vars/child/child.component';
import { ContProjectionComponent } from './cont-projection/cont-projection.component';
import { ContProjectionChildComponent } from './cont-projection/cont-projection-child/cont-projection-child.component';
import { ContProjMultiComponent } from './cont-proj-multi/cont-proj-multi.component';
import { ProjMultiChildComponent } from './cont-proj-multi/proj-multi-child/proj-multi-child.component';
import { HideThemAllComponent } from './hide-them-all/hide-them-all.component';
import { HideDirectiveDirective } from './hide-them-all/hide-directive.directive';
import { RoutesModule } from './routes.module';

@NgModule({
  declarations:
  [
    TaskComp,
    BindingExComp,
    NgForComponent,
    NgForAndIfComponent,
    NgForHiddenComp,
    NgSwitchExComp,
    NgClassExComp,
    NgStyleExComp,
    NgInputComponent,
    AddrCompComponent,
    NgOutputComponent,
    ChildComponent,
    NgChildVarsComponent,
    NgChildVarsComponentChildComp,
    ContProjectionComponent,
    ContProjectionChildComponent,
    ContProjMultiComponent,
    ProjMultiChildComponent,
    HideThemAllComponent,
    HideDirectiveDirective,
  ],
  exports:
  [
    TaskComp
  ],
  imports:
  [
    CommonModule,
    MatTabsModule,
    BrowserAnimationsModule,
    RoutesModule
  ],
  bootstrap: [TaskComp]
})

export class TaskMod {}
