import { Component,  } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'account-new-comp',
  templateUrl: './account-new.component.html',
  styleUrls: ['./account-new.component.css'],
})
export class AccountNewComponent
{

  constructor(
    private loggingService: LoggingService,
    private accountsSerivce: AccountsService)
  {
    this.accountsSerivce.statusUpdates.subscribe(
      (status: string) => alert('new status' + status)
    )
  }

  onCreateAccount(accountName: string, accountStatus: string)
  {
    this.accountsSerivce.addAccount(accountName, accountStatus);
    //this.loggingService.logStatusChange(accountStatus);
  }

}
