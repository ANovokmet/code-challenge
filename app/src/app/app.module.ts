import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EncoderComponent } from './encoder/encoder.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/guards/auth.guard';
import { reducer } from './store/root.reducer';
import { environment } from '../environments/environment';
import { RootEffects } from './store/root.effects';
import { rootFeatureKey } from './store';
import { EncodeService, LoginService } from './core/api';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        EncoderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        FormsModule,
        StoreModule.forRoot({ root: reducer }, {
            runtimeChecks: {
                strictStateImmutability: true,
                strictActionImmutability: true,
            }
        }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([RootEffects]),
        HttpClientModule
    ],
    providers: [
        AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
        EncodeService,
        LoginService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
