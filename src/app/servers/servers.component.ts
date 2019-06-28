import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit
{
  allowNewServers = true;

  newServers = "None";

  serverName = "";

  addedNewServer = false;

  serversLst = ['srv0', 'srv1']

  constructor()
  {
    setTimeout(()=>{ this.allowNewServers = !this.allowNewServers}, 2000)
  }

  ngOnInit() {
  }

  onUpdateServerName(event: Event)
  {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onNewServerBtnClick()
  {
    this.addedNewServer = true;
    this.serversLst.push(this.serverName);
    this.newServers = `server++ name ${this.serverName}`;
  }
}
