import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceTestsComponent } from './service-tests/service-tests.component';
import { AccountComponent } from './account/account.component';
import { AccountNewComponent } from './account-new/account-new.component';
import { AccountsService } from './services/accounts.service';
import { LoggingService } from './services/logging.service';

@NgModule({
  declarations: [ServiceTestsComponent, AccountComponent, AccountNewComponent],
  imports: [
    CommonModule
  ],
  exports: [ServiceTestsComponent],
  bootstrap: [ServiceTestsComponent],
  providers:
  [
    AccountsService,
    LoggingService
  ]
})
export class ServiceTestsModule { }
