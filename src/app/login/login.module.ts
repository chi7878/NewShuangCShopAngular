import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './page/login-page/login-page.component';
import { CustomerLoginComponent } from './components/customer-login/customer-login.component';
import { InnerLoginComponent } from './components/inner-login/inner-login.component';

import { HomePageModule } from '../home-page/home-page.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [LoginPageComponent, CustomerLoginComponent, InnerLoginComponent],
  imports: [
  CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    HomePageModule
  ]
})
export class LoginModule { }
