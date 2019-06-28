import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'users-user-comp',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy
{
  user: {id: number, name: string};
  paramsSub: Subscription;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit()
  {
    this.user = { id: this.route.snapshot.params['id'], name: 'gugu' };

    this.paramsSub = this.route.params.subscribe
    (
      (params: Params) =>
      {
        this.user.id = params['id'];
        this.user.name = 'gugug';
      }
    );
  }

  ngOnDestroy(): void
  {
    this.paramsSub.unsubscribe();
  }

}
