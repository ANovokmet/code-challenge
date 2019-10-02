import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authenticationService: AuthService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.authenticationService.authenticated$.pipe(map(isAuthenticated => {
            if (!isAuthenticated) {
                console.log('redirect');
                this.authenticationService.redirectToLogin();
            }

            return isAuthenticated;
        }));
    }
}
