import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { LoginModel } from 'src/app/core/models';
import { RootState } from '../store/root.state';
import { LoginRequest, selectError } from '../store';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

    public model: LoginModel = {
        email: '',
        password: ''
    };
    error$: any;

    constructor(private store$: Store<RootState>) {
        this.error$ = store$.pipe(select(selectError));
    }

    ngOnInit() {
    }

    submit() {
        this.store$.dispatch(new LoginRequest({data: { ...this.model }}));
    }


}
