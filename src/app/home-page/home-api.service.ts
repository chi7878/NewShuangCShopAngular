import { Injectable } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeApiService {
  link = 'https://vue-course-api.hexschool.io/api/workapi';
  constructor(private api: ApiService) { }

  getProductList(page) {
    return this.api.get(`${this.link}/products` ,page);
  }

  getProductListAll() {
    return this.api.get(`${this.link}/products/all`);
  }

  getProductInfo(id) {
    return this.api.get(`${this.link}/product/${id}`)
  }

  postAddCart(id, qty) {
    const data = {data : {product_id: id, qty}};
    return this.api.post(`${this.link}/cart`, data);
  }

  getCart() {
    return this.api.get(`${this.link}/cart`);
  }

  postCoupon(coupon) {
    const data = {data : {code: coupon}};
    return this.api.post(`${this.link}/coupon`, data);
  }

  deleteCart(id) {
    return this.api.delete(`${this.link}/cart/${id}`);
  }

  postAddOrder(data) {
    return this.api.post(`${this.link}/order`, {data})
  }
}
