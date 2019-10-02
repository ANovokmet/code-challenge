import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EncoderComponent } from './encoder/encoder.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
    { path: '', redirectTo: 'encoder', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'encoder', component: EncoderComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
