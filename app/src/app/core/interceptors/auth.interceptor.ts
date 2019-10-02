import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return this.authenticationService.token$.pipe(
            mergeMap(token => {

                if (token) {
                    request = request.clone({
                        setHeaders: {
                            Authorization: token
                        }
                    });
                }

                return next.handle(request).pipe(catchError(err => {
                    if (err.status === 401) {
                        this.authenticationService.redirectToLogin();
                    }
                    return throwError(err.error.message);
                }));
            })
        );

    }
}
