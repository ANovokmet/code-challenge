import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { RootState, selectToken } from 'src/app/store';

@Injectable()
export class AuthService {

    public token$: Observable<string>;
    public authenticated$: Observable<boolean>;

    constructor(private router: Router, store$: Store<RootState>) {
        this.token$ = store$.pipe(select(selectToken));
        this.authenticated$ = this.token$.pipe(map(t => !!t));
    }

    public redirectToLogin() {
        this.router.navigate(['login']);
    }

    public successfulLogin() {
        this.router.navigate(['encoder']);
    }
}
