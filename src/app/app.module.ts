import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatTabsModule } from "@angular/material/tabs";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';

// Main
import { AppComponent } from './app.component';

import { ServerComp } from './server/server.comp';
import { ServersComponent } from './servers/servers.component'

// Modules
import { TaskMod } from './tasks/tasks.module';
import { RecipeShopMod } from './recipeShop/recipeShop.mod';
import { ServerinoModule } from './serverino/serverino.module';
import { DirectivesTestsModule } from './directives-tests/directives-tests.module';
import { ServiceTestsModule } from './service-tests/service-tests.module';
import { RoutingModule } from './routing/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ServerComp,
    ServersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatTabsModule,
    BrowserAnimationsModule,

    TaskMod,
    RecipeShopMod,
    ServerinoModule,
    DirectivesTestsModule,
    ServiceTestsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
