import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';


const routes: Routes = [
  {
    path: '', 
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'reset-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordModule' },
      { path: 'signup', loadChildren: './signup/signup.module#SignupModule' }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  declarations: [AuthComponent]
})
export class AuthRoutingModule { }
