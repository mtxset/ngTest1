import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'service-tests-comp',
  templateUrl: './service-tests.component.html',
  styleUrls: ['./service-tests.component.css'],
})
export class ServiceTestsComponent implements OnInit {

  accounts : {name:string, status:string}[] = [];

  constructor(
    private accountsService: AccountsService
  ) { }

  ngOnInit()
  {
    this.accounts = this.accountsService.accounts;
  }
}
