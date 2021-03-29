import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './page/dashboard-page/dashboard-page.component';
import { LeftBarComponent } from './components/left-bar/left-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { CouponListComponent } from './components/coupon-list/coupon-list.component';
import { ProjectInfoPopupComponent } from './components/project-info-popup/project-info-popup.component';
import { CouponInfoPopupComponent } from './components/coupon-info-popup/coupon-info-popup.component';
import { AlertPopupComponent } from './components/alert-popup/alert-popup.component';

import { HomePageModule } from '../home-page/home-page.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { OrderInfoPopupComponent } from './components/order-info-popup/order-info-popup.component';

@NgModule({
  declarations: [DashboardPageComponent, LeftBarComponent, HeaderComponent, ProjectListComponent, OrderListComponent, CouponListComponent, ProjectInfoPopupComponent, AlertPopupComponent, CouponInfoPopupComponent, OrderInfoPopupComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HomePageModule,
    PerfectScrollbarModule
  ],
  entryComponents: [ProjectInfoPopupComponent]
})
export class DashboardModule { }
