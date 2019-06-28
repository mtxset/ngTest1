import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate, CanActivateChild{

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {
    return this.canActivate(childRoute, state);
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return this.authService.isAuth()
      .then
      (
        (auth: boolean) =>
        {
          if (auth)
            return true
          else
          {
            this.router.navigate(['/']);
          }
        }
      )
  }

}
