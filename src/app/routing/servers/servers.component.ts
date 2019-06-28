import { Component, OnInit } from '@angular/core';
import { ServersService } from './server.service';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'servers-comp',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload()
  {
    this.router.navigate(['servers'], { relativeTo: this.route });
  }

}
