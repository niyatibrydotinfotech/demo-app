import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Router, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalService } from '../services/global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  } */
  // canLoad(
  //   route: Route,
  //   segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
  //   return true;
  // }

  constructor(
    private router: Router, 
    private globalService: GlobalService
    ) {}

  canActivate() {
    let status = this.globalService.isAuthentication();
    if(status == true) {
      return true;
    } 
    this.router.navigate([this.globalService.routeData.auth]);
    return false;
  }

  canActivateChild() {
    let status = this.globalService.isAuthentication();
    if(status == true) {
      return true;
    } 
    this.router.navigate([this.globalService.routeData.auth]);
    return false;
  }
}
