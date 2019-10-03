import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EncodeModel, EncodeResponseModel } from '../models';
import { environment } from 'src/environments/environment';

@Injectable()
export class EncodeService {

    constructor(private http: HttpClient) { }

    encode(model: EncodeModel) {
        return this.http.post<EncodeResponseModel>(environment.apiUrl + '/encode', model);
    }
}
