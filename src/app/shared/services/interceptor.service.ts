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
import { Injectable, NgModule } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest, HttpEvent, HttpErrorResponse, HttpResponse } from '@angular/common/http';
//import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { GlobalService } from './global.service';

@Injectable()
@NgModule({
  imports: []
})
export class InterceptorService implements HttpInterceptor {

  constructor(
  private router: Router,
  private globalService: GlobalService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('dt_user_token');
    
    if (!!accessToken) {
      request = request.clone({
        setHeaders: { 'dt_user_token': accessToken }
      });
    }

    return next.handle(request).pipe(tap((response: HttpEvent<any>) => {
        if (response instanceof HttpResponse) {

          if (response.status === 401) {
            localStorage.clear();
            this.router.navigate(['/']);
          }
        }
      }, (error) => {
        if (error.status === 0) {
          error.error = {
            errors: [{
              msg:'LOAD.ERROR.UNABLE_TO_CONNECT',
              param: null
            }]
          };
        } else if (error.status === 401) {
          localStorage.clear();
          this.router.navigate([this.globalService.routeData.auth]);
        }
      })
    );

  }
}
