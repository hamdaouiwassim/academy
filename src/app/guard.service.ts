import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {UserService} from './shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private userService: UserService, public router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log("guard user");

    if (this.userService.isLoggedIn() && !this.userService.isadmin()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;

  }
}

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, public router: Router) {
  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log("guard admin");
    if (this.userService.isadmin()) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnonGuard implements CanActivate {
  constructor(private userService: UserService, public router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    console.log("guard anon");
    if ( !this.userService.isLoggedIn() && !this.userService.isadmin()) {
      return true;
    } else if(this.userService.isadmin() ){
      this.router.navigate(['books']);
    }else if(this.userService.isLoggedIn() ){
      this.router.navigate(['me/books']);
    }
    return false;
  }
}
