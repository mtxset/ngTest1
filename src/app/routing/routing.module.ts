import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RoutingComponent } from './routing/routing.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServersService } from './servers/server.service';
import { UserComponent } from './users/user/user.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { RoutesModule } from './routes/routes.module';
import { AuthService } from './auth.service';
import { AuthguardGuard } from './authguard.guard';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

@NgModule({
  declarations:
  [
    RoutingComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    ServerComponent,
    EditServerComponent,
    UserComponent,
    NotFoundPageComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RoutesModule
  ],
  exports: [RoutingComponent],
  providers: [
    ServersService,
    AuthService,
    AuthguardGuard,
    CanDeactivateGuard,
    ServerResolver],
})
export class RoutingModule { }
