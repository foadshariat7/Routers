import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './login-service.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  
  constructor(private loginService: LoginService, private router: Router) { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | Observable<boolean> | Promise<boolean> {
    return this.loginService.isAuthenticated().then(
      (auth: boolean) => {
        if (auth) {
          return true;
        } else {
          this.router.navigate(['/']);
          return false;
        }
      }
    );

  }
      canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate(childRoute, state);
      }
  
  
}
