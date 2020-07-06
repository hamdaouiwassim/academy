import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class userguard implements CanActivate {
  constructor(/*public auth,*/ public router: Router) {}
  canActivate(): boolean {
    // if (!this.auth.isAuthenticated()) {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return true;
  }
}
@Injectable({
  providedIn: 'root'
})
export class adminguard implements CanActivate {
  constructor(/*public auth,*/ public router: Router) {}
  canActivate(): boolean {
    // if (!this.auth.isAuthenticated()) {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return true;
  }
}
@Injectable({
  providedIn: 'root'
})
export class anonguard implements CanActivate {
  constructor(/*public auth,*/ public router: Router) {}
  canActivate(): boolean {
    // if (!this.auth.isAuthenticated()) {
    //   this.router.navigate(['login']);
    //   return false;
    // }
    return true;
  }
}