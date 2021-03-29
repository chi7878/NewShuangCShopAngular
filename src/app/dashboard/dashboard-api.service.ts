import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  link = 'https://vue-course-api.hexschool.io/api/workapi';
  cookies = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');

  constructor(private api: ApiService) { }

  getInnerProduct() {
    return this.api.getInCookies(`${this.link}/admin/products/all`, this.cookies);
  }

  getInnerOrder() {
    return this.api.getInCookies(`${this.link}/admin/orders`, this.cookies);
  }

  postUploadImg(file) {
    const data = new FormData();
    data.append('file-to-upload', file);
    return this.api.postInCookies(`${this.link}/admin/upload`, data, this.cookies);
  }

  postAddProduct(data) {
    return this.api.postInCookies(`${this.link}/admin/product`, {data}, this.cookies);
  }

  deleteProduct(id) {
    return this.api.deleteInCookies(`${this.link}/admin/product/${id}`, this.cookies);
  }

  putEditProduct(data, id) {
    return this.api.putInCookies(`${this.link}/admin/product/${id}`, {data}, this.cookies);
  }

  getCoupon(page) {
    const data = new HttpParams().set('page', page)
    return this.api.getInCookies(`${this.link}/admin/coupons`, this.cookies, data);
  }

  postAddCoupon(data) {
    return this.api.postInCookies(`${this.link}/admin/coupon`, {data}, this.cookies);
  }

  putEditCoupon(data, id) {
    return this.api.putInCookies(`${this.link}/admin/coupon/${id}`, {data}, this.cookies);
  }
  
  deleteCoupon(id) {
    return this.api.deleteInCookies(`${this.link}/admin/coupon/${id}`, this.cookies);
  }

  
  postLogout() {
    return this.api.postInCookies(`https://vue-course-api.hexschool.io/logout`, undefined,  this.cookies);
  }
}
