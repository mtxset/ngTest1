import { Component } from "@angular/core";

@Component({
  selector: "all-task-comp",
  templateUrl: "./tasks.comp.html",
  styles:
  [`
  /deep/.mat-tab-label, /deep/.mat-tab-label-active{
    min-width: 0!important;
    padding: 3px!important;
    margin: 3px!important;
   }
  `]
})

export class TaskComp {}
