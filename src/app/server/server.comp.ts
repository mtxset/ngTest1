import { Component } from '@angular/core';

@Component({
  selector: 'app-server-comp',
  templateUrl: './server.comp.html',
  styles:
  [
    `.online {color:white;}`
  ]
})
export class ServerComp
{
  serverId = 322;
  serverStatus = Math.random() > 0.5 ? 'online' : 'died';

  getServerStatus()
  {
    return this.serverStatus;
  }

  getServerStatusColor()
  {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
