import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EncoderComponent } from './encoder/encoder.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { CoreModule } from './core/core.module';
import { AuthGuard } from './core/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EncoderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [AuthGuard, { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
