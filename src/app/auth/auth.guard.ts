import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DataService } from '../services/data.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _authService: DataService,
    private _router: Router) { }

    canActivate(): boolean {
      if (this._authService.loggedIn()) {
        console.log('true')
        return true
      } else {
        console.log('false')            
        this._router.navigate(['/login'])
        return false
      }
    }
 /* canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }*/
}
