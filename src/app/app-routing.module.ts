/*********************************************************************************************************************
 * Copyright (C) 2020 RyDOT Infotech Pvt. Ltd - All Rights Reserved
 *
 * CONFIDENTIAL
 *
 * All information contained herein is, and remains the property of RyDOT Infotech Pvt. Ltd and its partners,
 * if any. The intellectual and technical concepts contained herein are proprietary to RyDOT Infotech Pvt. Ltd and its
 * partners and may be covered by their and Foreign Patents, patents in process, and are protected by trade secret or
 * copyright law. Dissemination of this information or reproduction of this material is strictly forbidden unless
 * prior written permission is obtained from RyDOT Infotech Pvt. Ltd.
*********************************************************************************************************************/
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AuthGuard } from './shared/guards/auth.guard';
import { GlobalService } from './shared/services/global.service';
import { ApiService } from './shared/services/api.service';
import { InterceptorService } from './shared/services/interceptor.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: '', loadChildren: './layouts/home/home.module#HomeModule', canActivate: [AuthGuard], canActivateChild: [AuthGuard] },
  { path: 'auth', loadChildren: './layouts/auth/auth.module#AuthModule' },
  { path: 'not-found', loadChildren: './layouts/not-found/not-found.module#NotFoundModule' },
  //{ path: 'home', loadChildren: './layouts/home/home.module#HomeModule' },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [AuthGuard, GlobalService, ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
  }],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
