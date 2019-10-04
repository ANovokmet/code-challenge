import { Action } from '@ngrx/store';
import { LoginResponseModel, LoginModel, EncodeResponseModel, EncodeModel } from '../core/models';

export enum RootActionTypes {
    LoginRequest = '[Root] Login Request',
    LoginSuccess = '[Root] Login Success',
    LoginFailure = '[Root] Login Failure',
    EncodeRequest = '[Root] Encode Request',
    EncodeSuccess = '[Root] Encode Success',
    EncodeFailure = '[Root] Encode Failure',
}

export class LoginRequest implements Action {
    readonly type = RootActionTypes.LoginRequest;
    constructor(public payload: { data: LoginModel }) { }
}

export class LoginSuccess implements Action {
    readonly type = RootActionTypes.LoginSuccess;
    constructor(public payload: { data: LoginResponseModel }) { }
}

export class LoginFailure implements Action {
    readonly type = RootActionTypes.LoginFailure;
    constructor(public payload: { error: any }) { }
}

export class EncodeRequest implements Action {
    readonly type = RootActionTypes.EncodeRequest;
    constructor(public payload: { data: EncodeModel }) { }
}

export class EncodeSuccess implements Action {
    readonly type = RootActionTypes.EncodeSuccess;
    constructor(public payload: { data: EncodeResponseModel }) { }
}

export class EncodeFailure implements Action {
    readonly type = RootActionTypes.EncodeFailure;
    constructor(public payload: { error: any }) { }
}

export type RootActions = LoginRequest | LoginSuccess | LoginFailure | EncodeRequest | EncodeSuccess | EncodeFailure;

