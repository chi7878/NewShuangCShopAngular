import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard/page/dashboard-page/dashboard-page.component';
import { HomeComponent } from './home-page/page/home/home.component';
import { LoginPageComponent } from './login/page/login-page/login-page.component';
import { CheckOrderComponent } from './home-page/page/check-order/check-order.component';

import { LoginGuard } from '../login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPageComponent, canActivate: [LoginGuard] },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: HomeComponent },
  { path: 'contact', component: HomeComponent },
  { path: 'question', component: HomeComponent },
  { path: 'shopping', component: HomeComponent },
  { path: 'return', component: HomeComponent },
  { path: 'news', component: HomeComponent },
  { path: 'products', component: HomeComponent },
  { path: 'product/:id', component: HomeComponent },
  { path: 'checkOrder', component: CheckOrderComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'innerLogin', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
