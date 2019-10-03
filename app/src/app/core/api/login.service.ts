import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { LoginModel, LoginResponseModel } from '../models';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginService {

    constructor(private http: HttpClient) { }

    login(model: LoginModel) {
        return this.http.post<LoginResponseModel>(environment.apiUrl + '/login', model);
    }
}
