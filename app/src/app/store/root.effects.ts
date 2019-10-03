import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';

import { EncodeService, LoginService } from '../core/api';
import { RootActionTypes, EncodeRequest, LoginRequest, LoginSuccess, LoginFailure, EncodeFailure, EncodeSuccess } from './root.actions';
import { AuthService } from '../core/services/auth.service';

@Injectable()
export class RootEffects {

    login$ = createEffect(() => this.actions$.pipe(
        ofType<LoginRequest>(RootActionTypes.LoginRequest),
        switchMap(action => this.loginService.login(action.payload.data)
            .pipe(
                map(response => new LoginSuccess({ data: { token: response.token } })),
                catchError(error => of(new LoginFailure({ error: 'Login failed' })))
            )
        )
    ));

    encode$ = createEffect(() => this.actions$.pipe(
        ofType<EncodeRequest>(RootActionTypes.EncodeRequest),
        switchMap(action => this.encodeService.encode(action.payload.data)
            .pipe(
                map(response => new EncodeSuccess({ data: { result: response.result } })),
                catchError(error => of(new EncodeFailure({ error: 'Encode failed' })))
            )
        )
    ));

    redirect$ = createEffect(() => this.actions$.pipe(
        ofType<LoginSuccess>(RootActionTypes.LoginSuccess),
        tap(() => { this.auth.successfulLogin(); })
    ), { dispatch: false });

    error$ = createEffect(() => this.actions$.pipe(
        ofType<EncodeFailure|LoginFailure>(RootActionTypes.EncodeFailure, RootActionTypes.LoginFailure),
        tap((action) => { alert(action.payload.error); })
    ), { dispatch: false });

    constructor(
        private actions$: Actions,
        private encodeService: EncodeService,
        private loginService: LoginService,
        private auth: AuthService
    ) { }

}
