import { Component, OnInit } from '@angular/core';
import { ServersService } from '../server.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate-guard';
import { Observable } from 'rxjs';

@Component({
  selector: 'servers-edit-server-comp',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {

  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  allowEdit = false;

  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router) {

     }

  ngOnInit() {

    this.route.queryParams.subscribe
    (
      (queryParams: Params) =>
      {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    )
    this.server = this.serversService.getServer( +this.route.snapshot.params['id']);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer()
  {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean>
  {
    if (!this.allowEdit)
    {
      return true;
    }

    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved)
    {
      return confirm('Save changes?');
    }
    else
    {
      return true;
    }
  }
}
