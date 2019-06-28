import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'home-comp',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  private onLoadServers(id: number):void
  {
    this.router.navigate
    (
      ['/servers', id, 'edit'],
      {queryParams: {'allowEdit':1} }
    );
  }

  onLogin() { this.authService.login(); }

  onLogout() { this.authService.logoff(); }
}
