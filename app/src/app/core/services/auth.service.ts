import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    public token$: Observable<string>;
    public authenticated$: Observable<boolean>;

    constructor(private router: Router) {
        this.authenticated$ = new BehaviorSubject(false).asObservable(); // this.token$.pipe(map(t => !!t))
    }

    public login() {
        return null;
    }

    public redirectToLogin() {
        this.router.navigate(['login']);
    }
}
