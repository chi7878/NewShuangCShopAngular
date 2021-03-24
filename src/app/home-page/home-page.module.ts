import { NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeFooterComponent } from './components/home-footer/home-footer.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { ShoppingItemComponent } from './components/shopping-item/shopping-item.component';
import { ReturnPackageComponent } from './components/return-package/return-package.component';
import { NewsComponent } from './components/news/news.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { CheckOrderComponent } from './page/check-order/check-order.component';
import { CheckOrderHeaderComponent } from './components/check-order-header/check-order-header.component';
import { CheckOrderFirstComponent } from './components/check-order-first/check-order-first.component';
import { CheckOrderSecondComponent } from './components/check-order-second/check-order-second.component';
import { CheckOrderFinishedComponent } from './components/check-order-finished/check-order-finished.component';
import { NoticePopupComponent } from './components/notice-popup/notice-popup.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SwiperModule } from 'ngx-swiper-wrapper';


@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent, HomeMainComponent, HomeFooterComponent, AboutUsComponent, ContactUsComponent, QuestionListComponent, ShoppingItemComponent, ReturnPackageComponent, NewsComponent, ProductListComponent, ProductInfoComponent, CheckOrderComponent, CheckOrderHeaderComponent, CheckOrderFirstComponent, CheckOrderSecondComponent, CheckOrderFinishedComponent, NoticePopupComponent, LoadingPageComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatBadgeModule,
    MatProgressBarModule,
    SwiperModule
  ],
  exports: [
    LoadingPageComponent
  ]
})
export class HomePageModule { }
