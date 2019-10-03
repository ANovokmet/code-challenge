import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { LoginService } from './api/login.service';
import { AtLeastOneDigitDirective } from './directives/at-least-one-digit.directive';



@NgModule({
  declarations: [AtLeastOneDigitDirective],
  imports: [
    CommonModule
  ],
  exports: [AtLeastOneDigitDirective],
  providers: [AuthGuard, AuthService, LoginService]
})
export class CoreModule { }
