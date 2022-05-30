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
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SharedDirectivesModule } from 'src/app/shared/directives/shared-directives.module';
import { SharedComponentsModule } from 'src/app/shared/components/shared-components.module';
import { ModalModule } from 'ngx-bootstrap/modal';



const routes: Routes = [
  {
    path: '', 
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'pricing', loadChildren: './pricing/pricing.module#PricingModule' },
      { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' }
    ]
  },
];

@NgModule({
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedDirectivesModule,
    SharedComponentsModule,
    ModalModule.forChild()
  ]
})
export class HomeModule { }
