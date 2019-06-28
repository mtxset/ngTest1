import { Component, Input, } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'account-comp',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent
{

  constructor(
    private loggingService: LoggingService,
    private accountsService: AccountsService)
  {}

  @Input() account: {name: string, status: string};
  @Input() id: number;

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdates.emit(status);
    //this.loggingService.logStatusChange(status);
  }

}
