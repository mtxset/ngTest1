import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { UsersComponent } from '../users/users.component';
import { UserComponent } from '../users/user/user.component';
import { AuthguardGuard } from '../authguard.guard';
import { ServerComponent } from '../servers/server/server.component';
import { EditServerComponent } from '../servers/edit-server/edit-server.component';
import { CanDeactivateGuard } from '../servers/edit-server/can-deactivate-guard';
import { NotFoundPageComponent } from '../not-found-page/not-found-page.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { ServerResolver } from '../servers/server/server-resolver.service';
import { ServersComponent } from '../servers/servers.component';

const appRoutes: Routes =
[
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent,
    children:
    [
      { path: ':id', component: UserComponent },
    ]
  },
  { path: 'servers', canActivateChild: [AuthguardGuard], component: ServersComponent,
    children:
    [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard]},
    ]
  },
  // { path: 'not-found', component: NotFoundPageComponent},
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page not found! GG' } },
  { path: '**', redirectTo:'not-found' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  exports: [RouterModule]
})
export class RoutesModule { }
