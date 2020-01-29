import {Injectable} from '@angular/core';
import {CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {UserService} from './user/shared/user.service';
import {User} from './user/shared/user';

@Injectable({
  providedIn: 'root'
})
export class MedewerkerGuard implements CanActivate, CanActivateChild {
  private user: User;
  private role: string;

  constructor(private userService: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfAllowed();
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkIfAllowed();
  }

  private checkIfAllowed() {
    return this.userService.getCurrentUser().role.toString() === 'ADMIN' || this.userService.getCurrentUser().role.toString() === 'MEDEWERKER';
  }
}
