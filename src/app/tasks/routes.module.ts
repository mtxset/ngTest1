import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskComp } from './tasks.comp';

const routes: Routes =
[
  { path: "tests", component: TaskComp }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
